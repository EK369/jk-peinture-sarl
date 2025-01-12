const form = document.getElementById('contact_body');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const submitButtonP = document.getElementById('submitButton-p');
const charCountInput = document.getElementById('charCountInput');
const charCountTextarea = document.getElementById('charCountTextarea');
const tx = document.getElementsByTagName("textarea");
function OnInput() {
    this.style.height = 0;
    this.style.height = (this.scrollHeight) + "px";
}
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height: " + (tx[i].scrollHeight) + "px; overflow-y: hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

subjectInput.setAttribute("maxlength", SUBJECT_MAX_LENGTH);
messageInput.setAttribute("maxlength", MESSAGE_MAX_LENGTH);

let checkValidity = {
    name: false,
    email: false,
    phoneNumber: false,
    subject: false,
    message: false
};

charCountInput.innerHTML = `0/${SUBJECT_MAX_LENGTH}`;
charCountTextarea.innerHTML = `0/${MESSAGE_MAX_LENGTH}`;
nameInput.addEventListener('change', (e) => {
    targetedValue = e.target.value;
    
    if(validateFullName(targetedValue)){
        checkValidity['name'] = true;
        nameInput.style.borderColor = "var(--green-color)";
        // submitButtonP.innerHTML = "The name you wrote is valid!";
        submitButtonP.innerHTML = "";
        // submitButtonP.style.color = "var(--green-color)";
    }  
    else{
        checkValidity['name'] = false;
        nameInput.style.borderColor = "var(--red-color)";
        // submitButtonP.innerHTML = "Please write a valid full name!";
        submitButtonP.innerHTML = "Bitte geben Sie einen gültigen vollständigen Namen ein!";
        submitButtonP.style.color = "var(--red-color)";
    }
})

emailInput.addEventListener('change', (e) => {
    targetedValue = e.target.value;
    
    if(validateEmail(targetedValue)){
        checkValidity['email'] = true;
        emailInput.style.borderColor = "var(--green-color)";
        // submitButtonP.innerHTML = "The email you wrote is valid!";
        submitButtonP.innerHTML = "";
        // submitButtonP.style.color = "var(--green-color)";
    }  
    else{
        checkValidity['email'] = false;
        emailInput.style.borderColor = "var(--red-color)";
        // submitButtonP.innerHTML = "Please write a valid email!";
        submitButtonP.innerHTML = "Bitte geben Sie eine gültige Email-Adresse ein!";
        submitButtonP.style.color = "var(--red-color)";
    }
})

phoneNumberInput.addEventListener('change', (e) => {
    targetedValue = e.target.value;
    
    if(validateGermanPhoneNumber(targetedValue)){
        checkValidity['phoneNumber'] = true;
        phoneNumberInput.style.borderColor = "var(--green-color)";
        // submitButtonP.innerHTML = "The phone number you wrote is valid!";
        submitButtonP.innerHTML = "";
        // submitButtonP.style.color = "var(--green-color)";
    }  
    else{
        checkValidity['phoneNumber'] = false;
        phoneNumberInput.style.borderColor = "var(--red-color)";
        // submitButtonP.innerHTML = "Please write a valid phone number!";
        submitButtonP.innerHTML = "Bitte geben Sie eine gültige Telefonnummer ein!";
        submitButtonP.style.color = "var(--red-color)";
    }
})

subjectInput.addEventListener('change', (e) => {
    targetedValue = e.target.value;
    if(subjectInput.getAttribute("maxlength") != `${SUBJECT_MAX_LENGTH}`)
        subjectInput.setAttribute("maxlength", SUBJECT_MAX_LENGTH);
    if(validateSubject(targetedValue)) {
        checkValidity['subject'] = true;
        subjectInput.style.borderColor = "var(--green-color)";
        // subjectInputSpan.style.borderColor = "var(--green-color)";
        // submitButtonP.innerHTML = "The subject you wrote is valid!";
        submitButtonP.innerHTML = "";
        submitButtonP.style.color = "var(--green-color)";
    } else {
        checkValidity['subject'] = false;
        subjectInput.style.borderColor = "var(--red-color)";
        // subjectInputSpan.style.borderColor = "var(--red-color)";
        // submitButtonP.innerHTML = "Subject must contain only alphabetic letters and spaces!";
        submitButtonP.innerHTML = "Subject darf nur Buchstaben und Leerzeichen enthalten!";
        submitButtonP.style.color = "var(--red-color)";
    }
})

messageInput.addEventListener('change', (e) => {
    targetedValue = e.target.value;
    if(messageInput.getAttribute("maxlength" != `${MESSAGE_MAX_LENGTH}`))
        messageInput.setAttribute("maxlength", MESSAGE_MAX_LENGTH);
    if(validateMessage(targetedValue)) {
        checkValidity['message'] = true;
        messageInput.style.borderColor = "var(--green-color)";
        // messageInputSpan.style.borderColor = "var(--green-color)";
        // submitButtonP.innerHTML = "The message you wrote is valid!";
        submitButtonP.innerHTML = "";
        submitButtonP.style.color = "var(--green-color)";
    } else {
        checkValidity['subject'] = false;
        messageInput.style.borderColor = "var(--red-color)";
        // messageInputSpan.style.borderColor = "var(--red-color)";
        // submitButtonP.innerHTML = "Message must contain only alphabetic letters and spaces!";
        submitButtonP.innerHTML = "Message darf nur Buchstaben, Leerzeichen enthalten, .,!?";
        submitButtonP.style.color = "var(--red-color)";
    }
})

// function countChars(countfrom, displayto) {
//     var len = document.getElementById(countfrom).value.length;
//     document.getElementById(displayto).innerHTML = len;
// }

function sendEmail(e) {
    e.preventDefault();
    const name = nameInput.value; //required
    const email = emailInput.value; //required
    const phone = phoneNumberInput.value; //required
    let subject;
    let message;
    if(subjectInput.value.length < SUBJECT_MAX_LENGTH)
        subject = subjectInput.value.trim();
    else
        subject = subjectInput.value.substring(0, SUBJECT_MAX_LENGTH).trim();
    if(messageInput.value.length < MESSAGE_MAX_LENGTH)
        message = messageInput.value.trim();
    else
        message = messageInput.value.substring(0, MESSAGE_MAX_LENGTH).trim();
    if(checkValidity.name && checkValidity.email && checkValidity.phoneNumber && checkValidity.subject && checkValidity.message)
        Email.send({
        SecureToken: "",
        From: "info@ulluribau.de",
        To: "info@ulluribau.de",
        Subject: subject,
        Body: `
            <b>Name:</b> ${name} <br>
            <b>From:</b> ${email} <br>
            <b>Phone Nr:</b> +49 ${phone} <br>
            <b>Subject:</b> ${subject} <br>
            <b>Message:</b> ${message}
        `
        })
        .then(async function (msg) {
            if(msg == 'OK'){
                // alert("Mail sent successfully!")
                alert("Mail erfolgreich gesendet!")
            } else {
                alert(msg)
            }
        });
    else {
        let alertStr = "";
        let count = 0;
        for (const key in checkValidity) {
            if (Object.hasOwnProperty.call(checkValidity, key)) {
                const value = checkValidity[key];
                if(!value){
                    switch (key) {
                        case 'name':
                            alertStr += ", Vollständiger Name";
                            break;
                        case 'email':
                            alertStr += ", E-Mail-Addresse";
                            break;
                        case 'phoneNumber':
                            alertStr += ", Telefonnummer";
                            break;
                        case 'subject':
                            alertStr += ", Subject";
                            break;
                        case 'message':
                            alertStr += ", Message";
                            break;
                    }
                    // alertStr += `, ${key}`;
                    count++;
                }
            }
        }
        
        if(count == 1)
            // alert(`Mail not sent! ${alertStr.substring(2, alertStr.length)} is invalid!`)
            alert(`Mail nicht versendet! ${alertStr.substring(2, alertStr.length)} ist ungültig!`)
        else
            // alert(`Mail not sent! ${alertStr.substring(2, alertStr.length)} are invalid!`)
            alert(`Mail nicht versendet! ${alertStr.substring(2, alertStr.length)} sind ungültig!`)
    }

    // window.alert = function(title, message){
    //     var myElementToShow = document.getElementById("someElementId");
    //     myElementToShow.innerHTML = title + "</br>" + message; 
    // }
    // let checkValidity = {
    //     name: false,
    //     email: false,
    //     phoneNumber: false,
    //     subject: false
    // };
    // {
    //     "name": "test1",
    //     "email": "example@gmail.com",
    //     "phoneNumber": "1323223",
    //     "message": "this is a message written by thi test1"
    // }
}

form.addEventListener('submit', sendEmail);