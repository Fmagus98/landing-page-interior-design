function openBedroom() {
    document.getElementById("header").style.display = "none";
    document.getElementById("index") .style.display = "none";
    document.getElementById("proyects").style.display = "none";
    document.getElementById("content-article").style.display = "block";
    document.getElementById("living").style.display = "none";
    document.getElementById("kitchen").style.display = "none";
    document.getElementById("bedroom").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("aboutus").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  document.getElementById("category1").onclick = function () {
    openBedroom();
  }

  function openLiving() {
    document.getElementById("header").style.display = "none";
    document.getElementById("index") .style.display = "none";
    document.getElementById("proyects").style.display = "none";
    document.getElementById("content-article").style.display = "block";
    document.getElementById("bedroom").style.display = "none";
    document.getElementById("kitchen").style.display = "none";
    document.getElementById("living").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("aboutus").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  document.getElementById("category2").onclick = function () {
    openLiving();
  }

  function openKitchen() {
    document.getElementById("header").style.display = "none";
    document.getElementById("index") .style.display = "none";
    document.getElementById("proyects").style.display = "none";
    document.getElementById("content-article").style.display = "block";
    document.getElementById("bedroom").style.display = "none";
    document.getElementById("kitchen").style.display = "block";
    document.getElementById("living").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("aboutus").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  document.getElementById("category3").onclick = function () {
    openKitchen();
  }

  function cancel() {
    document.getElementById("index").style.display = "block";
    document.getElementById("content-article").style.display = "none";
    document.getElementById("proyects").style.display = "block";
    document.getElementById("header").style.display = "block";
    document.getElementById("services").style.display = "block";
    document.getElementById("aboutus").style.display = "grid";
    document.getElementById("footer").style.display = "block";
  }
  document.getElementById("cancel1").onclick = function () {
    cancel();
  }
  document.getElementById("cancel2").onclick = function () {
    cancel();
  }
  document.getElementById("cancel3").onclick = function () {
    cancel();
  }
  document.getElementById("cancel4").onclick = function () {
    cancel();
  }
  document.getElementById("cancel5").onclick = function () {
    cancel();
  }
  document.getElementById("cancel6").onclick = function () {
    cancel();
  }
  document.getElementById("cancel7").onclick = function () {
    cancel();
  }
  document.getElementById("cancel8").onclick = function () {
    cancel();
  }
  document.getElementById("cancel9").onclick = function () {
    cancel();
  }
  document.getElementById("proyect").onclick = function () {
    proyect();
  }

  function proyect() {
    document.getElementById("proyects").style.display = "block";
    document.getElementById("content-article").style.display = "none";
  }