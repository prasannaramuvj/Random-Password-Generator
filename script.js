let input = document.querySelector(".input");
let search = document.querySelector('.search');

let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = "1234567890"
let symbol = "!@#$%^&*(){}><?/"
let password = ""
let length = 16
let allchar = lowercase + uppercase + number + symbol

function generatePassword(){
   password = ""
    password+= lowercase[Math.floor(Math.random() *  lowercase.length)]
    password+= uppercase[Math.floor(Math.random() *  uppercase.length)]
    password+= number[Math.floor(Math.random() *  number.length)]
    password+= symbol[Math.floor(Math.random() *  symbol.length)]
    while(length > password.length){
    password += allchar[Math.floor(Math.random() * allchar.length)]
}
input.value = password;
}


function copyPassword(){

  input.select();
  document.execCommand("copy")
}



