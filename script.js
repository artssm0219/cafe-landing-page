const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("#primary-navigation");
const siteHeader = document.querySelector(".site-header");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];
const desktopQuery = window.matchMedia("(min-width: 760px)");

function setMenuState(isOpen) {
  if (!navToggle || !siteNav) {
    return;
  }

  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く",
  );
  siteNav.classList.toggle("is-open", isOpen);

  if (desktopQuery.matches) {
    siteNav.removeAttribute("aria-hidden");
  } else {
    siteNav.setAttribute("aria-hidden", String(!isOpen));
  }
}

function syncNavigationForViewport() {
  if (!navToggle || !siteNav) {
    return;
  }

  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "メニューを開く");

  if (desktopQuery.matches) {
    siteNav.removeAttribute("aria-hidden");
  } else {
    siteNav.setAttribute("aria-hidden", "true");
  }
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setMenuState(!isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!desktopQuery.matches) {
        setMenuState(false);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navToggle.getAttribute("aria-expanded") === "true"
    ) {
      setMenuState(false);
      navToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";

    if (isOpen && siteHeader && !siteHeader.contains(event.target)) {
      setMenuState(false);
    }
  });

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", syncNavigationForViewport);
  } else {
    desktopQuery.addListener(syncNavigationForViewport);
  }

  syncNavigationForViewport();
}

const demoForm = document.querySelector("[data-demo-form]");
const demoButton = document.querySelector("[data-demo-button]");
const formStatus = document.querySelector("#form-status");

function showDemoFormStatus() {
  if (formStatus) {
    formStatus.hidden = false;
    formStatus.textContent =
      "このフォームはデモです。入力内容は送信されず、予約や問い合わせは完了しません。";
  }
}

if (demoForm && formStatus) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showDemoFormStatus();
  });
}

if (demoButton) {
  demoButton.addEventListener("click", showDemoFormStatus);
}
