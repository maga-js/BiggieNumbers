// Плавное появление страницы
document.body.style.opacity = "0";

window.addEventListener("load", () => {
    document.body.style.transition = "opacity .5s ease";
    document.body.style.opacity = "1";
});

// Анимация карточек при наведении
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// Плавная прокрутка для внутренних ссылок
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});