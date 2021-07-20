window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("listView").addEventListener("click", function(){
      document.getElementsByClassName("cards").classList.remove("grid");
    });
    document.getElementById("gridView").addEventListener("click", function(){
      document.getElementsByClassName("cards").classList.add("grid");
    });
  });