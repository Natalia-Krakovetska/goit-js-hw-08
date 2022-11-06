import throttle from 'lodash.throttle';
console.log(throttle);
const refs ={
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
    btn: document.querySelector('button'),

};
console.log(refs);

const currentData = {};
const STORAGE_KEY = "feedback-form-state";
// refs.email.addEventListener('input', onInput);
// refs.message.addEventListener('input', onInputTextarea);
// refs.form.addEventListener('submit',onInput)
refs.form.addEventListener('input', inFormSubmit)
// populateData ();

function inFormSubmit(event){
    event.preventDefault();
    currentData[event.currentTarget.name] = event.currentTarget.value;
    console.log(currentData);
   const hhh = localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData)) || [];
    // event.currentTarget.reset();
    // localStorage.removeItem(STORAGE_KEY);
};

// function  onInput(event){
//     console.log(event.target.value);
//     localStorage.setItem(STORAGE_KEY,event.target.value)
// };
// function  onInputTextarea(event){
  
//     console.log(event.target.value);
//     localStorage.setItem(STORAGE_KEY,event.target.value)
// };

// function populateData(){
// const feedBack = JSON.parse(STORAGE_KEY);
// const savedData = localStorage.getItem(feedBack);
// if(savedData){
//     console.log(savedData);
//     refs.email = savedData;
// }
// }


