//  const brandName = document.getElementById('brand-name')
 const hiddenElements = document.querySelectorAll('.hidden')
 const hiddenElements1 = document.querySelectorAll('.hidden1')

 const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)

    if(entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entries.target.classList.remove('show')
    }
  })
 })

 const observer1 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry)

    if(entry.isIntersecting) {
      entry.target.classList.add('show1')
    } else {
      entries.target.classList.remove('show1')
    }
  })
 })

 hiddenElements.forEach(el => observer.observe(el))
 hiddenElements1.forEach(el => observer1.observe(el))