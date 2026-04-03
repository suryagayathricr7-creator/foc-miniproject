let animalName = document.getElementById("animalName");

animalName.addEventListener("mouseover", function() {
    animalName.textContent = "monkey";
});

animalName.addEventListener("mouseout", function() {
    animalName.textContent = "cat";
});
setTimeout(function(){

alert("Welcome To Animal Page"); },2000);
