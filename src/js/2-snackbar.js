import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const elements = {
    btn : document.querySelector('.button'),
    input : document.querySelector('.input'),
    fulfilled : document.querySelector('.fulfilled'),
    rejected : document.querySelector('.rejected'),
    fieldset : document.querySelector('.fieldset'),
    label : document.querySelector('.label'),
    form: document.querySelector('.form')
}


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isSucess){
            resolve("Fulfilled promise in ${delay} ms");
        }else{
            reject("This function is rejected");
        }
    }, 2000
    )
})
const isSucess = true ;
console.log(promise);

promise.then(value => {console.log(value);
}).catch(error => {console.log(error)}
).finally(() => console.log(promise)
)




console.log(elements.label);



