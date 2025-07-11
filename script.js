window.onload = function() {
    if (window.innerWidth < 768) {
        document.querySelector(".mobile-content").style.display = "block";
        document.querySelector(".desktop-message").style.display = "none";
    } else {
        document.querySelector(".mobile-content").style.display = "none";
        document.querySelector(".desktop-message").style.display = "block";
    }
};

