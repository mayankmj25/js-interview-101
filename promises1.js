//Promise object represent the eventual completion 
// or failure of an asynchronous operation and its resulting value

// 3 states - pending, fulfilled, rejected

const promiseOne = new Promise((resolve, reject) => {
    // do an async task
    setTimeout(() => {
        console.log('async task is completed')
    },1000)
})

promiseOne.then(function(){
    console.log('promise consumed')
})

//resolve is connected to then and rejected is connected top catch

new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log('async task 2')
        resolve();
    },1000)
}).then(() => {
    console.log('async 2 resolved')
})

// sending data via resolve

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            name: 'mj',
            email: 'random@gmail.com'
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// can chain then and catch and send error through reject
//finally -- it will execute anyway - in case of resolve and reject

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({
                name: 'mj',
                email: 'random@gmail.com'
            })
        }
        else{
            reject('Error: something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(()=> {
    console.log('The promise is either resolved or rejected')
})

// we can handle promises by using async and await as well
// we have to use try and catch block to handle rejection
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let error = true;
        if(!error){
            resolve({
                name: 'mj',
                email: 'random@gmail.com'
            })
        }
        else {
            reject('Error: Js Went wrong')
        }
    },1000)
})

// async function consumePromiseFive(){
//     const response = await promiseFive
//     console.log(response)
// }

async function consumePromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}

consumePromiseFive();

async function getAllusers(){
    try{
        response = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!response.ok){
           console.log('error')
        }
        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.log(error)
    }
    
}
getAllusers();

// using then and catch 
fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((data)=>{
    console.log(data);
}).catch((error) => {
    console.log(error)
}).finally(()=> {
    console.log('promise is either resolve or rejected')
})

// catch only executes when the browswer is not able to request, 404 errors won't be found in reject

//read fetch mdn docs

