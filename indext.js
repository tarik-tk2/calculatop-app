// //display button
// const displayId = document.getElementById("display");
// const displayValue = parseFloat(displayId.innerText);
// let preValue = '';
// let currentValue = '';

// // clar all button

// function clear() {
// displayId.innerText = "0";
//  }
// const allClear = document.getElementById("allClear");
// allClear.addEventListener("click", () => {
//   clear()
// });



// delete  number 
// const deleteId = document.getElementById("delet");
// deleteId.addEventListener("click", () => {
//     if (displayValue > 0) {
//         const displayDigitSplit = displayId.innerText.split("")
//         displayDigitSplit.pop()
//         const remainDisplayDigit=displayDigitSplit.join('')
//         displayId.innerText = remainDisplayDigit;
//         if (displayDigitSplit.length === 0) { 
//             clear()
//         }
//     }     
// })
// //append number
// document.querySelectorAll('[data-number]').forEach(number => { 
//     number.addEventListener("click", (e) => {
//         if (displayValue) { 
//             displayId.innerText=displayId.innerText+e.target.innerText
//         }
//     })
// })
// //operation
// document.querySelectorAll("[data-operation]").forEach(operation => {
//     operation.addEventListener('click', (e) => {
//         if (displayValue ) {
//             displayId.innerText = displayId.innerText + e.target.innerText;
//             if (e.target.innerText === "*") { 
                
//             }
//         }
      
//    })
// })

