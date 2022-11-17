var pages = {};
var imageDisplay;
var imageInput
var image;
var username;
var password;
var accountLabel;
var popUpDisplay;
var popUpDownload;
var download

function init() {
  pages.home = document.getElementById("home");
  pages.image = document.getElementById("image");
  pages.add = document.getElementById("add");
  pages.view = document.getElementById("view");
  pages.login = document.getElementById("login");

  imageDisplay = document.getElementById("imgdisplay");
  imageInput = document.getElementById("imginput");
  accountLabel = document.getElementById("accountlabel");

  popUpDisplay = document.getElementById("popupdisplay");
  popUpDownload = document.getElementById("popupdownload");
  download = document.getElementById("download");
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

  pages.add.style.zIndex = 10;
  pages.view.style.zIndex = 1;
}

function toView() {
  pages.home.style.display = "none";
  pages.image.style.display = "block";
  pages.add.style.display = "none";
  pages.view.style.display = "block";
  pages.login.style.display = "none";

  pages.add.style.zIndex = 1;
  pages.view.style.zIndex = 10;
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

function openPopUpDisplay(text) {
  popUpDisplay.textContent = text;
  popUpDisplay.style.display = "block";
}

function closePopUpDisplay() {
  popUpDisplay.style.display = "none";
}

function closePopUpDownload() {
  popUpDownload.style.display = "none";
}

 document.getElementById("imginput").onchange = function () {
  let url = imageInput.value;
  let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();

  if(imageInput.files && imageInput.files[0] && ext == "png") {
    console.log(imageInput.files[0]);
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

  let xhttp = new XMLHttpRequest();
  
  let encodedUsername = btoa(username)

  xhttp.onload = function () {
    console.log(this.responseText)
    toHome();
    openPopUpDisplay(`You have logged in as ${username}`);
  }
  xhttp.open("POST", "http://localhost:5000/account");
  xhttp.send(encodedUsername);
}

function logOut() {
  username = null;
  password = null;

  accountLabel.textContent = "Log In";
}

function addWatermark() {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    if(this.responseText == "error") {
      openPopUpDisplay("Error: This image format is unsupported");
    } else {
      console.log(this.responseText);
      download.href = this.responseText;
      popUpDownload.style.display = "block";
  }
  }
  xhttp.open("POST", "http://localhost:5000/encode");
  xhttp.send(image);
}

function checkWatermark() {
  let xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    if(this.responseText == "error") {
      openPopUpDisplay("Error: This image format is unsupported");
    } else {
      decodedUsername = atob(this.responseText);
      openPopUpDisplay("This image is watermarked by " + decodedUsername);
    }
  }
  xhttp.open("POST", "http://localhost:5000/decode");
  xhttp.send(image);
}

init();
