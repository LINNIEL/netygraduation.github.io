particlesJS("particles-js", {
  "particles": {
      "number": {
          "value": 50,  // Atur jumlah partikel sesuai kebutuhan Anda
          "density": {
              "enable": true,
              "value_area": 800
          }
      },
      "line_linked": {
          "enable": false // Menonaktifkan garis antar partikel
      },
      "shape": {
          "type": "image", // Menggunakan gambar sebagai bentuk partikel
          "image": {
              "src": "./assets/image/topi wisuda.png",
              "width": 300,
              "height": 300
          }
      },
      "opacity": {
          "value": 0.8,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 22,
          "random": true,
          "anim": {
              "enable": true,
              "speed": 5,
              "size_min": 0.1,
              "sync": false
          }
      },
      "move": {
          "enable": true,
          "speed": 2,
          "direction": "bottom", // Mengarahkan hati agar jatuh ke bawah
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
});
