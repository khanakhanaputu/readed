menuBtn = document.getElementById("btn-menu");
sidebar = document.getElementById("sidebar");
overlay = document.getElementById("overlay");
menuIcon = document.getElementById("menu-icon");
body = document.body;

menuBtn.addEventListener("click", () => {
  const isOpen = !sidebar.classList.contains("translate-x-full");

  if (isOpen) {
    // tutup
    menuIcon.src = "../public/icons/menu.svg";
    sidebar.classList.add("translate-x-full");
    overlay.classList.add("hidden");
    body.classList.add("overflow-scroll");
    body.classList.remove("overflow-hidden");
  } else {
    // buka
    menuIcon.src = "../public/icons/menu-close.svg";
    sidebar.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    body.classList.add("overflow-hidden");
    body.classList.remove("overflow-scroll");
  }
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
  body.classList.remove("overflow-hidden");
  body.classList.add("overflow-scroll");
  menuIcon.src = "../public/icons/menu.svg";
});
