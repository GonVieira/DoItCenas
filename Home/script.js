//CREATING VARIABLES
let textInputsList = [];
let responseUrl = "https://shouldyoudoit.herokuapp.com/";
const result = document.getElementById("results");
const input = document.getElementById("txt-input");
const buttonBox = document.getElementById("button-div");
const submit = document.getElementById("submit-btn");
const modalContainer = document.getElementById("modal-container");
const modalCloseBtn = document.getElementById("close-modal");
const modalContent = document.getElementById("text-content");

//EVENT LISTENERS
modalCloseBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show-modal");
});

//FUNCTIONS
function removeModal() {
  modalContainer.classList.remove("show-modal");
}

function getResults() {
  //empty input text box
  if (input.value == "") {
    modalContainer.classList.add("show-modal");
    modalContent.innerHTML = `
     <p id="text-content">Please write what you want to do!</p>
    `;
  }
  if (input.value != "") {
    //Already used
    if (textInputsList.includes(input.value)) {
      result.innerHTML = "";
      modalContainer.classList.add("show-modal");
      modalContent.innerHTML = `
     <p id="text-content">Please write another thing!</p>
    `;
    }

    if (!textInputsList.includes(input.value)) {
      textInputsList.push(input.value);
      //Get response and gif from api
      fetch(responseUrl)
        .then((resultFetch) => resultFetch.json())
        .then((value) => {
          //insert results in HTML
          result.innerHTML = `
          <div id="responseText">
            <h1>${value.msg}</h1>
          </div>
          <img src="${value.img}" alt="${value.msg}"> 
        `;
        })
        .catch((error) => console.log(error));

      buttonBox.innerHTML = `
      <button type="button" id="clear-btn" style="width:49%" onclick="clearBtn()">Clean</button>
      <button type="button" id="submit-btn" style="width:49%" onclick="getResults()">Decide</button>
    `;
    }
  }
}

function clearBtn() {
  textInputsList = [];
  result.innerHTML = "";
  buttonBox.innerHTML = `<button type="button" id="submit-btn" onclick="getResults()">Decide</button> `;
}
