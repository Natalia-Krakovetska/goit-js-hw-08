import throttle from 'lodash.throttle';

const refs ={
    form: document.querySelector('.feedback-form'),
    btn: document.querySelector('button'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea')

};

refs.form.addEventListener('input', inFormInput)
refs.form.addEventListener('submit', onSubmitBtn);

let currentData = {};
let savedData = {};
const STORAGE_KEY = "feedback-form-state";
populateData ();


function inFormInput(event){
   
    event.preventDefault();
    currentData[event.target.name] = event.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));  
    
};

function populateData(){
    savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
 if(savedData){
    refs.input.value = savedData.email;
    refs.textarea.value = savedData.message;
    console.log(savedData);       
}
}

function onSubmitBtn(event){    
    
    event.currentTarget.reset();    
    localStorage.removeItem(STORAGE_KEY);
    
};
