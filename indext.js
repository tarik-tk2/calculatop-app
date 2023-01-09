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

function allData() {
  let screen = document.getElementById("display");
  const button = document.querySelectorAll("[data-number]");
  const allClear = document.getElementById("allClear");
    let result = document.getElementById("equal");
    let del = document.getElementById("delet")
  

  button.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let value = e.target.innerText;
      screen.innerText += value;
    });
  });
    result.addEventListener("click", (e) => {
        if (screen.innerText === '') {
            screen.innerText = "";
        } else {
            let answer = eval(screen.innerText)
            screen.innerText=answer
         }
    })
    del.addEventListener("click", (e) => { 
        let value = (screen.innerText).substring(0, (screen.innerText.toString().length - 1))
        screen.innerText=value
    })
    allClear.addEventListener("click", (e) => {
       screen.innerText=''
    })
}
allData();
