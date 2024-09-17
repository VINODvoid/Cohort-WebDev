// Promisified version of setTimeout

function setTimeoutPromisified(ms)
{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(`Delayed ${ms} milli seconds`)
            reject('Error while dealying')
        },ms)
    })
}
setTimeoutPromisified(3000)
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.error(error);
})

