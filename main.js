const body = document.querySelector("body");
const form = document.createElement("form");

const btnPlusOne = document.createElement("button");
btnPlusOne.classList.add("Button")
const btnPlusTwo = document.createElement("button");
btnPlusTwo.classList.add("Button")
const btnReset = document.createElement("button");
btnReset.classList.add("Button")
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");

body.appendChild(counterDisplayOne);
body.appendChild(counterDisplayTwo);
body.appendChild(form);
body.appendChild(btnPlusOne);
body.appendChild(btnPlusTwo);
body.appendChild(btnReset);

counterDisplayOne.innerText = 0;
counterDisplayTwo.innerText = 0;

let options = [
  { value: 3, text: "3 Points" },
  { value: 5, text: "5 Points" },
  { value: 7, text: "7 Points" },
  { value: 10, text: "10 Points" },
  { value: 15, text: "15 Points" },
];


function createSelect(optionsList) {
  let select = document.createElement("select");

  for (let i = 0; i < optionsList.length; i++) {
    const element = optionsList[i];
    let option = document.createElement("option");
    option.setAttribute("value", element.value);
    option.innerText = element.text;
    select.appendChild(option);
  }

  return select;
}

const select = createSelect(options);
form.appendChild(select);
select.id = "selectForm";////////////////////////////



let counterOne = 0;
let counterTwo = 0;

btnPlusOne.addEventListener("click", () => {
  if (counterOne < selectValue) {
    counterOne++;
    counterDisplayOne.innerText = counterOne;
  }
});

btnPlusTwo.addEventListener("click", () => {
  if (counterTwo < selectValue) {
    counterTwo++;
    counterDisplayTwo.innerText = counterTwo;
  }
});

btnReset.addEventListener("click", () => {
  counterDisplayOne.innerText = 0;
  counterDisplayTwo.innerText = 0;
  counterOne = 0;
  counterTwo = 0;
});

let selectValue = 3;
select.addEventListener("change", () => {
  selectValue = document.querySelector("select").value;
});



body.style.fontFamily = "Arial, sans-serif";
body.style.margin = "0";
body.style.padding = "0";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100%";
body.style.backgroundImage = "url('./PingPong.png')"
body.style.backgroundRepeat ="no-repeat"
body.style.backgroundSize ="cover"


form.style.marginBottom = "1em";
form.style.display = "flex";
form.style.alignItems = "center";
form.style.justifyContent = "center";

select.style.padding = "0.2em";
select.style.fontSize = "2.5em";
select.style.color ="Blue"

// counterDisplayOne.style.fontSize = "5em";
// counterDisplayOne.style.color = "Black";

// counterDisplayTwo.style.fontSize = "5em";
// counterDisplayTwo.style.color = "Black";


btnPlusOne.style.position = "relative"
btnPlusOne.style.width = "200px"
btnPlusOne.style.height = "40px"
btnPlusOne.style.backgroundColor = "blue"
btnPlusOne.style.display = "flex"
btnPlusOne.style.alignItems ="center"
btnPlusOne.style.color ="white"
// btnPlusOne.style.text = "Player1 +1"
btnPlusOne.style.flexDirection ="column"
btnPlusOne.style.justifyContent ="center"
btnPlusOne.style.border ="none"
btnPlusOne.style.borderRadius = "12px"
// btnPlusOne.style.margin = "0.5em";
// btnPlusOne.style.padding = "0.5em";
// btnPlusOne.style.fontSize = "1em";
btnPlusOne.style.cursor = "pointer";


// btnPlusTwo.style.margin = "0.5em";
// btnPlusTwo.style.padding = "0.5em";
// btnPlusTwo.style.fontSize = "1em";
// btnPlusTwo.style.cursor = "pointer";

// btnReset.style.marginTop = "1em";
// btnReset.style.padding = "0.5em";
// btnReset.style.fontSize = "1em";
// btnReset.style.cursor = "pointer";
// btnReset.style.backgroundColor = "yellow";
// btnReset.style.color = "#ffffff";
