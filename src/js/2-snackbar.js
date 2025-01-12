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
 
console.log(elements.fulfilled);


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(isSucess){
//             resolve("Fulfilled promise in ${delay} ms");
//         }else{
//             reject("This function is rejected");
//         }
//     }, 2000
//     )
// })

const isSucess = true ;




const promise = new Promise ((reject, fulfilled) => {
reject(console.log(`❌ Rejected promise in ${delay}ms`));
fulfilled(console.log(`✅ Fulfilled promise in ${delay}ms`));
}
)

promise.then(value => {console.log(value);
}).catch(error => {console.log(error)}
).finally(() => console.log(promise)
)

elements.btn.addEventListner('click', handlerEvent);

function handlerEvent(evt) {
evt.preventDefault(),
evt.target
}

const upForm = new FormData(elements.form);
const delay = upForm.get("delay");
const state = upForm.get("state");








