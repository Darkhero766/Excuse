const button = document.getElementById("btn");

const box = document.getElementById("box");
const excuses = [
    "My dog ate my keyboard, can't type right now.",
    "Aliens stole my laptop.",
    "A ninja deleted my database.",
    "The CEO unplugged the server.",
    "My girlfriend left me on seen thats why its hard too work rightnow.",

];


button.addEventListener("click", function () {
    box.innerText = Math.floor(Math.random() * excuses.length);
});

