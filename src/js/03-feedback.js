import throttle from 'lodash.throttle';
let currentData = {};

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
populateData();

refs.form.addEventListener('input', throttle(inFormInput, 500));
refs.form.addEventListener('submit', onSubmitForm);



function inFormInput(event) {  
currentData =  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  currentData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
}
function onSubmitForm(event) {
    event.preventDefault();        
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
  }

function populateData() {   
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!savedData) {
        return;
    }
        refs.input.value = savedData.email || "";
        refs.textarea.value = savedData.message || "";
    
}
