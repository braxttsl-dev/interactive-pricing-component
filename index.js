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
/* How this works -
    The viewCount span is set to whatever value the range slider is at
    The cost span is set to the viewCount times .16 and formmatted to get the amount in currency
    Then if the checkbox is checked to yearly the cost span is then multiplied by .25*/
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
/*How this works
     This is just to make sure whenever the user switches from monthly to yearly 
     that the price changes when the button is pressed not only when the range slider is pressed */
billingSelect.addEventListener("click",()=>{
    if (billingSelect.checked == true){
        cost.textContent = currencyFormat.format(viewCount.textContent * .16 - viewCount.textContent * .16 * .25 )
    }
    else{
        cost.textContent = currencyFormat.format(viewCount.textContent * .16)
    }  
})