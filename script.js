//CREATING VARIABLES
let textInputsList = [];
let responseUrl = "https://shouldyoudoit.herokuapp.com/";
let result = document.getElementById("results");
let input = document.getElementById("txt-input");
let buttonBox = document.getElementById("button-div");
const submit = document.getElementById("submit-btn");

//FUNCTIONS
function getResults() {
  //empty input text box
  if (input.value !== "") {
    textInputsList.push[input.value];

    if (textInputsList.includes(input.value)) {
      console.warn("ERRO DE MENSAGEM REPETIDA");
    }

    //Get response and gif from api
    fetch(responseUrl)
      .then((resultFetch) => resultFetch.json())
      .then((value) => {
        //insert results in HTML
        result.innerHTML = `
          <h1>${value.msg}</h1>
          <img src="${value.img}" alt="${value.msg}"> 
        `;
      }).catch(error => console.log(error));

    buttonBox.innerHTML = `
      <button type="button" id="clear-btn" style="width:49%" onclick="clearBtn()">Clean</button>
      <button type="button" id="submit-btn" style="width:49%" onclick="getResults()">Decide</button>
    `;
  } else {
    console.warn("");
  }
}

function clearBtn() {
  textInputsList = [];
  result.innerHTML = "";
  buttonBox.innerHTML = `<button type="button" id="submit-btn" onclick="getResults()">Decide</button> `;
}
