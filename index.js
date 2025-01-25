//task-1
// const input = document.querySelector('#input');
// const btn = document.querySelector('button');
// btn.addEventListener('click', changeValue);

// function changeValue() {
//   input.value = 'Bay';
// }
// task-2
// const input = document.querySelector('#input');
// const btn = document.querySelector('button');
// btn.addEventListener('click', showValue);

// function showValue() {
//   alert(input.value);
// }

//task-3
// const inputFirst = document.querySelector('#first-input');
// const inputSecond = document.querySelector('#second-input');
// const btn = document.querySelector('button');
// btn.addEventListener('click', toggleValue);

// function toggleValue(){
//     const thirdValue = inputFirst.value;
//     inputFirst.value = inputSecond.value;
// inputSecond.value = thirdValue;
// }

//task-4

// const btn = document.querySelector('button');
// const arr = document.querySelectorAll('p');

// btn.addEventListener('click', changeTextContent);
// function changeTextContent(){
//     arr.forEach((paragraph, index)=>{
//         paragraph.textContent += index + 1;
//     });
// }

// task 5
// const inputTest = document.querySelector("#test");
// const inputResult = document.querySelector("#result");
// const btn = document.querySelector("button");
// btn.addEventListener("click", result);
// function result() {
//   if (isNaN(inputTest.value)) {
//     return alert("Ввели не число");
//   }
//   inputResult.value = inputTest.value ** 2;
// }

// task 6
// const title = document.querySelector("h1");
// const list = document.createElement("ul");
// let message = prompt();
// while (message !== null) {
//   const listTitle = document.createElement("li");
//   listTitle.textContent = message;
//   list.appendChild(listTitle);
//   message = prompt();
// }
// title.after(list);

//task 7

// const links = document.querySelectorAll('a');
// links.forEach((link) => link.addEventListener('mouseover', addTitle));
// function addTitle(event) {
//   event.target.title = event.target.textContent;
// }

// task 8
const spans = document.querySelectorAll('span');
spans.forEach((span) => span.addEventListener('click', setBgRed));

function setBgRed(event) {
  event.target.style.backgroundColor = 'red';
  event.target.addEventListener('click', setBgGreen);
  event.target.removeEventListener('click', setBgRed);
}
function setBgGreen(event) {
  event.target.style.backgroundColor = 'green';
  event.target.addEventListener('click', setBgRed);
  event.target.removeEventListener('click', setBgGreen);
}
