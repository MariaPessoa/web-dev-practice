let screenKeys = document.getElementsByClassName("print");
let screen = document.getElementById("screen");
let enter = document.getElementById("enter");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let memBack = document.getElementById("mem");

let memory = [];

// missing sqr root
let mathKeys = {
    "÷": "/",
    "x": "*",
    "√": "**0.5",
    "^": "**"
};

for (let i = 0; i < screenKeys.length; i++) {
    screenKeys[i].addEventListener("click", () => {
        if (!screen.classList.contains("active")) {
            screen.classList.add("active")
        }
        screen.innerText += `${screenKeys[i].innerText}`
    })
}

enter.addEventListener("click", () => {
    if (screen.innerText.length > 0) {
        let result = "";
        let screenText = screen.innerText;
        let keys = Object.keys(mathKeys);

        try {
            // match?
            for (let i = 0; i < keys.length; i++) {
                screenText = screenText.replaceAll(keys[i], mathKeys[keys[i]]);
            }
            console.log(screenText);
            result = eval(screenText);
            // divide by zero is infinity, not error
        } catch (error) {
            result = "error";
            console.log(error);
        }
        finally {
            screen.innerText = result;

            if (result !== "error") {
                memory.push(result);
                if (memory.length === 7) {
                    memory.shift();
                }
            }
        }
    }
})

erase.addEventListener("click", () => {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
    if (screen.innerText.length === 0) {
        screen.classList.remove("active");
    }
})

clear.addEventListener("click", () => {
    screen.innerText = "";
    screen.classList.remove("active");
})

memBack.addEventListener("click", () => {
    if (memory.length > 0) {
        screen.innerText = memory.pop();
        if (!screen.classList.contains("active")) {
            screen.classList.add("active")
        }
    }
})