// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// BLOG READ MORE TOGGLE
document.querySelectorAll(".readmore").forEach(btn => {
    btn.addEventListener("click", () => {
        const parent = btn.parentElement;
        parent.querySelector(".full").classList.toggle("hidden");
        btn.textContent = btn.textContent === "Read More" ? "Show Less" : "Read More";
    });
});

// ROTATING MOTIVATIONAL QUOTES
const quotes = [
    "“Take care of your body; it’s the only place you live.”",
    "“Health is a state of complete harmony of the body, mind, and spirit.”",
    "“Yoga is the journey of the self, through the self, to the self.”",
    "“Let food be thy medicine and medicine be thy food.”",
    "“A healthy outside starts from the inside.”"
];

let tipIndex = 0;
const tipBanner = document.getElementById("tipBanner");
setInterval(() => {
    tipIndex = (tipIndex + 1) % quotes.length;
    tipBanner.textContent = quotes[tipIndex];
}, 12000); // rotate every 12 seconds
