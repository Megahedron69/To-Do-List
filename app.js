/***********PROBLEMS TO BE SOLVED
 * TASKS COMPLETED COUNTER NEEDS TO BE FIXED
 * RANDOM DIV COLOR NEEDS TO BE FIXED
 ************************/

/****************DOM VARIABLES**************/
const fbody = document.querySelector("body");
const add = document.querySelector("svg");
const backg = document.querySelector(".roun");
const taskar = document.querySelector(".tasks");
const input = document.querySelector("input");
const taskscomp = document.querySelector(".tasksleft");
const shuf = document.querySelector(".ran");
/****************ARRAY AND OBJECTS**********/
let todos = [];
const backgr = [
  "back1.jpg",
  "back2.jpg",
  "back3.jpg",
  "back4.jpg",
  "back5.jpg",
];
/****************VARIABLES******************/
let taskstatus = false;
let checkedivs = 0;
let uncheckeddivs = 0;
/****************FUNCTIONS*****************/
const shufcol = () => {
  let r = Math.floor(Math.random * 255) + 1;
  let g = Math.floor(Math.random * 255) + 1;
  let b = Math.floor(Math.random * 255) + 1;
  return `rgb(${r},${g},${b})`;
};

function creatediv() {
  let divs = document.createElement("div");
  divs.classList.add("tasksdiv");
  for (let tasks of todos) {
    divs.textContent = tasks;
    taskar.append(divs);
    taskstatus = false;
  }

  divs.addEventListener("click", function () {
    divs.classList.remove("tasksdiv");
    divs.classList.add("tasksselected");
    taskstatus = true;
    checkedivs++;
    console.log("complete=" + checkedivs);
  });

  divs.addEventListener("dblclick", function () {
    if (taskstatus === true) {
      divs.classList.remove("tasksselected");
      divs.classList.add("tasksdiv");
      taskstatus = false;
      checkedivs--;
      console.log("complete=" + checkedivs);
    }
    shuf.addEventListener("click", function () {
      divs.style.backgroundColor = shufcol;
      console.log(shufcol());
    });
  });
}

function taskstat() {
  if (checkedivs && uncheckeddivs === 0) taskscomp.textContent = `ADD TASKS`;
  else
    taskscomp.textContent = `${checkedivs} tasks completed of ${uncheckeddivs}`;
}

/****************EVENT LISTENERS**********/
backg.addEventListener("click", function () {
  let ranback = Math.floor(Math.random() * backgr.length);
  fbody.style.backgroundImage = `url(${backgr[ranback]})`;
});

add.addEventListener("click", function () {
  if (input.value === "") alert("Nothing to Add!!!");
  else {
    todos.push(input.value);
    input.value = "";
    creatediv();
    uncheckeddivs++;
    console.log("incomplete=" + uncheckeddivs);
    console.log(todos);
  }
});
