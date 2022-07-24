// Form blur event listners
document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zipcode').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.querySelector('#name');
    // regex to check if name is between 2 and 10 characters
    let re = /^[a-zA-Z]{2,10}$/;

    console.log(re.test(name.value));
    
    if(re.test(name.value)) {
        name.classList.remove('is-invalid');
        // name.classList.add('text-success')

    }else {
        name.classList.add('is-invalid');
    }
}

function validateZip() {
    const zip = document.querySelector('#zipcode');
    // console.log(zip);
    // regex to check if name is between 2 and 10 characters
    let re = /^[0-9]{5}(-[0-9]{4})?$/;

    // console.log(re.test(zip.value));
    
    if(re.test(zip.value)) {
        zip.classList.remove('is-invalid');

    }else {
        zip.classList.add('is-invalid');
    }
}

function validateEmail() {
    const email = document.querySelector('#email');
    console.log(email);
    // email starts with letters or numericals, has @ between, some text and ends with . something
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    console.log(re.test(email.value));
    if(re.test(email.value)) {
        email.classList.remove('is-invalid');

    }else {
        email.classList.add('is-invalid');
    }
}

function validatePhone() {
    const phone = document.querySelector('#phone');
    console.log(phone);

    let re = /^([\+][0-9]{1,3})?[\-\s\.]?[(]?[0-9]{3}[)]?[\-\s\.]?[(]?[0-9]{3}[)]?[\-\s\.]?[(]?[0-9]{4}[)]?$/;

    console.log(re.test(phone.value));
    if(re.test(phone.value)) {
        phone.classList.remove('is-invalid');

    }else {
        phone.classList.add('is-invalid');
    }
}