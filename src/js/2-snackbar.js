const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isSucess){
            resolve("This function is resolved");
        }else{
            reject("This function is rejected");
        }
    }, 2000
    )
})
const isSucess = false ;
console.log(promise);

promise.then(value => {console.log(value);
}).catch(error => {console.log(error)}
).finally(() => console.log(promise)
)


const elements = {
    btn : document.querySelector('.button'),
    input : document.querySelector('.input'),
    fulfilled : document.querySelector('.fulfilled'),
    rejected : document.querySelector('.rejected'),
    fieldset : document.querySelector('.fieldset'),
    label : document.querySelector('.label')
}

console.log(elements.label);



