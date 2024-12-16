const formBox = document.querySelector('.form-box')
const burger = document.querySelectorAll('.burger')

burger.forEach(b => b.addEventListener("click", function () {
    if (formBox.classList.contains('active')) {
        formBox.classList.remove('active');
    } else {
        formBox.classList.add('active');
    }
}));