const display = document.getElementsByClassName("display")[0]; // Assuming there's only one element with class "display"
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define function to calculate based on button clicked
const calculate = (btnvalue) => {
    if(btnvalue === "=" && output !== ""){
        // If output has "%", replace it with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    } else if(btnvalue === "AC"){
        output = "";
    } else if(btnvalue === "DEL"){
        // If DEL is clicked, remove the last character from the output
        output = output.slice(0, -1);
    } else {
        // If output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }
    display.value = output;
}

// Add event listener to buttons, call calculate() onclick.
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value as argument
    // We use (e) to access the event's details within the event handler function
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});