import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    btn : document.querySelector('.button'),
    input : document.querySelector('.input'),
    fulfilled : document.querySelector('input[value="fulfilled"]'),
    rejected : document.querySelector('input[value="rejected"]'),
    fieldset : document.querySelector('.fieldset'),
    label : document.querySelector('.label'),
    form: document.querySelector('.form'),
}

elements.form.addEventListener("submit", handlerEvent);

function handlerEvent(evt) {
evt.preventDefault(),
evt.target
}

const upForm = new FormData(elements.form);
const delay = upForm.get("delay");
const state = upForm.get("state");

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(state === "fulfilled"){
            console.log(`✅ Fulfilled promise in ${delay}ms`);
        }else{
            console.log(`❌ Rejected promise in ${delay}ms`); 
        }
    },delay);
});

promise
.then(message => {
  iziToast.show({
      class: "wave-stroke",  
      title: "OK",
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
      title: "Error!",
      message: error,
      position: "topRight",
      closeOnEscape: true,
      closeOnClick: true,
      backgroundColor: "#ef4040",
  });
});








