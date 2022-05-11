const greet = ["Hi, ", "Hello ", "Oh, hi "];
let rand = Math.floor(Math.random()*greet.length);

let randGreet = greet[rand];

function greeting() {
    let input = document.getElementById("uname").value;
    function hello() {
        return(randGreet + input + "!")
    }
    document.getElementById("hello").innerHTML = hello();
}