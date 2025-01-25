//task-1
// const input = document.querySelector('#input');
// const btn = document.querySelector('button');
// btn.addEventListener('click', changeValue);

// function changeValue() {
//   input.value = 'Bay';
// }
// task-2
const input = document.querySelector('#input');
const btn = document.querySelector('button');
btn.addEventListener('click', showValue);

function showValue() {
  alert(input.value);
}
