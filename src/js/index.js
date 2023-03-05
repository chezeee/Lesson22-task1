const loginForm = document.querySelector("#login-form");

function authorization() {
  console.log("form submitted");
}

// Кнопка отправки задизаблена до заполнения всех полей
function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();

  formNode.querySelector("#submit-button").disabled = !isValid;
}

loginForm.addEventListener("input", checkValidity);

loginForm.addEventListener("submit", (event) => {
  authorization();

  event.preventDefault();
});
