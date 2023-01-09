// //display button
// const displayId = document.getElementById("display");
// const displayValue = parseFloat(displayId.value);
// let preValue = '';
// let currentValue = '';

// // clar all button

// function clear() {
// displayId.value = "0";
//  }
// const allClear = document.getElementById("allClear");
// allClear.addEventListener("click", () => {
//   clear()
// });

// delete  number
// const deleteId = document.getElementById("delet");
// deleteId.addEventListener("click", () => {
//     if (displayValue > 0) {
//         const displayDigitSplit = displayId.value.split("")
//         displayDigitSplit.pop()
//         const remainDisplayDigit=displayDigitSplit.join('')
//         displayId.value = remainDisplayDigit;
//         if (displayDigitSplit.length === 0) {
//             clear()
//         }
//     }
// })
// //append number
// document.querySelectorAll('[data-number]').forEach(number => {
//     number.addEventListener("click", (e) => {
//         if (displayValue) {
//             displayId.value=displayId.value+e.target.value
//         }
//     })
// })
// //operation
// document.querySelectorAll("[data-operation]").forEach(operation => {
//     operation.addEventListener('click', (e) => {
//         if (displayValue ) {
//             displayId.value = displayId.value + e.target.value;
//             if (e.target.value === "*") {

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
      let val = e.target.innerText;
        screen.value += val;
        console.log(val);
    });
  });
    result.addEventListener("click", (e) => {
        if (screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value)
            screen.value=answer
         }
    })
    del.addEventListener("click", (e) => { 
        let value = (screen.value).substring(0, (screen.value.toString().length - 1))
        screen.value=value
    })
    allClear.addEventListener("click", (e) => {
       screen.value=''
    })
}
allData();
