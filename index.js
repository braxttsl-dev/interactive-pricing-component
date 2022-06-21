// Getting elements
const rangeSlider = document.querySelector("#range-slider");
let viewCount = document.querySelector("#view-count");
let cost = document.querySelector("#money")
let billingSelect = document.querySelector("#billing-select")

// Currency Format
let currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})


// Slider functionality
rangeSlider.addEventListener("click", ()=>{
    viewCount.textContent = rangeSlider.value
    cost.textContent = currencyFormat.format(viewCount.textContent * .16)
    if (billingSelect.checked == true){
        cost.textContent = currencyFormat.format(viewCount.textContent * .16 - viewCount.textContent * .16 * .25 )
        }
    else{
        cost.textContent = currencyFormat.format(viewCount.textContent * .16)
    }
  
})

//Checkbox functionality
billingSelect.addEventListener("click",()=>{
    if (billingSelect.checked == true){
        cost.textContent = currencyFormat.format(viewCount.textContent * .16 - viewCount.textContent * .16 * .25 )
    }
    else{
        cost.textContent = currencyFormat.format(viewCount.textContent * .16)
    }  
})