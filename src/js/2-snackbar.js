import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    btn : document.querySelector('.buttonn'),
    input : document.querySelector('.input'),
    fulfilled : document.querySelector('input[value="fulfilled"]'),
    rejected : document.querySelector('input[value="rejected"]'),
    fieldset : document.querySelector('.fieldset'),
    label : document.querySelector('.label'),
    form: document.querySelector('.form'),
}

elements.form.addEventListener("submit", handlerEvent);

function handlerEvent(evt) {
evt.preventDefault();
evt.target


const upForm = new FormData(elements.form);
const delay = upForm.get("delay");
const state = upForm.get("state");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(state === "fulfilled"){
            resolve(`✅ Fulfilled promise in ${delay}ms`);
        }else{
            reject(`❌ Rejected promise in ${delay}ms`); 
        }
    },delay);
});

promise
.then(message => {
  iziToast.show({
      class: "wave-stroke",  
      message: message,
      position: "topRight",
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: "#59a10d",
  });
})
.catch(error => {
  iziToast.show({
      class: "wave-stroke",   
      message: error,
      position: "topRight",
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: "#e3545b",
  });
});
}






