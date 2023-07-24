//This main's code object is validate email input and change image if the user's screen is less than 1000px
var card = document.getElementById('full-card');
const successMessage = document.getElementById('success-message');
const error = document.getElementById('error');
const emailInput = document.getElementById('email');
function validarEmail() {
    const result = variables();
    if (result == true) {
        successRedirect();
    } else {
        addErrorStyles();
    }
    function successRedirect() {
        card.style.display = 'none';
        successMessage.style.display = 'block';
    }
    function addErrorStyles() {
        error.style.display = 'block';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
        emailInput.classList.add('error-email');
    }
    function variables() {
        const email = document.getElementById('email').value;
        const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const result = regex.test(email);
        return result;
    }
}
if (window.innerWidth < 950) {
    changeImage();
}
function changeImage() {
    document.getElementById("right-card-image").src = "../src/images/illustration-sign-up-mobile.svg";
}