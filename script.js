const clickTag = document.getElementsByClassName("click")[0];
const clickBoxTag = document.getElementsByClassName("clickBox") [0];
const leftClickTag = document.getElementsByClassName("leftClick") [0];
const rightClickTag = document.getElementsByClassName("rightClick") [0];

clickTag.addEventListener ("click", () => {
    clickBoxTag.style.display = "flex";
});

clickBoxTag.addEventListener ("click", () => {
    clickBoxTag.style.display = "none";
})