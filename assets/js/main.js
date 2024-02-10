const scriptURL = 'https://script.google.com/macros/s/AKfycbxuwrpOBWh3ieCAadNzgfowrFGqQ4ZcOkEm1eoBHtwd2Fdc1dnNUphMlUEyALEim9QC/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => Swal.fire({
            title: "Form Is Send!",
            // text: "You clicked the button!",
            icon: "success"
        }))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})





