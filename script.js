document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const descriptionFull = button.previousElementSibling; // Ambil deskripsi penuh
        if (descriptionFull.style.display === 'none' || descriptionFull.style.display === '') {
            descriptionFull.style.display = 'block'; // Tampilkan deskripsi penuh
            button.innerText = 'Read Less'; // Ubah teks tombol
        } else {
            descriptionFull.style.display = 'none'; // Sembunyikan deskripsi penuh
            button.innerText = 'Read More'; // Ubah teks tombol kembali
        }
        
        const descriptionShort = button.previousElementSibling.previousElementSibling; // Ambil deskripsi pendek
        descriptionShort.style.display = 'none'; // Sembunyikan deskripsi pendek saat menampilkan yang penuh
    });
});