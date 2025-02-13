// JavaScript Document

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'text-purple-300' de todos os links e adiciona 'text-gray-400'
            links.forEach(l => l.classList.remove("text-purple-300"));
            links.forEach(l => l.classList.add("text-gray-400"));

            // Adiciona 'text-purple-300' apenas no item clicado
            this.classList.add("text-purple-300");
            this.classList.remove("text-gray-400");
        });
    });
});