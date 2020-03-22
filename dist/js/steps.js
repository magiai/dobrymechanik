/*! Dory Mechanik v0.0.1 | (c) 2020 Dominika Adamska | MIT License | https://github.com/magiai/dobrymechanik */
'use strict'

function showCalendar() {
    let calendar = document.getElementById('calendar');
    calendar.style.display = 'block';
}

//form validation
function validateForm () {
    let formName = "userDataForm";
    let errorsDict = {
        name: false,
        email: false,
        phone: false
    };

    let name = document.forms[formName]["name"].value;
    if (name === '') errorsDict.name= true;

    let email = document.forms[formName]["email"].value;
    if (!email || /(^\w.*@\w+\.\w)/.test(email) === false) errorsDict.email = true;

    let phone = document.forms[formName]["phone"].value;
    if (phone === '') errorsDict.phone = true;

    let formValid = true;
    for(let key in errorsDict) {
        let elementId = 'validation-' + key;
        if (errorsDict[key] === true) {
            formValid = false;
            document.getElementById(elementId).style.display = 'block';
        } else {
            document.getElementById(elementId).style.display = 'none';
        }
    }

    if (formValid === false) return false;
    window.location.href = '#verification-code';

}



