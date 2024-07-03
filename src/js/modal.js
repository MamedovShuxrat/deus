const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", function () {
    modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});