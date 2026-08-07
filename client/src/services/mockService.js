function makeCoffee(amount){
  console.log("Call echte Funktion");
  return `${amount} Gramm`
}

function customService(kind, amount, callback) {

  return `${kind} ${callback(amount)}`
}

export{
    makeCoffee,
    customService
}