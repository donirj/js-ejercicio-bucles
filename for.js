// for(inicializacion; condicion; actualizacion)
function factorial(n){
    var total = 1
    for(let i = 1; i <= n; i++){
      total = total * i
    }
    return total
  }
  factorial(10)
  