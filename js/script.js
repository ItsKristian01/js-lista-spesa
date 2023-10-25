// Variable Declaration
const shoppingList = ["Pollo", "Banane", "Pesce", "Latte", "Burro"];
console.log(shoppingList);

// Program Logic
i = 0;
let listString = "";
let curElm;

while (i < shoppingList.length) {
    curElm = shoppingList[i];
    listString += ` 
    <ul class="list-group">
        <li class="list-group-item bg-dark text-white p-3 fs-3">
             <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
             <label class="form-check-label " for="firstCheckbox">${curElm}</label>
        </li>
     `;
    i++;
}

console.log(curElm, listString);


// Output
document.querySelector("ul").innerHTML = listString;