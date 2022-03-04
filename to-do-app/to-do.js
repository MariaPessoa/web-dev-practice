let form = document.querySelector("#list-form");
let list = document.querySelector("#all-items");
let input = document.querySelector("input");
let clearButton = document.querySelector("#clear");
let listItems = document.querySelectorAll("li");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.length >= 1) {
        addItem(input.value);
    }
    input.value = '';

    if (list.children.length === 1) {
        list.classList.add("active")
    }
})

const addItem = (item) => {
    const newPoint = document.createElement('li');
    newPoint.innerText = `${item}`;
    newPoint.addEventListener("click", () => {
        newPoint.parentNode.removeChild(newPoint);
        if (list.children.length === 0) {
            list.classList.remove("active");
        }
    });
    list.append(newPoint);
}

clearButton.addEventListener("click", () => {
    list.remove(listItems)
    list.classList.remove("active");
})

