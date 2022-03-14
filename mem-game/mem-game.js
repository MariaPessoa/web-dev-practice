let container = document.getElementById("container");

let dirName = "../media/";
let imgNames = [];
const maxImg = 3;
for (let i = 0; i < maxImg; i++) {
    imgNames.push(`${i}.jpg`);
    imgNames.push(`${i}.jpg`);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function newGame() {
    shuffleArray(imgNames);

    for (let i = 0; i < imgNames.length; i++) {
        newImgDiv = document.createElement("div");

        newImg = document.createElement("img");
        newImg.src = dirName + `${imgNames[i]}`;
        newImg.classList.add("hidden");
        // all img change the last one??
        // newImg.addEventListener('click', () => {
        //     newImg.classList.toggle("hidden");
        // })

        newImgDiv.appendChild(newImg);
        container.appendChild(newImgDiv);
    }

    document.querySelectorAll('img').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle("hidden");
        })
    })
}
newGame()

// for (let i = 0; i < allImg.length; i++) {
//     allImg[i].addEventListener("click", () => {
//         console.log(allImg.filter((value, index) => { return index !== i }).indexOf(allImg[i]))
//     })
// }

