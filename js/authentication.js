// Buttons
const authEmailPassButton = document.getElementById("authEmailPassButton");
const createUserButton = document.getElementById("createUserButton");
const authGoogleButton = document.getElementById("authGoogleButton");
const authAnonymousButton = document.getElementById("authAnonymousButton");
const logOutButton = document.getElementById("logOutButton");

// Inputs
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

// Displays
const displayName = document.getElementById("displayName");

//Criar novo usuário
createUserButton.addEventListener("click", function () {
  firebase
    .auth()
    .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function () {
      alert("Bem vindo " + emailInput.value + "!");
    })
    .catch(function (error) {
      console.error(error.code);
      console.error(error.message);
      alert("Falha ao cadastrar, verifique o erro no console!");
    });
});

// Logar usuário já cadastrado
authEmailPassButton.addEventListener("click", function () {
  firebase
    .auth()
    .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
    .then(function (result) {
      console.log(result);
      displayName.innerText = "Bem vindo, " + emailInput.value + "!";
      alert("Autenticado " + emailInput.value);
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
});
logOutButton.addEventListener("click", function () {
  firebase
    .auth()
    .signOut()
    .then(
      function () {
        displayName.innerText = "Você não está autenticado";
        alert("Você deslogou!");
      },
      function (error) {
        console.log(error);
      }
    );
});
