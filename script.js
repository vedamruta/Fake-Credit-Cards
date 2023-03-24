// cardholder name entered in input field
const cardholder_name = document.getElementById('name');
console.log(cardholder_name.value);

// name displayed on the front-side of the card
const front_name = document.getElementById('front_name');

// this is confirm button element
const confirm_btn = document.getElementById('confirm');

// card number entered in input field
const number = document.getElementById('number');

// card number displayed on the front-side of the card
const front_num = document.getElementById('front_num');

// MM month displayed on the front-size of the card
const span_mm = document.getElementById('span_mm');

// YY year displayed on the front-size of the card
const span_yy = document.getElementById('span_yy');

// month(MM) entered in the input field
const mm = document.getElementById('mm');

// year(YY) entered in the input field
const yy = document.getElementById('yy');

// cvc entered in the input field
const cvc = document.getElementById('cvc');

// cvc displayed on the front-size of the card
const back_cvc = document.getElementById('back_cvc');

const cname_i = document.getElementById('cno_i');
const namesmall = document.getElementById('namesmall');

function inputHandler(field) {
    switch(field) {
        case "cardname": 
            nameHandler();
            break;
        case "cardnumber": 
            numberHandler();
            break;
        case "date": 
            dateHandler();
            break;
        case "cvc": 
            cvcHandler();
            break;
    }
}

function nameHandler() {
    // const cname_i = document.getElementById('cno_i');
    // const namesmall = document.getElementById('namesmall');
    let regex = /^[a-zA-Z ]*$/;
    console.log(regex.test(cardholder_name.value));
    if(regex.test(cardholder_name.innerHTML)==false || cardholder_name.value == "") {
        cname_i.style.visibility = 'visible';
        namesmall.style.visibility = 'visible';
    }
    else {
        cname_i.style.visibility = 'hidden';
        namesmall.style.visibility = 'hidden';
    }
    console.log(cardholder_name.innerHTML);
}

cardholder_name.addEventListener('change', inputHandler('cardname'));
console.log(nameHandler());



cardholder_name.addEventListener('input', () => {
    front_name.innerHTML = cardholder_name.value;
    cno_i.style.visibility = 'hidden';
    namesmall.style.visibility = 'hidden';
});
number.addEventListener('input', () => {
    front_num.innerHTML = number.value;
});
mm.addEventListener('input', () => {
    span_mm.innerHTML = mm.value;
});
yy.addEventListener('input', () => {
    span_yy.innerHTML = yy.value;
});
cvc.addEventListener('input', () => {
    back_cvc.innerHTML = cvc.value;
});


confirm_btn.addEventListener('click', () => {

    // let cardnumregex = /\d{4} \d{4} \d{4} \d{4}$/;
    // if(cardnumregex.test(number.value)) {
        
    //}

    // empty form submission wala tar fix jhala ithe.
    if(cardholder_name.value=="" || number.value=="" || mm=="" || yy=="" || cvc == "") {
        
    }
    window.location.href = 'thankyou.html'; 
});
