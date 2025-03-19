document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman telah dimuat!");

    const links = document.querySelectorAll(".links a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            alert("Anda akan diarahkan ke: " + this.href);
        });
    });
});
