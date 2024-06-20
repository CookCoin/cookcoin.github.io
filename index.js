let COOK = document.querySelector('.COOK-cost')
let parsedCOOK = parseFloat(COOK.innerHTML)
 
let clickerCost = document.querySelector('.Clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)

function incrementCOOK() {
  parsedCOOK += 1
  COOK.innerHTML = parsedCOOK
}

function buyClicker() {
  if (parsedCOOK >= parsedClickerCost) {
    parsedCOOK -= parsedClickerCost
    COOK.innerHTML = parsedCOOK
  }
}
