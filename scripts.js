const buttonT = document.getElementById('converct-button')
const select = document.getElementById('currency-select')


const dolar = 5.14
const euro = 5.05
const bitCoin = 103.890

const converctValues = () => {
    const inputReal = document.getElementById('input-place').value
    const realValueText = document.getElementById('real-Value-Text')
    const dolarValueText = document.getElementById('dolar-Value-Text')
    

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReal);

    
    if(select.value === 'US$ Dólar Americano'){
    dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(inputReal / dolar)
}

if( select.value === '€ Euro'){
    dolarValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(inputReal / euro)
}
   
if(select.value === '₿ BitCoin'){
dolarValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
    }).format(inputReal / bitCoin)

}
}

changeCurrency = () => {
    const currencyName = document.getElementById("real-dolar")
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = "./img/estados-unidos (1) 1.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./img/Design sem nome 1.svg"
    }

    if (select.value === '₿ BitCoin') {
        currencyName.innerHTML = 'BitCoin'
        currencyImg.src = "./img/Design sem nome (1) 1.png"
    }
    converctValues()
}

buttonT.addEventListener('click', converctValues)
select.addEventListener('change', changeCurrency)

