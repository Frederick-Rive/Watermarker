var pages = {};
var imageDisplay;
var imageInput
var image;
var username;
var password;
var accountLabel;

function init() {
  pages.home = document.getElementById("home");
  pages.image = document.getElementById("image");
  pages.add = document.getElementById("add");
  pages.view = document.getElementById("view");
  pages.login = document.getElementById("login");

  imageDisplay = document.getElementById("imgdisplay");
  imageInput = document.getElementById("imginput");
  accountLabel = document.getElementById("accountlabel")

  toHome();
}

function toHome() {
  pages.home.style.display = "block";
  pages.image.style.display = "none";
  pages.add.style.display = "none";
  pages.view.style.display = "none";
  pages.login.style.display = "none";
}

function toAdd() {
  pages.home.style.display = "none";
  pages.image.style.display = "block";
  pages.add.style.display = "block";
  pages.view.style.display = "none";
  pages.login.style.display = "none";
}

function toView() {
  pages.home.style.display = "none";
  pages.image.style.display = "block";
  pages.add.style.display = "none";
  pages.view.style.display = "block";
  pages.login.style.display = "none";
}

function toLogin() {
  document.getElementById("uname").value = "";
  document.getElementById("pword").value = "";

  if (accountLabel.textContent != "Log In") {
    logOut();
  } else {
    pages.home.style.display = "none";
    pages.image.style.display = "none";
    pages.add.style.display = "none";
    pages.view.style.display = "none";
    pages.login.style.display = "block";
  }
}

 document.getElementById("imginput").onchange = function () {
  let url = imageInput.value;
  let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();

  if(imageInput.files && imageInput.files[0] && ext == "png") {
    let reader = new FileReader();
    reader.onload = function() {
      image = reader.result;
      imageDisplay.src = image;
      console.log(image);
    }
    reader.readAsDataURL(imageInput.files[0]);
  }
}

function logIn() {
  username = document.getElementById("uname").value;
  password = document.getElementById("pword").value;

  accountLabel.textContent = username;

  toHome();
}

function logOut() {
  username = null;
  password = null;

  accountLabel.textContent = "Log In";
}

function addWatermark() {

}

function checkWatermark() {

}

init();
