const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLengh = 15 
let boxOneEl = document.getElementById('box-one')
let boxTwoEl = document.getElementById('box-two')

function getRandomItem() {
  let randomNumber = Math.floor(Math.random() * characters.length)
  return characters[randomNumber]
}

function generateRandomPassword() {
  let randomPassword = ''
  for (let i = 0; i < passwordLengh; i++) {
    randomPassword += getRandomItem()
  }
  return randomPassword
}

function displayPassword() {
  generateRandomPassword()
  boxOneEl.textContent = generateRandomPassword()
  boxTwoEl.textContent = generateRandomPassword()
}









