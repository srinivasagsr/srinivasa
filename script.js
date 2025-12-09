// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// BLOG READ MORE
document.querySelectorAll(".readmore").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.querySelector(".full").classList.toggle("hidden");
        btn.textContent = btn.textContent === "Read More" ? "Show Less" : "Read More";
    });
});
