console.log("Welcome to Techify!");

function submitMessage(event) {
    event.preventDefault();
    document.getElementById("confirmation").innerText = "Thank you! Your message has been sent.";
}
