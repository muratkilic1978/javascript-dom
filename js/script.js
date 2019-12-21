//console.dir(document);
let displayElem = document.querySelector(".display");
let Content = document.querySelector(".display").textContent;


const orderedListItems = document.querySelectorAll(".orderedlist li");
const unorderedListItems = document.querySelectorAll(".unorderedlist");

//console.log(listItems);

displayElem.style.color = "maroon";
displayElem.style.fontSize ="1.4rem";

for (let j = 0; j < orderedListItems.length; j++){
    console.log(orderedListItems[j].textContent);
}

for(let i = 0; i < unorderedListItems.length; i++){
    console.log(unorderedListItems[i].textContent);
    
}
    
for (let i = 0; i < orderedListItems.length; i++) {
  //orderedListItems[i].style.color = "red";
  orderedListItems[i].classList.add("blueColor");
}

for (let j = 0; j < unorderedListItems.length; j++) {
  //orderedListItems[i].style.color = "red";
  unorderedListItems[j].classList.add("redColor");
}

var btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text
btn.classList.add("button");                  // adding styling -> button on btn
document.body.appendChild("btn");               // Append <button> to <body>

