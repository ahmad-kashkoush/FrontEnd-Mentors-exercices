'use strict';
const mainContainer = document.querySelector('main');
const successContainer = document.querySelector('.success');
// todo validate email
const form = mainContainer.querySelector('form');
const paragraph = form.querySelector('.required');
const emailField = form.querySelector('input')
const validateField = function () {
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (!filter.test(emailField.value)) {
        paragraph.style.display = "block";
        emailField.value = "";
        emailField.classList.add('invalid');
        return false;
    }
    paragraph.style.display = "none";
    emailField.value = "";
    return true;
}
document.addEventListener("focusin", function (e) {
    if (e.target !== emailField) return;
    if (emailField.classList.contains('invalid')) {
        emailField.classList.remove('invalid');
        paragraph.style.display = "none";
    }

})

// ✅ success button
mainContainer.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateField()) return;
    successContainer.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
});
//  ✅ dismiss button
const showMainContainer = function (e) {
    e.preventDefault();
    if (successContainer.classList.contains("hidden")) return;
    successContainer.classList.toggle("hidden");
    mainContainer.classList.toggle("hidden");
    paragraph.style.display = "none";
}
successContainer.querySelector("button").addEventListener("click", showMainContainer);
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape")
        showMainContainer(e);
});


// for dark mode 

let btn = document.querySelector(".btn");
btn.addEventListener("click" , ()=>{
        document.querySelector(".bdy").classList.toggle("dark")
    document.querySelector("main").classList.toggle("dark")
    document.querySelector(".success").classList.toggle("dark")
    document.querySelector(".header-img").classList.toggle("dark")
    document.querySelector(".success h1").classList.toggle("dark")
    document.querySelector(".success p").classList.toggle("dark")
    document.querySelector(".content h1").classList.toggle("dark")
    document.querySelector(".content p").classList.toggle("dark")
    document.querySelector("form label").classList.toggle("dark")
})

    