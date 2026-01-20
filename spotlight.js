document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const THRESHOLD = 40; // píxeles desde arriba

    const handleScroll = () => {
        if (window.scrollY <= THRESHOLD) {
            body.classList.add("locked"); 
        } else {
            body.classList.remove("locked");
        }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
});
