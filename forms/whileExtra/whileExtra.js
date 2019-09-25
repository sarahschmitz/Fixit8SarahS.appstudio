let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")

let counter = 0
while(counter < firstName.length) {
  alert(`Letter ${counter+1} is: ${firstName[counter]}`)
  counter++;
  }
  
let counter2 = 0
while(counter2 < lastName.length) {
  alert(`Letter ${counter2+1} is: ${lastName[counter2]}`)
  counter2++;
  }