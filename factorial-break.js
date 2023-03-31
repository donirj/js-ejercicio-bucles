// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
function factorialBreak(number){
    let num = 1
    let result = 1;
  while(true){
    if(num > number){
      break;
    }
    result *= num
    num++
  }
  return result
}
factorialBreak(10)