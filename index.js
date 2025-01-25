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

const btn = document.querySelector('button');
const arr = document.querySelectorAll('p');

btn.addEventListener('click', changeTextContent);
function changeTextContent(){
    arr.forEach((paragraph, index)=>{
        paragraph.textContent += index + 1;
    });
}