const form = document.querySelector('form');
const input = document.querySelector('input');
const alertInfo = document.querySelector('.text-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value == "") {
        alertMsg();
        return(alertInfo.innerHTML = "Whoops! It looks like you forgot to add your email");
    }

    if (!input.value.match(regex)) {
        alertMsg()
        return (alertInfo.innerHTML.HTML = "Please provide a valid email");
    }

    return alert('Thank you for subscribe us.');
});

function alertMsg() {
    input.style.borderColor =  "hsl(354, 100%, 66%)";
    alertInfo.style.display = "block";
}

function clearAlert() {
    input.style.borderColor = "hsl(354, 100%, 66%)";
    alertInfo.style.display = "none";
}

input.addEventListener("keypress", () => {
    clearAlert()
});