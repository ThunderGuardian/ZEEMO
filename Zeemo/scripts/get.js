const price = document.querySelectorAll('.service-price')
const pricebtn = document.querySelectorAll('.btn')

for(let i=0;i<pricebtn.length;i++) {
  pricebtn[i].addEventListener('click', () => {
    const amt = Number(price[i].innerHTML.slice(1,3) + price[i].innerHTML.slice(4))
    // console.log(amt)

    let tier = {'tier': i+1, 'price': amt}
    // console.log(tier)

    localStorage.setItem('servicePriceData', JSON.stringify(tier))

    window.location.href = 'payment.html'

  })
}