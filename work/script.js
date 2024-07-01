document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const toggleDisplay = () => {
    const isDiv1Visible = div1.style.display === "block";
    div1.style.display = isDiv1Visible ? "none" : "block";
    div2.style.display = isDiv1Visible ? "block" : "none";
    toggleButton.textContent = isDiv1Visible ? "Open code" : "Open colors";
    };
    div1.style.display = "block";
    toggleButton.textContent = "Open Colors";
    toggleButton.addEventListener("click", toggleDisplay);
    });