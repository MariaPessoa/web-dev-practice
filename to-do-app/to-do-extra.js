let container = document.getElementById("container");
let clearLists = document.getElementById("clear-lists");
let makeList = document.getElementById("new-list-btn");


if (container.children.length === 0) {
    buildList();
}

clearLists.addEventListener("click", () => {
    if (container.children.length !== 0) {
        let allLists = document.querySelectorAll(".list");
        for (let i = 0; i < allLists.length; i++) {
            allLists[i].remove()
        }
    }
})

function buildList() {
    let newList = document.createElement("div");
    newList.classList.add("list");

    let newTitle = document.createElement("h2");
    newTitle.innerText = "New list";
    newTitle.classList.add("title");

    let newForm = document.createElement("form");
    newForm.classList.add("list-form");
    let newInput = document.createElement("input"); newInput.classList.add("list-input");
    newInput.setAttribute('placeholder', "Add an item!");
    let newSubmit = document.createElement("button");
    newSubmit.innerText = "Submit";
    newSubmit.classList.add("new-item-btn");
    newSubmit.setAttribute('type', "submit");
    newForm.appendChild(newInput);
    newForm.appendChild(newSubmit);

    let newUl = document.createElement("ul");
    let newClear = document.createElement("button");
    newClear.innerText = "Clear all";
    newClear.classList.add("clear-items");

    newList.appendChild(newTitle);
    newList.appendChild(newForm);
    newList.appendChild(newUl);
    newList.appendChild(newClear);

    newForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (newInput.value.length >= 1) {
            let newPoint = document.createElement('li');
            newPoint.innerText = `${newInput.value}`;
            newPoint.addEventListener("click", () => {
                newPoint.parentNode.removeChild(newPoint);
            });
            newUl.append(newPoint);
        }
        newInput.value = '';
    })

    newClear.addEventListener("click", () => {
        let allPoints = newUl.querySelectorAll("li");
        newUl.remove(allPoints);
    })

    container.appendChild(newList);
}

makeList.addEventListener("click", () => {
    buildList();
})


