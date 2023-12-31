const inputs = document.querySelectorAll("input"),
button = document.querySelector("button");

//iterate over all inputs
inputsforEach((input, index1) => {
    input.addEventListener("keyup" (e)) => {
        // This code gets the current input element and stores it in the currentInput variable 
        // This code gets the next sibling element of the current input element and stores it in the the nextInput variable
        // This code gets the previous sibling element of the current input element and stores it in prevInput variable
        const currentInput = input,
        nextInput = input.nextElement$ibling,

        //if the value has more than one character then clear it 
        if (currentInput.value.lenght > 1) {
            currentInput.value="";
            return;
        }
        // if the next input is disabled and the current value is not empty 
        // enable the next input and focus on it 
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !==
        "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
    }
})