const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];let passwordLengh=15,boxOneEl=document.getElementById("box-one"),boxTwoEl=document.getElementById("box-two");function getRandomItem(){let e=Math.floor(Math.random()*characters.length);return characters[e]}function generateRandomPassword(){let e="";for(let t=0;t<passwordLengh;t++)e+=getRandomItem();return e}function displayPassword(){generateRandomPassword(),boxOneEl.textContent=generateRandomPassword(),boxTwoEl.textContent=generateRandomPassword()}
//# sourceMappingURL=script.js.map