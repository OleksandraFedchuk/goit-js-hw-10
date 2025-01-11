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

console.log(promise);
