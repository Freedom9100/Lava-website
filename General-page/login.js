document.querySelector('.green-btn').addEventListener('click', function () {
    const form = this.closest('form');
    if (form.checkValidity()) {
        Toastify({
            text: "Вы удачно вошли в аккаунт :)",
            duration: 3000
        }).showToast();
    } 
})

