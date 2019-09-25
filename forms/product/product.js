let numbers = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]

function productFunc(num1,num2){
  product = num1*num2
  return product
  }

let counter4 = 0
let product2 = 1

for (counter4; counter4 <numbers.length; counter4++){
  product2 *= productFunc(numbers[counter4],numbers[counter4+1])
  console.log(product2)
  }
  
console.log(product2)