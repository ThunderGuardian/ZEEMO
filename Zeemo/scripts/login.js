const signupBtn = document.getElementById('signup-btn')
const signupForm = document.getElementById('signup-form')

const func = (() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')

      // console.log(form)

      // window.location.href = 'services.html'
      signupBtn.addEventListener('click', (event) => {
        // event.stopPropagation()
        if(form.checkValidity()) {
          window.location.href = 'services.html'
        }
      })

      

      // console.log(form.checkValidity())
    }, true)
  })


})()

signupForm.addEventListener('submit', (e) => {
  e.preventDefault()
})

