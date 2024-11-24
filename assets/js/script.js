// Daftar gambar
const images = [
    'assets/image/gambar_1.jpeg',
      'assets/image/gambar_2.jpeg',
      'assets/image/gambar_3.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementById('image');

// Fungsi untuk mengganti gambar dengan efek zoom-out
function changeImage() {
  // Efek zoom-out pada gambar saat berganti
  imageElement.style.filter = 'blur(10px)'; // Zoom out
  setTimeout(() => {
      // Ganti gambar setelah efek blur-out selesai
      currentIndex = (currentIndex + 1) % images.length;
      imageElement.src = images[currentIndex];

      // Setelah gambar baru dimuat, reset transform untuk zoom in
      setTimeout(() => {
          imageElement.style.filter = 'blur(0px)';
      }, 100);
  }, 500); // Tunggu 1 detik untuk efek zoom-out selesai
}

// Mengganti gambar setiap 5 detik
setInterval(changeImage, 3000);

// Inisialisasi gambar pertama
changeImage();




function getParameterByName(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}


const namaTamu = getParameterByName('untuk') || getParameterByName('kepada');


if (namaTamu) {
  document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('nama-tamu').textContent = namaTamu;
  });
} else {

  document.getElementById('nama-tamu').textContent = "nama undangan";
}
