// Import stylesheets
import './style.css';

// Question 1
function countClick() {
  let count = 0;
  let counter = document.getElementById('question-one'); //button
  let resultCount = document.getElementById('click-counter'); //result

  counter.addEventListener('click', () => {
    count += 1;
    resultCount.innerHTML = count;
  });
  countClick();
}

// Question 2
function removeEvenPClass() {
  let allEvenP = document.querySelectorAll('.even-p'); //select all class even-p
  let removeClassBtn = document.getElementById('question-two'); //button
  removeClassBtn.addEventListener('click', () => {
    for (i = 0; i < allEvenP.length; i++) {
      allEvenP[i].classList.remove('even-p');
    }
  });
}
removeEvenPClass();

// Question 3

// Question 4
async function helloWorld() {
  const promiseFunction = await myPromise();
  let promiseResponse = document.getElementById('question-four-p'); //answer must be in inner html
  promiseResponse.innerHTML = 'Hello World!';
}
function myPromise() {
  let promiseBtn = document.getElementById('question-four');
  promiseBtn.addEventListener('click', () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(helloWorld());
      }, 3000);
    });
  });
}
myPromise();
