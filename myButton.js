document.getElementById("hideButton").addEventListener("click", function() {
    var image = document.getElementById("myImage");
    var button = document.getElementById("hideButton")
    if (image.style.display === "none") {
        image.style.display = "block";
        button.textContent = "Hide Image";
    } else {
        image.style.display = "none";
        button.textContent = "Show Image";
    }
});