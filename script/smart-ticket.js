// first button
function buyTickets() {
    const targetElement = document.getElementById('seat-selection');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// seat selection
let count = 0;

const allSeat = document.getElementsByClassName('seat-btn');

for (const seat of allSeat) {
    seat.addEventListener("click", function seatSelect(event) {
        if (count >= 4) {
            // seat.disabled = true;
            alert('You cannot buy more than 4 Tickets!')
        }
        else {
            count += 1;

            const selectedSeat = seat.innerText;
            console.log(selectedSeat);


            // //set bg- color
            setBackgroundColorById(selectedSeat);

            //total seat count
            const totalSeat = document.getElementById('total-seat');
            const remainingSeatText = totalSeat.innerText;
            let remainingSeat = parseInt(remainingSeatText);
            remainingSeat -= 1;
            totalSeat.innerText = remainingSeat;

            //limitation of same seat selection
            seat.removeEventListener("click", seatSelect);

            // add cart
            const cartDiv = document.getElementById('cart-div');

            const ul = document.createElement("ul");
            const li = document.createElement("li");
            const li2 = document.createElement("li");
            const li3 = document.createElement("li");

            li.innerText = selectedSeat;
            li2.innerText = 'Economy';
            li3.innerText = 550;

            ul.appendChild(li);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.classList.add('flex', 'justify-between', 'text-[#03071299]', 'font-medium', 'py-3');
            cartDiv.appendChild(ul);

            //cart count
            const cartCount = document.getElementById('cart-count');
            cartCount.innerText = count;

            //total price
            totalPrice();

        }
    })
}

function totalPrice() {
    const totalPrice = document.getElementById('total-price').innerText;
    const total = parseInt(totalPrice) + 550;
    document.getElementById("total-price").innerText = total;
    return total;
}

function grandTotal() {

}

// coupon
const applyBtn = document.getElementById('apply-btn');
applyBtn.addEventListener("click", function apply() {
    const totalPrices = totalPrice();
    const grandTotal = document.getElementById('grand-total');
    const couponInput = document.getElementById('coupon-input').value;
    const couponCode = couponInput.split(" ").join("");
    if (couponCode === "NEW15") {
        grandTotal.innerText = totalPrices - totalPrices * 0.15;
        applyBtn.removeEventListener("click", apply);
    }
    else if (couponCode === "Couple20") {
        grandTotal.innerText = totalPrices - totalPrices * 0.20;
        applyBtn.removeEventListener("click", apply);
    }
    else {
        alert("Invalid Coupon Code");
    }
})

