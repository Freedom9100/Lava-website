document.querySelector(".sub").addEventListener("click", function () {
    const form = this.closest("form");
    if (form.checkValidity()) {
        Toastify({
            text: "Спасибо за подписку",
            duration: 3000
        }).showToast();
    }
});