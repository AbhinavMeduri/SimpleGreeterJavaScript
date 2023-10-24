function displayGreeting() {
    var name = document.getElementById("username").value;
    var greetingMessage = "Hello, " + name + "!";
    document.getElementById("greeting").innerText = greetingMessage;
}
