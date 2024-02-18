function setBackgroundColorById(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add('bg-lime-400');
}

function totalPrice() {
    const totalPrice = document.getElementById('total-price').innerText;
    const total = parseInt(totalPrice) + 550;
    document.getElementById("total-price").innerText = total;
    return total;
}

function havePhoneNumber(phoneNumber) {
    return phoneNumber.length >= 1;
}