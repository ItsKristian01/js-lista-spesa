// Variable Declaration
const shoppingList = ["Pollo", "Banane", "Pesce", "Latte", "Burro"];
console.log(shoppingList);

// Program Logic
i = 0;
let listString = "";
let curElm;

while (i < shoppingList.length) {
    curElm = shoppingList[i];
    listString += `<li>${curElm}</li>`;
    i++;
}

console.log(curElm, listString);


// Output
document.querySelector("ul").innerHTML = listString;