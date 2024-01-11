// Javascript - Sync (by default) and single threaded (js engine)
// execution context - execute code line by line

// web api /node  -- dom api, setTimeout, setInterval, fetch() aka promises
// task queue -- callbacks, setTimeout, setInterval
// micro task queue -- promises (high priority)




// // 1. setTimeout, clearTimeout

// const changeText = function(){
//     document.querySelector('h1').innerHTML = 'this is chnaged'
// }

// const changeMe = setTimeout(changeText, 2000);

// document.querySelector('#stop').addEventListener('click', () => {
//     clearTimeout(changeMe)
// } )




// 2. setInterval, clearInterval
// via generating random color

// third param in setInterval is used to pass argument in callback

const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let res = '#';
    for(let i=0;i<=5;i++){
        const x = Math.floor(Math.random()*16)
        res += (hex[x]);
    }
    return res;
}

const changeColor = () => {
    document.body.style.backgroundColor = randomColor();
}

   let interval = null

document.querySelector('#start').addEventListener('click', () => {
   if(interval === null ) interval =  setInterval(changeColor, 1000);
})

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
})


