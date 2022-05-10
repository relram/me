function greeting() {
    let input = document.getElementById("uname").value;
    function hello() {
        return("It's nice to meet you, " + input + "!")
    }
    document.getElementById("hello").innerHTML = hello();
}