document.addEventListener("DOMContentLoaded", function () {
    console.log("Halaman telah dimuat!");

    const links = document.querySelectorAll(".links a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Menghentikan event default jika ingin mencegah navigasi
            // event.preventDefault(); 

            console.log("Tautan diklik: " + this.href);
        });
    });
});
