// Simple click function
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("getStartedBtn");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("Signup flow would start here.");
        });
    }
});
