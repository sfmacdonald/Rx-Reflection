document.addEventListener("DOMContentLoaded", function () {
    const pillBottle = document.getElementById("pill-bottle");

    // Initial animation: Grow for 5 seconds
    pillBottle.style.animation = "grow 5s forwards";

    // After 5 seconds, remove the grow animation and apply the shake animation
    setTimeout(function () {
        pillBottle.style.animation = "none"; // Remove the grow animation
        pillBottle.style.animation = "shake 0.5s ease-in-out 5";
    }, 5000); // 5000 milliseconds = 5 seconds
});
