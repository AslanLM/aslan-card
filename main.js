const flipper = document.getElementById("card-flip");
    flipper.addEventListener("dblclick", () => {
    flipper.classList.toggle("flip");
    });

const cardFront = document.getElementById("card-front");
    cardFront.addEventListener("click", function (e) {
    let rect = this.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");
    this.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 1000);
});

const cardBack = document.getElementById("card-back");
    cardBack.addEventListener("click", function (e) {
        let rect = this.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let ripple = document.createElement("span");
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 1000);
});
