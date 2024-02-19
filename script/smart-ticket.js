// first button
function buyTickets() {
    const targetElement = document.getElementById('seat-selection');
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// seat selection
let count = 0;

const allSeat = document.getElementsByClassName('seat-btn');

const applyBtn = document.getElementById('apply-btn');
applyBtn.disabled = true;

const nextButton = document.getElementById('next-btn');
nextButton.disabled = true;

for (const seat of allSeat) {
    seat.addEventListener("click", function seatSelect(event) {
        if (count >= 4) {
            // seat.disabled = true;
            alert('You cannot buy more than 4 Tickets!')
        }
        else {
            count += 1;
            if (count === 4) {
                applyBtn.disabled = false;
            }
            if (count > 0 && havePhoneNumber(phoneNumberInput.value)) {
                nextButton.disabled = false;
            }

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

//next button enabling
nextButton.addEventListener("click", function next() {
    console.log('Next button clicked');
});
const phoneNumberInput = document.getElementById('phone-number')
phoneNumberInput.addEventListener("input", function validatePhone() {
    if (count > 0 && havePhoneNumber(phoneNumberInput.value)) {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
});

// coupon enabling
const couponDiv = document.getElementById('coupon-div');
applyBtn.addEventListener("click", function apply() {
    const totalPrices = totalPrice();
    const grandTotal = document.getElementById('grand-total');
    const couponInput = document.getElementById('coupon-input').value;
    const discount = document.getElementById('discount');
    const discountUl = document.getElementById('discount-ul');
    const couponCode = couponInput.split("").join("");
    if (couponCode === "NEW15") {
        grandTotal.innerText = totalPrices - totalPrices * 0.15;
        discountUl.classList.remove('hidden');
        discountUl.classList.add('flex');
        discount.innerText = totalPrices * 0.15;
        applyBtn.removeEventListener("click", apply);
        couponDiv.classList.add('hidden');
    }
    else if (couponCode === "Couple 20") {
        grandTotal.innerText = totalPrices - totalPrices * 0.20;
        discountUl.classList.remove('hidden');
        discountUl.classList.add('flex');
        discount.innerText = totalPrices * 0.20;
        applyBtn.removeEventListener("click", apply);
        couponDiv.classList.add('hidden');
    }
    else {
        alert("Invalid Coupon Code");
    }
})

