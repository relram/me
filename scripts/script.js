const greet = ["Hi, ", "Hello, ", "Oh, Hi ", "Greetings, ", "Why Hello, "];
let rand = Math.floor(Math.random()*greet.length);

let randGreet = greet[rand];

function greeting() {
    let input = document.getElementById("uname").value;
    function hello() {
        return(randGreet + input + "!")
    }
    document.getElementById("greetButton").remove();
    document.getElementById("uname").remove();
    document.getElementById("hello").innerHTML = hello();
}