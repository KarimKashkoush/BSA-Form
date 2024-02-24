let nameArabic = document.getElementById("nameAr")
let nameEnglish = document.getElementById("nameEn")
let gender = document.getElementById("Gender")
let emailInput = document.getElementById("email")
let phone = document.getElementById("phone")
let nationalId = document.getElementById("nationalId")
let photos = document.getElementById("photos")
let personalPhoto = document.getElementById("personalPhoto")
let unIn = document.getElementById("unIn")
let faculty = document.getElementById("Faculty")
let major = document.getElementById("Major")
let year = document.getElementById("academicYear")
let conference = document.getElementById("about")
let CommentInput = document.getElementById("comments")
let sendEmail = document.getElementById("sendEmail")

let submit = false

let setSucces = (ele) => {
    let parent = ele.parentElement.parentElement
    let error = parent.querySelector(".errorma")
    error.innerHTML = ""

    let svg = parent.querySelector("svg")
    svg.classList.add("fa-check")

    ele.classList.add("succes")
    ele.classList.remove("error")

    submit = true
}

let setError = (ele, errorMa) => {
    let parent = ele.parentElement.parentElement
    let error = parent.querySelector(".errorma")
    error.innerHTML = errorMa

    let svg = parent.querySelector("svg")
    svg.classList.add("fa-xmark")

    ele.classList.add("error")
    ele.classList.remove("succes")

    submit = false
}

sendEmail.onsubmit = (e) => {
    nameArCheck()
    nameEnCheck()
    emailChech()
    checkPhone()
    idCheck()
    personalPhotoChech()
    photosChech()
    unInCheck()
    facultyCheck()
    majorCheck()
    yearCheck()
    conferenceCheck()
    commentsCheck()

    if (submit === false) {
        e.preventDefault()
    }
}

// check name in arabic
function nameArCheck() {
    if (nameArabic.value == "") {
        setError(nameArabic, "name is required")
    } else if (nameArabic.value.length < 6) {
        setError(nameArabic, "Your name must be larger that 6 chatacters")
    } else {
        setSucces(nameArabic)
    }
}
nameArabic.onblur = () => {
    nameArCheck()
}

// check name in english
function nameEnCheck() {
    if (nameEnglish.value == "") {
        setError(nameEnglish, "name is required")
    } else if (nameEnglish.value.length < 6) {
        setError(nameEnglish, "Your name must be larger that 6 chatacters")
    } else {
        setSucces(nameEnglish)
    }
}
nameEnglish.onblur = () => {
    nameEnCheck()
}

// check email
const isValidEmail = (emailInput) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailInput).toLowerCase());
};
function emailChech() {
    let emailValue = emailInput.value.trim();

    if (emailValue === "") {
        setError(emailInput, "email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, "provide a valid email address");
    } else {
        setSucces(emailInput);
    }
};
emailInput.onblur = () => {
    emailChech()
}

// check phone
function checkPhone() {
    if (phone.value.trim() === "") {
        setError(phone, "Phone number is required")
    } else if (phone.value.length < 11) {
        setError(phone, "Your phone number must be equal from 11 number")
    } else {
        setSucces(phone)
    }
}
phone.onblur = () => {
    checkPhone()
}

// chech National Id
function idCheck() {
    if (nationalId.value.trim() === "") {
        setError(nationalId, "National id is required")
    } else if (nationalId.value.length < 11) {
        setError(nationalId, "Your National id must equal from 14 number")
    } else {
        setSucces(nationalId)
    }
}
nationalId.onblur = () => {
    idCheck()
}

// chech personalPhoto
function personalPhotoChech() {
    if (personalPhoto.value == "") {
        setError(personalPhoto, "Link for personal Photo is required")
    } else if (personalPhoto.value.length < 10) {
        setError(personalPhoto, "your link is wrong")
    } else {
        setSucces(personalPhoto)
    }
}
personalPhoto.onblur = () => {
    personalPhotoChech()
}

// chech photos
function photosChech() {
    if (photos.value == "") {
        setError(photos, "Link for photos is required")
    } else if (photos.value.length < 10) {
        setError(photos, "your link is wrong")
    } else {
        setSucces(photos)
    }
}
photos.onblur = () => {
    photosChech()
}

// check un-in
function unInCheck() {
    if (unIn.value == "") {
        setError(unIn, "University-institute name is required")
    } else {
        setSucces(unIn)
    }
}
unIn.onblur = () => {
    unInCheck()
}

// check faculty
function facultyCheck() {
    if (faculty.value == "") {
        setError(faculty, "Faculty name is required")
    } else {
        setSucces(faculty)
    }
}
faculty.onblur = () => {
    facultyCheck()
}

// check major
function majorCheck() {
    if (major.value == "") {
        setError(major, "Major name is required")
    } else {
        setSucces(major)
    }
}
major.onblur = () => {
    majorCheck()
}

// check year
function yearCheck() {
    if (year.value == "") {
        setError(year, "Academic year is required")
    } else if (year.value.trim().length < 4) {
        setError(year, "Academic year is wrong")
    } else {
        setSucces(year)
    }
}
year.onblur = () => {
    yearCheck()
}

// check Conference
function conferenceCheck() {
    if (conference.value == "") {
        setError(conference, "Conference is required")
    } else {
        setSucces(conference)
    }
}
conference.onblur = () => {
    conferenceCheck()
}

// check Comments
function commentsCheck() {
    if (comments.value == "") {
        setError(comments, "comment is required")
    } else {
        setSucces(comments)
    }
}
comments.onblur = () => {
    commentsCheck()
}


let ServiceID = "service_sefvrak";
let TemplateID = "template_3benccc";

sendEmail.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputData = {
        nameArabic: nameArabic.value,
        nameEnglish: nameEnglish.value,
        gender: gender.value,
        email: emailInput.value,
        phone: phone.value,
        nationalId: nationalId.value,
        photos: photos.value,
        unIn: unIn.value,
        faculty: faculty.value,
        major: major.value,
        year: year.value,
        conference: conference.value,
        Comment: CommentInput.value,
    }

    emailjs.send(ServiceID, TemplateID, inputData)
})




const scriptURL = 'https://script.google.com/macros/s/AKfycbxuwrpOBWh3ieCAadNzgfowrFGqQ4ZcOkEm1eoBHtwd2Fdc1dnNUphMlUEyALEim9QC/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    if (submit === true) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => Swal.fire({
                title: "Form Is Send!",
                text: "You clicked the button!",
                icon: "success"
            }))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
    }
})





