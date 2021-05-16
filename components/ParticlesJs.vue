<template>
  <div class="particlesJS-container">
    <div id="particles-js" />
    <slot />
  </div>
</template>
<script>

export default {
  name: 'Particles',
  props: {
    classprops: { type: String, default: '' }
  },

  mounted () {
    require('particles.js')
    this.$nextTick(() => {
      this.initParticlesJS()
    })
  },
  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 80,
            "density": {
              "enable": true,
              "value_area": 1025.8919341219544
            }
          },
          "color": {
            "value": "#ffffff"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 4
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 2.9,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 9.744926547616142,
              "size_min": 4.060386061506725,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 94,
            "color": "#ffffff",
            "opacity": 0.1122388442605866,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1.2,
            "direction": "top-right",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 721.5354273894853,
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
              "distance": 89.32849335314796,
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
      }
      )
    }
  }

}
</script>

<style>
.particlesJS-container{
  height: 90%;
}
</style>
