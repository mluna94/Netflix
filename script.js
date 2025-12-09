console.log("MyFlix script loaded");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getStartedBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("This is a demo! No real signup exists.");
        });
    }
});
