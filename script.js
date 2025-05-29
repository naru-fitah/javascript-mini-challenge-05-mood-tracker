let emoji = document.getElementsByClassName("emoji")

function handleClick(element) {
    let message = document.getElementById("message");
    message.textContent = "You Selected: " + element.textContent;
    
    for (i = 0; i < emoji.length; i++) {
       emoji[i].classList.remove("selected")
    }

    element.classList.add("selected")
}
