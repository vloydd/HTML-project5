//Validation of our feedback form;
const form = document.getElementById('form');
form.addEventListener('submit', formSend);
async function formSend(e) {
    let error = formValidate(form);
    if (error > 0) {
        e.preventDefault();
    }
    if (error === 0) {
        return true;
    }


}

function formValidate(form) {
    let error = 0;
    let freq = document.querySelectorAll('._req');

    for (let index = 0; index < freq.length; index++) {
        const input = freq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'REQUIRED FIELD';
                }
                else {
                    input.value = 'WRONG FORMAT';
                }
            }
        } else if (input.classList.contains('_tel')) {
            if (telTest(input)) {
                formAddError(input);
                error++;
                if (input.value === '') {
                    input.value = 'REQUIRED FIELD';
                }
                else {
                    input.value = 'WRONG FORMAT';
                }
            }
        } /*else if (input.classList.contains('_spec')) {
            if (input.value === '') {
                formAddError(input);
                error++;
                input.value = 'REQUIRED FIELD';
            }
            else if (input.value !== 'developer' && input.value !== '' && input.value !== 'QA') {
                formAddError(input);
                error++;
                input.value = 'WRONG FORMAT';
            }
        }*/ else if  (input.classList.contains('_check') && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === 'REQUIRED FIELD') {
                formAddError(input);
                error++;
                input.value = 'REQUIRED FIELD';
            }
            if (input.value === '') {
                formAddError(input);
                error++;
                input.value = 'REQUIRED FIELD';
            }
        }
    }
    return error;
}

//works with errors;
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}

function emailTest(input) {
    //email format;
    const res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
    return !res.test(input.value);
}

function telTest(input) {
    //const res = /^[0-9]+$/ //just a numbers;

    //different formats (the best way is just 10 numbers);
    const res = /^\(?[+ ]?(\d{2})\)?[- ]?(\d{3})?[- ]?(\d{2})?[- ]?(\d{2})[- ]?(\d{3})$/;
    return !res.test(input.value);
}