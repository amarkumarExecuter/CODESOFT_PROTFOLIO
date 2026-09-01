
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});




const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



console.log("Welcome to Amar Kumar's Portfolio!");
