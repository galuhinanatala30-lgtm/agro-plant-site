// Поиск растений

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let filter = searchInput.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(filter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// Кнопка наверх

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "12px 16px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.backgroundColor = "#2e7d32";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.display = "none";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Подсветка  

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    if (link.href === window.location.href) {

        link.style.backgroundColor = "#1b5e20";
        link.style.padding = "8px 12px";
        link.style.borderRadius = "6px";

    }

});

// сообщение

window.addEventListener("load", function () {

    console.log("Сайт База растений успешно загружен.");

});

