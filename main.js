const header = document.getElementById("header")
const index = document.getElementById("index")
const proyects = document.getElementById("proyects")
const contentArticle = document.getElementById("content-article")
const living = document.getElementById("living")
const kitchen = document.getElementById("kitchen")
const bedroom = document.getElementById("bedroom")
const services = document.getElementById("services")
const aboutUs = document.getElementById("aboutus")
const footer = document.getElementById("footer")

const showContentArticle = () => {
  header.style.display = "none";
  index.style.display = "none";
  proyects.style.display = "none";
  contentArticle.style.display = "block";
  living.style.display = "none";
  kitchen.style.display = "none";
  bedroom.style.display = "none";
  services.style.display = "none";
  aboutUs.style.display = "none";
  footer.style.display = "none";
};

const openBedroom = () => {
  bedroom.style.display = "block";
}
document.getElementById("category1").onclick = function () {
  showContentArticle()
  openBedroom();
}

function openLiving() {
  living.style.display = "block";
}
document.getElementById("category2").onclick = function () {
  showContentArticle()
  openLiving();
}

function openKitchen() {
  kitchen.style.display = "block";
}
document.getElementById("category3").onclick = function () {
  showContentArticle()
  openKitchen();
}


const cancel = document.querySelectorAll(".cancel");
for (i = 0; i < cancel.length; i++) {
  cancel[i].addEventListener('click', function (event) {
    event.preventDefault();
    index.style.display = "block";
    contentArticle.style.display = "none";
    proyects.style.display = "block";
    header.style.display = "block";
    services.style.display = "block";
    aboutUs.style.display = "grid";
    footer.style.display = "block";
  });
}


