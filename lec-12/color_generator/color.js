let box = document.getElementById("mycolor");
let btn = document.getElementById("mybtn");
let stop = document.getElementById("stop")

let colors = ["red", "blue", "green", "yellow", "pink", "purple", "orange", "brown", "black", "lavender"];

function generaterandomcolor() {
    let idx = Math.floor(Math.random() * colors.length);
    console.log(idx, colors[idx]);
    box.style.background = colors[idx]; 
}


//btn.addEventListener("click", () => {
//     generaterandomcolor();
// });

//change color automatically every 2 seconds

btn.addEventListener("click", () => {
    id = setInterval(() => {
        generaterandomcolor();
    }, 2000);
});


stop.addEventListener("click" , () =>{
    clearInterval(id)
    console.log("stopedd")
})



