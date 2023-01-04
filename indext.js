//display button
const displayId = document.getElementById("display");
const displayValue = parseFloat(displayId.innerText);

// clar all button

function clear() {
displayId.innerText = "0";
 }
const allClear = document.getElementById("allClear");
allClear.addEventListener("click", () => {
  clear()
});



delete  number 
const deleteId = document.getElementById("delet");
deleteId.addEventListener("click", () => {
    if (displayValue > 0) {
        const digitSplit = displayId.innerText.split("")
        console.log(digitSplit);
        digitSplit.pop()
        const remainDegit=digitSplit.join('')
        displayId.innerText = remainDegit;
        console.log(digitSplit)
        if (digitSplit.length === 0) { 
            clear()
        }
    }
    
   
})
