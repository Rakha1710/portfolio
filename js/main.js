(function () {
  // Fungsi untuk inisialisasi menu mobile
  function initMobileMenu() {
    const btn = document.getElementById("menuBtn");
    const menu = document.getElementById("mobileMenu");

    if (!btn || !menu) return;

    // Pastikan menu dimulai dalam keadaan tertutup
    menu.classList.add("menu-closed");

    // Hapus event listener lama (jika ada) dan tambahkan yang baru
    btn.removeEventListener("click", toggleMenu);
    btn.addEventListener("click", toggleMenu);

    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      menu.classList.toggle("menu-closed");
      console.log("Menu toggled"); // Untuk debugging
    }

    // Tutup menu saat link di klik
    const menuLinks = menu.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menu.classList.add("menu-closed");
      });
    });

    // Tutup menu saat klik di luar (opsional)
    document.addEventListener("click", function (event) {
      const isClickInside =
        btn.contains(event.target) || menu.contains(event.target);
      if (!isClickInside && !menu.classList.contains("menu-closed")) {
        menu.classList.add("menu-closed");
      }
    });
  }

  // Jalankan setelah DOM siap
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileMenu);
  } else {
    initMobileMenu();
  }

  // Smooth scroll untuk anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#") return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
