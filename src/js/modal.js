document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const openModalButtons = document.querySelectorAll(".openModal");
    const closeModal = document.getElementById("closeModal");

    const form = document.querySelector('.modal__form');
    const sendBtn = document.getElementById('send');

    if (!modal || !closeModal || !form || !sendBtn) {
        console.error('Modal elements not found!');
        return;
    }

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (form.checkValidity()) {
            modal.style.display = 'none';
        } else {
            alert('Заполните все поля');
        }
    });

    openModalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = "block";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});
