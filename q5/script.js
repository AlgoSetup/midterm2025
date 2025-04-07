// TODO: Implement the counter functionality.

// 1. Initialize a variable 'counter' to 0.
let counter = 0;
// 2. Update the text content of the paragraph with id "counterDisplay" to show the counter value.
if (counter >= 0) {
    // 3. Add click event listeners to both buttons:
//    - On "Increment" button click, increase 'counter' by 1 and update the display.
    document.getElementById("Increment")
    .addEventListener("click", Increase);
    function Increase(){
    ++counter
    console.log(counter);
    document.getElementById("counterDisplay")
    .textContent = counter;   
    }
    document.getElementById("Decrement")
    .addEventListener("click", Decrement);
    function Decrement(){
    --counter
    console.log(counter);
    document.getElementById("counterDisplay")
    .textContent = counter;  
    }
} else {
    console.log("counter cannot be negative");
    document.getElementById("counterDisplay")
    .textContent = "counter cannot be negative";
}
// 3. Add click event listeners to both buttons:
//    - On "Increment" button click, increase 'counter' by 1 and update the display.

//    - On "Decrement" button click, decrease 'counter' by 1 and update the display.

// 4. Extra Credit: Prevent 'counter' from going below zero. If a decrement is attempted when 'counter' is 0,
//    display a warning message in the paragraph (e.g., "Counter cannot be negative!").