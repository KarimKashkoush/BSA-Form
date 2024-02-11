const scriptURL = 'https://script.google.com/macros/s/AKfycbxuwrpOBWh3ieCAadNzgfowrFGqQ4ZcOkEm1eoBHtwd2Fdc1dnNUphMlUEyALEim9QC/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => Swal.fire({
            title: "Form Is Send!",
            text: "You clicked the button!",
            icon: "success"
        }))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})


let  nameArabic = document.getElementById("nameAr")
let  nameEnglish = document.getElementById("nameEn")
let  gender = document.getElementById("Gender")
let  emailInput = document.getElementById("email")
let  phone = document.getElementById("phone")
let  nationalId = document.getElementById("nationalId")
let  photos = document.getElementById("photos")
let  unIn = document.getElementById("unIn")
let  faculty = document.getElementById("Faculty")
let  major = document.getElementById("Major")
let  year = document.getElementById("academicYear")
let  conference = document.getElementById("about")
let  CommentInput = document.getElementById("comments")
let sendEmail = document.getElementById("sendEmail")


let ServiceID = "service_sefvrak";
let TemplateID = "template_3benccc";


sendEmail.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    const inputData = {
        nameArabic : nameArabic.value,
        nameEnglish : nameEnglish.value,
        gender : gender.value,
        email : emailInput.value,
        phone : phone.value,
        nationalId : nationalId.value,
        photos : photos.value,
        unIn : unIn.value,
        faculty : faculty.value,
        major : major.value,
        year : year.value,
        conference : conference.value,
        Comment : CommentInput.value,
    }

    emailjs.send(ServiceID, TemplateID, inputData)
})






