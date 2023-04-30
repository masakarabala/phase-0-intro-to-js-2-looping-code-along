// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, birthday) {
    let messages = []
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return messages;
  }
  console.log(writeCards(names));


function countDown(){
   let x = 10;
while (x >=0) {
    console.log(x)
    x--; // x = x - 1
 
}
}
countDown()
  

  


