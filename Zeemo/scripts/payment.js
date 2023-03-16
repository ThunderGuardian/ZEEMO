const serviceTierName = document.querySelector('.service-tier')
const serviceTierPrice = document.querySelector('.service-price')
const serviceTotalPrice = document.querySelector('.total-service-price')

const servicePriceData = localStorage.getItem('servicePriceData')

const data = JSON.parse(servicePriceData)

if (!data) {
  serviceTierName.innerHTML += 'Limited offer'
  serviceTierPrice.innerHTML = 39999 + 30000
  serviceTotalPrice.innerHTML = 39999 + 30000 - 500
}

serviceTierName.innerHTML += data['tier']
serviceTierPrice.innerHTML = data['price']
serviceTotalPrice.innerHTML = data['price'] - 500

