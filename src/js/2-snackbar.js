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

const btn = document.querySelector('.button');
console.log(btn);

