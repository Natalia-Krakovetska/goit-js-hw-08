import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  btn: document.querySelector('button'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(inFormInput, 500));
refs.form.addEventListener('submit', onSubmitForm);

let currentData = {};
let savedData = {};
const STORAGE_KEY = 'feedback-form-state';
populateData();

function inFormInput(event) {
  event.preventDefault();
  currentData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
}

function populateData() {
  try {
    savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    console.log(error.name); // "SyntaxError"
    console.log(error.message); // Unexpected token W in JSON at position 0
  }

  if (savedData) {
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
  } else{
    refs.input.value = "";
    refs.textarea.value = "";
  }

}

function onSubmitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
