document.querySelector('.green-btn').addEventListener('click', function () {
    const form = this.closest('form');
    if (form.checkValidity()) {
        Toastify({
            text: "Звонок заказан",
            duration: 3000
        }).showToast();
    }
})