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
const cno_i = document.getElementById('cno_i');
const numnum = document.getElementById('numnum');

function inputHandler(field) {
    switch(field) {
        case "cardname": 
            nameHandler();
            break;
        case "cardnumber": 
            numberHandler();
            break;
        case "date": 
            dateHandler(mm, yy);
            break;
        case "cvc": 
            cvcHandler();
            break;
    }
}

function nameHandler() {
    let regex = /^[a-zA-Z ]*$/;
    console.log(regex.test(cardholder_name.value));
    if(regex.test(cardholder_name.value)==false || cardholder_name.value == "") {
        cname_i.style.visibility = 'visible';
        namesmall.style.visibility = 'visible';
    }
    else {
        cname_i.style.visibility = 'hidden';
        namesmall.style.visibility = 'hidden';
    }
    console.log(cardholder_name.value);
}

function numberHandler() {
    let cardnumregex = /\d{4} \d{4} \d{4} \d{4}$/;
    if(cardnumregex.test(number.value) == false) {
        // confirm_btn.disabled = false;
        cno_i.style.visibility = 'visible';
        numnum.visibility = 'visible';
    }
    else {
        // confirm_btn.disabled = true;
        // confirm_btn.style.backgroundColor = 'thistle';
        numnum.visibility = 'hidden';
        cno_i.style.visibility = 'hidden';
    }
    console.log(cardnumregex.test(number.value));
    console.log(number.value);
}

function dateHandler(mm, yy) {
    const cdate_i = document.getElementById('cdate_i');
    const datesmall = document.getElementById('datesmall');
    let mmyyregex = /\d{2}$/;

    console.log(mm.value);
    console.log(yy.value);

    if(mmyyregex.test(mm.value) && mmyyregex.test(yy.value)) {
        if(mm.value<=12 && yy.value>=2023) {
            cdate_i.style.visibility = 'hidden';
            datesmall.style.visibility = 'hidden';
        }
    }
    else {
        cdate_i.style.visibility = 'visible';
        datesmall.style.visibility = 'visible';
    }
    console.log(mmyyregex.test(mm.value));
    console.log(mmyyregex.test(yy.value));
}

function cvcHandler() {
    const cvc_i = document.getElementById('cvc_i');
    const cvcsmall = document.getElementById('cvcsmall');

    // hya regex madhe error ahe '0000' enter kelyavar pan accept hotay whereas fakt 3 digit number ch accept hoyla pahije
    let cvcregex = /\d{3}$/; 
    if(cvcregex.test(cvc.value)) {
        cvc_i.style.visibility = 'hidden';
        cvcsmall.style.visibility = 'hidden';
    }
    else {
        cvc_i.style.visibility = 'visible';
        cvcsmall.style.visibility = 'visible';
    }
}

// cardholder_name.addEventListener('change', inputHandler('cardname'));
// console.log(nameHandler());



// cardholder_name.addEventListener('input', () => {
//     // Set a delay of 500 milliseconds before calling inputHandler()
//     setTimeout(() => inputHandler('cardname'), 3000);
// });

cardholder_name.addEventListener('change', () => inputHandler('cardname'));

number.addEventListener('change', () => inputHandler('cardnumber'));

mm.addEventListener('change', () => inputHandler('date'));

yy.addEventListener('change', () => inputHandler('date'));

cvc.addEventListener('change', () => inputHandler('cvc'));




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
