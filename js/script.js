document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const backToTop = document.createElement("button");
    const darkModeToggle = document.createElement("button");

    /* ========== 🟠 Menuja Mobile🟠 ========== */
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    /* ========== 🔵 Bar stick 🔵 ========== */
    const header = document.querySelector("header");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    /* ========== 🟢 Levizje Smooth 🟢 ========== */
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    /* ========== 🔴 Kthehemi tek butoni 🔴 ========== */
    backToTop.innerText = "⬆️ Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    /* ========== 🌙 Ekrani i zi 🌙 ========== */
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });
});
