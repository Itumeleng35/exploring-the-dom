//document.addEventListener('DOMContentLoaded', function() {
    //const h1Value = document.querySelector("h1");
const myMessage = document.querySelector('.myMessage');
console.log(myMessage);
    
//myMessage.innerHTML = 'This is a message in the DOM!'

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    //alert("button clicked!")
    myMessage.innerHTML = 'Button pressed'
});

const inputBox = document.querySelector('.theInputValue');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});

//const theMessageButton = document.querySelector('.theMessageButton');
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
});


const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];


const fruitList = document.querySelector(".fruits");

for(let i=0;i<fruits.length;i++){
   // get fruits from the list
   const fruit = fruits[i];
   
   // create a new li element
   const li = document.createElement('li');
   li.innerText = fruit;
   fruitList.appendChild(li);
}



        