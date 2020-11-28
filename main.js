var player;
var player1;
var player2;

window.onload = () => {
  'use strict';

  player = document.getElementById('audio');
  player.loop = false;
  player.load();

  player1 = document.getElementById('audio1');
  player1.load();

  player2 = document.getElementById('audio2');
  player2.load();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
    camStart();
}

var moved = true;
var posX = 5;
var posY = 5;

function GoSet1(i) {
    if (i == 1) {
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            particles: {
                collisions: {
                    enable: true,
                    mode: "bounce"
                },
                color: {
                    value: "random"
                },
                move: {
                    attract: {
                        enable: true,
                        rotate: {
                            x: 600,
                            y: 1200
                        }
                    },
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    limit: 105,
                    value: 100
                },
                opacity: {

                    random: {
                        enable: false,
                        minimumValue: 1
                    },
                    value: 0.7
                },
                rotate: {
                    animation: {
                        enable: false,
                        speed: 0,
                        sync: false
                    },
                    direction: "clockwise",
                    random: false,
                    value: 0
                },
                shape: {
                    options: {
                        star: {
                            fill: true,
                            close: true,
                            sides: 5
                        }
                    },
                    type: "circle"
                },
                size: {
                    animation: {
                        enable: false,
                        minimumValue: 1,
                        maximumValue: 10,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 5
                    },
                    value: 25
                },
                stroke: {
                    color: {
                        value: "random"
                    },
                    width: 10,
                    opacity: 1
                },
            },

            detectRetina: true,

            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onDiv: {
                        enable: false,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    absorbers: [],
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40
                    },
                    connect: {
                        distance: 80,
                        radius: 60
                    },
                    emitters: [],
                    grab: {
                        distance: 4000,
                        lineLinked: {
                            opacity: 0
                        }
                    },
                    push: {
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                        speed: 1
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    }
                }
            },
            pauseOnBlur: true,
        })
            /*.then((c) => {
                        var target = c.interactivity.element;
    
                        var rect = {
                            left: 0,
                            top: 0,
                            width: target.innerWidth,
                            height: target.innerHeight
                        };
                        var point = {
                            x: rect.width / 2,
                            y: rect.height / 2
                        };
                        var moveType = "mousemove";
                        var tmp = 1;
                        setInterval(() => {
                            if (moved) {
                                point.x += posX;
                                point.y += posY;
                                var moveEvent = new MouseEvent(moveType, {
                                    view: target,
                                    bubbles: true,
                                    cancelable: true,
                                    clientX: rect.left + point.x,
                                    clientY: rect.top + point.y
                                    // you can pass any other needed properties here
                                });
                                target.dispatchEvent(moveEvent);
                                moved = false;
                            }
                        }, 100);
                    }) */
            ;

    } else if (i == 2) {
        tsParticles.load("tsparticles", {
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": true,
                        "value_area": 600
                    }
                },
                "color": {
                    "value": "random"
                },
                "shape": {
                    "type": "edge",
                    "stroke": {
                        "width": 1,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0,
                        "sync": false
                    }
                },
                "size": {
                    "value": 15,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 4,
                        "size_min": 0.3,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
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
                        "distance": 200,
                        "size": 30,
                        "duration": 2,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 150,
                        "duration": 1
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
    } else if (i == 3)
        tsParticles.load("tsparticles", {
            particles: {
                color: {
                    value: [
                        "rgb(240, 207, 100)",
                        "rgb(209, 100, 208)",
                        "rgb(215, 239, 52)",
                        "rgb(181, 216, 100)",
                        "rgb(248, 128, 68)",
                        "rgb(21, 225, 54)",
                        "rgb(100, 150, 250)",
                        "rgb(255, 55, 100)"
                    ]
                },
                move: {
                    bounce: true,
                    direction: "none",
                    enable: true,
                    out_mode: "bounce",
                    random: false,
                    speed: 5
                },
                number: {
                    value: 80
                },
                opacity: {
                    value: .8
                },
                shape: {
                    type: "triangle",
                    options: {
                        bubble: {}
                    }
                },
                stroke: {
                    color: "#000000",
                    width: 3
                },
                size: {
                    value: 25
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onDiv: {
                        enable: false,
                        mode: "repulse"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    absorbers: [],
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 60
                    },
                    connect: {
                        distance: 80,
                        radius: 60
                    },
                    emitters: [],
                    grab: {
                        distance: 4000,
                        lineLinked: {
                            opacity: 0
                        }
                    },
                    push: {
                        quantity: 4
                    },
                    remove: {
                        quantity: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                        speed: 1
                    },
                    slow: {
                        factor: 3,
                        radius: 200
                    }
                }
            },

            retina_detect: true
        });

    else
        tsParticles.load("tsparticles", {
            fpsLimit: 60,
            emitters: {
                direction: "top",
                size: {
                    width: 100,
                    height: 0
                },
                position: {
                    x: 50,
                    y: 100
                },
                rate: {
                    delay: 0.1,
                    quantity: 5
                }
            },
            particles: {
                number: {
                    value: 0
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "image",
                    image: [
                        {
                            src: "images/Bub.png",
                            width: 202,
                            height: 200
                        },
                        {
                            src: "images/Bub.png",
                            width: 1153,
                            height: 1080
                        },
                        {
                            src: "images/Bub.png",
                            width: 894,
                            height: 894
                        }
                    ]
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 30,
                    anim: {
                        enable: true,
                        speed: 5,
                        size_min: 5,
                        sync: true,
                        startValue: "min",
                        destroy: "max"
                    }
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "destroy",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "window",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    repulse: {
                        distance: 80
                    },
                    push: {
                        quantity: 10
                    }
                }
            },
            detectRetina: true
        });

}

function GoSet2(i) {
    if (i == 1) {
        tsParticles.load("tsparticles", {
            "particles": {
                "number": {
                    "value": 400,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 3,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },

                    "image": {
                        "src": "images/St.png",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 20,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,
                    "distance": 50,
                    "color": "#ffffff",
                    "opacity": 0.6,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detectsOn": "window",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 150,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 100,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 100,
                        "duration": 0.2
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
    } else if (i == 2)
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "random"
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 128,
                        src: "images/St2.png",
                        width: 128
                    },
                    {
                        height: 128,
                        src: "images/Str.png",
                        width: 128
                    },
                    {
                        height: 128,
                        src: "images/Stg.png",
                        width: 128
                    },
                    {
                        height: 128,
                        src: "images/Sty.png",
                        width: 128
                    },
                    {
                        height: 128,
                        src: "images/Stb.png",
                        width: 128
                    }
                    ]
                },
                opacity: {
                    value: 0.8,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 25,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 20,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 1,
                    width: 3
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: true,
                    straight: true,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 300,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: true,
                        mode: "bubble"
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 8,
                            width: 3
                        }
                    },
                    bubble: {
                        distance: 100,
                        size: 80,
                        duration: 2,
                        opacity: 10,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.2
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });

    else if (i == 3)
        particlesJS("tsparticles", {
            particles: {
                number: {
                    value: 200,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "random"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "random"
                    },

                },
                opacity: {
                    value: .8,
                },
                size: {
                    value: 5,
                    random: true,
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "random",
                    opacity: 0.4,
                    width: 3
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: true,
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "bubble"]
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 5,
                            color: "#FFFFFF",
                            width: 4,
                        }
                    },
                    bubble: {
                        distance: 100,
                        size: 25,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: .2
                    },
                    push: {
                        "particles_nb": 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            "retina_detect": true
        });


    else if (i == 4)
        particlesJS("tsparticles", {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 400
                    }
                },
                color: {
                    value: "random"
                },
                shape: {
                    type: "triangle",
                    stroke: {
                        width: 2,
                        color: "random"
                    },

                },
                opacity: {
                    value: .5,
                },
                size: {
                    value: 25,
                    random: true,
                },
                line_linked: {
                    enable: false,
                    distance: 150,
                    color: "random",
                    opacity: .4,
                    width: 3
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                }
            },
            interactivity: {
                detectsOn: "window",
                events: {
                    onhover: {
                        enable: true,
                        mode: ["grab", "bubble"]
                    },
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 100,
                        line_linked: {
                            opacity: 5,
                            color: "#FFFFFF",
                        }
                    },
                    bubble: {
                        distance: 100,
                        size: 60,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: .2
                    },
                    push: {
                        "particles_nb": 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            "retina_detect": true
        });

}

function GoSet3(i) {
    if (i == 1)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    },
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                rotate: {
                    value: 45,
                    path: true
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 350,
                        src: "images/T1.png",
                        width: 300
                    }
                        /*,
                                               {
                                                   height: 128,
                                                   src: "images/T2.svg",
                                                   width: 128
                                           }*/
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 48
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else if (i == 2)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "top",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 256,
                        src: "images/B1.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B2.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B3.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B4.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B5.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B6.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B7.png",
                        width: 128
                    },
                    {
                        height: 256,
                        src: "images/B8.png",
                        width: 128
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 48
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else if (i == 3)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "right",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 800
                    },
                    value: 80
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 96,
                        src: "images/P1.png",
                        width: 128
                    },
                    {
                        height: 96,
                        src: "images/P2.png",
                        width: 128
                    },
                    {
                        height: 96,
                        src: "images/P3.png",
                        width: 128
                    },
                    {
                        height: 96,
                        src: "images/P4.png",
                        width: 128
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 60
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else {
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 1
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "right",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 2,
                    straight: true
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 400
                    },
                    value: 40
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 96,
                        src: "images/V1.png",
                        width: 150
                    },
                    {
                        height: 96,
                        src: "images/V2.png",
                        width: 150
                    },
                    {
                        height: 96,
                        src: "images/V3.png",
                        width: 150
                    },
                    {
                        height: 96,
                        src: "images/V4.png",
                        width: 150
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 100
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    }


}

function GoSet4(i) {
    if (i == 1)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onhover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 1,
                        size: 80,
                        speed: 1
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 1
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 400
                    },
                    value: 80
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 256,
                        src: "images/F1.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F2.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F3.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F4.png",
                        width: 256
                    },
                    {
                        height: 200,
                        src: "images/F5.png",
                        width: 300
                    },
                    {
                        height: 400,
                        src: "images/F6.png",
                        width: 400
                    },
                    {
                        height: 256,
                        src: "images/F7.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F8.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F9.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F10.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F11.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F12.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F13.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F14.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F15.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F16.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F17.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F18.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F19.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/F20.png",
                        width: 256
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 50
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else if (i == 2)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 150,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 200
                    },
                    value: 100
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 256,
                        src: "images/Bu1.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu2.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu3.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu4.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu5.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu6.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu7.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu8.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu9.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/Bu10.png",
                        width: 256
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 60
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else if (i == 3)
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "repulse"
                    },
                    onhover: {
                        enable: true,
                        mode: "bubble",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 80,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: false,
                        value_area: 500
                    },
                    value: 150
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 256,
                        src: "images/S1.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/S2.png",
                        width: 350
                    },
                    {
                        height: 450,
                        src: "images/S3.png",
                        width: 300
                    },
                    {
                        height: 350,
                        src: "images/S4.png",
                        width: 350
                    },
                    {
                        height: 350,
                        src: "images/S5.png",
                        width: 350
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 50
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    else {
        tsParticles.load("tsparticles", {
            interactivity: {
                detectsOn: "window",
                events: {
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    onhover: {
                        enable: true,
                        mode: "repulse",
                        parallax: {
                            enable: false,
                            force: 60,
                            smooth: 10
                        }
                    },
                    resize: true
                },
                modes: {
                    bubble: {
                        distance: 100,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                        speed: 3
                    },
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    },
                    repulse: {
                        distance: 100,
                        duration: 1
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                move: {
                    bounce: false,
                    direction: "none",
                    enable: true,
                    out_mode: "out",
                    random: true,
                    speed: 1,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        value_area: 400
                    },
                    value: 30
                },
                opacity: {
                    anim: {
                        enable: false,
                        opacity_min: 0.1,
                        speed: 1,
                        sync: false
                    },
                    random: false,
                    value: 1
                },
                shape: {
                    type: "image",
                    image: [{
                        height: 280,
                        src: "images/M1.png",
                        width: 256
                    },
                    {
                        height: 290,
                        src: "images/M2.png",
                        width: 256
                    },
                    {
                        height: 400,
                        src: "images/M3.png",
                        width: 200
                    },
                    {
                        height: 256,
                        src: "images/M4.png",
                        width: 256
                    },
                    {
                        height: 200,
                        src: "images/M5.png",
                        width: 300
                    },
                    {
                        height: 400,
                        src: "images/M6.png",
                        width: 400
                    },
                    {
                        height: 300,
                        src: "images/M7.png",
                        width: 256
                    },
                    {
                        height: 256,
                        src: "images/M8.png",
                        width: 256
                    }
                    ]
                },

                size: {
                    anim: {
                        enable: false,
                        size_min: 0.1,
                        speed: 40,
                        sync: false
                    },
                    random: {
                        enable: true,
                        minimumValue: 16
                    },
                    value: 80
                }
            },
            polygon: {
                draw: {
                    enable: false,
                    lineColor: "#ffffff",
                    lineWidth: 0.5
                },
                move: {
                    radius: 10
                },
                scale: 1,
                type: "none",
                url: ""
            },
            retina_detect: true
        });
    }


}


// Override the function with all the posibilities
navigator.getUserMedia ||
    (navigator.getUserMedia = navigator.mozGetUserMedia ||
        navigator.webkitGetUserMedia || navigator.msGetUserMedia);
var gl;
var canvas;
var Param1 = 1.0; // volume
var Param2 = 2.5; // brightness control
var Param3 = 1.0;
var Param4 = 1.0;
var Sound1 = 1.0;
var Sound2 = 1.0;
var Sound3 = 1.0;
var Sound4 = 1.0;
var mouseX = 0.5;
var mouseY = 0.5;
var keyState1 = 0;
var keyState2 = 0;
var keyState3 = 0;
var keyState4 = 0;
var keyStatel = 0;
var keyStater = 0;
var firstTime = false;
var fricative = false;
var settings;
var panel;
var panelvisible = false;
var progress;
var vol1;
var vol2;
var inMenu = true;
var menuItem = 0;
var drawContext = null;
var setNo = 1;
var activityNo = 1;
var ts;


function initGL() {
    try {
        gl = canvas.getContext("experimental-webgl", {
            antialias: true
        });
        //            gl = canvas.getContext("experimental-webgl", {preserveDrawingBuffer: true});
    } catch (e) { }
    if (!gl) {
        alert("Could not initialise WebGL, sorry :-(");
    }
}

function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "f") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "v") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}

var programsArray = new Array();
var current_program;
var index = 0;

function initShaders() {
    programsArray.push(createProgram("shader-vs", "shader-1-fs"));
    current_program = programsArray[0];
}

function createProgram(vertexShaderId, fragmentShaderId) {
    var shaderProgram;
    var fragmentShader = getShader(gl, fragmentShaderId);
    var vertexShader = getShader(gl, vertexShaderId);

    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    gl.useProgram(shaderProgram);

    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition");
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    shaderProgram.textureCoordAttribute = gl.getAttribLocation(shaderProgram, "aTextureCoord");
    //       gl.enableVertexAttribArray(shaderProgram.textureCoordAttribute);

    shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
    shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.samplerUniform = gl.getUniformLocation(shaderProgram, "uSampler");
    shaderProgram.resolutionUniform = gl.getUniformLocation(shaderProgram, "resolution");
    shaderProgram.mouse = gl.getUniformLocation(shaderProgram, "mouse");
    shaderProgram.time = gl.getUniformLocation(shaderProgram, "time");
    shaderProgram.Param1 = gl.getUniformLocation(shaderProgram, "Param1");
    shaderProgram.Param2 = gl.getUniformLocation(shaderProgram, "Param2"); // volume
    shaderProgram.Param3 = gl.getUniformLocation(shaderProgram, "Param3");
    shaderProgram.Param4 = gl.getUniformLocation(shaderProgram, "Param4");
    shaderProgram.Sound1 = gl.getUniformLocation(shaderProgram, "Sound1");
    shaderProgram.Sound2 = gl.getUniformLocation(shaderProgram, "Sound2");
    shaderProgram.Sound3 = gl.getUniformLocation(shaderProgram, "Sound3");
    shaderProgram.Sound4 = gl.getUniformLocation(shaderProgram, "Sound4");
    return shaderProgram;
}

var webcam;
var texture;

function initTexture() {
    texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.bindTexture(gl.TEXTURE_2D, null);
}

var mvMatrix = mat4.create();
var mvMatrixStack = [];
var pMatrix = mat4.create();

function mvPushMatrix() {
    var copy = mat4.create();
    mat4.set(mvMatrix, copy);
    mvMatrixStack.push(copy);
}

function mvPopMatrix() {
    if (mvMatrixStack.length == 0) {
        throw "Invalid popMatrix!";
    }
    mvMatrix = mvMatrixStack.pop();
}

var ix = 0.0;
var end;
var st = new Date().getTime();

function setUniforms() {
    end = new Date().getTime();
    gl.uniformMatrix4fv(current_program.pMatrixUniform, false, pMatrix);
    gl.uniformMatrix4fv(current_program.mvMatrixUniform, false, mvMatrix);
    gl.uniform2f(current_program.resolutionUniform, canvas.width, canvas.height);
    gl.uniform2f(current_program.mouse, mouseX, mouseY);
    gl.uniform1f(current_program.time, ((end - st) % 1000000) / 1000.0);
    gl.uniform1f(current_program.Param1, Param1);
    gl.uniform1f(current_program.Param2, Param2);
    gl.uniform1f(current_program.Param3, Param3);
    gl.uniform1f(current_program.Param4, Param4);
}

var cubeVertexPositionBuffer;
var cubeVertexTextureCoordBuffer;
var cubeVertexIndexBuffer;

function initBuffers() {
    cubeVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    vertices = [-1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    cubeVertexPositionBuffer.itemSize = 2;
    cubeVertexPositionBuffer.numItems = 4;

    cubeVertexTextureCoordBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
    var textureCoords = [0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 0.0, 0.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
    cubeVertexTextureCoordBuffer.itemSize = 2;
    cubeVertexTextureCoordBuffer.numItems = 4;

    cubeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    var cubeVertexIndices = [0, 1, 2, 0, 2, 3];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices), gl.STATIC_DRAW);
    cubeVertexIndexBuffer.itemSize = 1;
    cubeVertexIndexBuffer.numItems = 6;
}

function drawScene() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.BLEND);

    mat4.ortho(-1.0, 1.0, -1.0, 1.0, -1.0, 1.0, pMatrix);

    gl.useProgram(current_program);
    mat4.identity(mvMatrix);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(current_program.vertexPositionAttribute, cubeVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexTextureCoordBuffer);
    //        gl.vertexAttribPointer(current_program.textureCoordAttribute, cubeVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, webcam);
    gl.uniform1i(current_program.samplerUniform, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    setUniforms();
    gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numItems, gl.UNSIGNED_SHORT, 0);

    gl.bindTexture(gl.TEXTURE_2D, null);
}

var colorList = [];
var doingRainbow = "1";;

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    if (doingRainbow == "1") {
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
    } else
        color = fcol.style.backgroundColor;
    return color;
}

function MakeColorList() {
    for (var i = 0; i < 20; i++)
        colorList[i] = getRandomColor();
}

function tick() {
    requestAnimFrame(tick);
    drawScene();
}

function webGLStart() {
    canvas = document.getElementById("webgl-canvas");
    if (screen.width > 1500 || screen.height > 1500) {
        canvas.width = 1024;
        canvas.height = 1024;
    } else {
        canvas.width = 512;
        canvas.height = 512;
    }
    //canvas.width = 2096;  for screen capture or use 4k resolution with old firefox, i.e. 3840x2160
    //canvas.height =2096;
    initGL();
    initShaders();
    initBuffers();
    initTexture();

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
    tick();
}

var player;
var player1;
var player2;

function PlaySound(i) {
    switch (i) {
        case 1:
            player.play();
            break;
        case 2:
            player1.play();
            break;
        case 3:
            player2.play();
            break;
    }
}

function Action(i) {
    switch (i) {
        /*       case 1: // Volume so not used here
                   Param1 = Param1 + 1;
                   if (Param1 > 4)
                       Param1 = 1;
                   PlaySound(2);
                   break;
               case 2: // frication so not used here
                   Param2 = Param2 + 1;
                   if (Param2 > 4)
                       Param2 = 1;
                   PlaySound(1);
                   break; */
        case 3: // colour
            Param3 = Param3 + 1;
            if (Param3 > 7)
                Param3 = 1;
            PlaySound(1);
            break;
        case 4: // background
            Param4 = Param4 + 1;
            if (Param4 > 6)
                Param4 = 1;
            PlaySound(3);
            break;
        case 5: // left

            activityNo = activityNo - 1;
            if (activityNo < 0) activityNo = 3;
            Go(activityNo);
            break;
        case 6: // right
            activityNo = activityNo + 1;
            if (activityNo > 4) activityNo = 1;
            Go(activityNo)
            break;
        case 7: // toggle buttons
            toggleButtons();
            break;
    }
}

function toggleButtons() {
    ibutton.hidden = !ibutton.hidden;
    ibutton1.hidden = !ibutton1.hidden;
    ibuttonl.hidden = !ibuttonl.hidden;
    ibuttonr.hidden = !ibuttonr.hidden;
}

function MonitorKeyDown(e) { // stop autorepeat of keys with KeyState1-4 flags
    if (!e) e = window.event;
    if (e.keyCode == 32 || e.keyCode == 49) {
        if (keyState1 == 0)
            Action(4);
    } else if (e.keyCode == 50) {
        if (keyState2 == 0)
            Action(3);
        keyState2 = 1;
    } else if (e.keyCode == 51 || e.keyCode == 13) {
        if (keyState3 == 0)
            Action(1);
        keyState3 = 1;
    } else if (e.keyCode == 52) {
        if (keyState4 == 0)
            Action(2);
        keyState4 = 1;
    } else if (e.keyCode == 53) {
        toggleButtons();
    } else if (e.keyCode == 189) { // -
        if (keyStatel == 0)
            Action(5); //buttonl
    } else if (e.keyCode == 187) { // +
        if (keyStater == 0)
            Action(6);

    } else if (e.keycode == 27) {
        showMenu();
    }

    return false;
}

function MonitorKeyUp(e) {
    if (!e) e = window.event;
    if (e.keyCode == 32 || e.keyCode == 49) {
        keyState1 = 0;
    } else if (e.keyCode == 50) {
        keyState2 = 0;
    } else if (e.keyCode == 51 || e.keyCode == 13) {
        keyState3 = 0;
    } else if (e.keyCode == 52) {
        keyState4 = 0;
    } else if (e.keyCode == 189) {
        keyStatel = 0;
    } else if (e.keyCode == 187) {
        keyStater = 0;
    }
    return false;
}

var mouseState = 0;

function MonitorMouseDown(e) {
    if (!e) e = window.event;
    if (e.button == 0) {
        mouseState = 1;
        mouseX = e.clientX / canvas.scrollWidth;
        mouseY = 1.0 - e.clientY / canvas.scrollHeight;
    }
    var c = document.getElementById("container");
    c.style.filter = "sepia(1) hue-rotate(230deg) saturate(2)";
    toggleButtons();
    return false;
}

function MonitorMouseUp(e) {
    if (!e) e = window.event;
    if (e.button == 0) {
        mouseState = 0;
    }
    var c = document.getElementById("container");
    c.style.filter = "grayscale(0)";
    return false;
}

var splash;
var button;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var button7;
var ibutton;
var ibutton1;
var ibuttonl;
var ibuttonr;

function hideMenu() {
    splash.hidden = true;
    button.hidden = true;
    button1.hidden = true;
    button2.hidden = true;
    button3.hidden = true;
    button4.hidden = true;
    button5.hidden = true;
    button6.hidden = true;
    button6.hidden = true;
    button7.hidden = true;
    ibutton.hidden = false;
    ibutton1.hidden = false;
    ibuttonl.hidden = false;
    ibuttonr.hidden = false;
    crosshairs.hidden = true;
    inMenu = false;
}

function showMenu() {
    splash.hidden = false;
    button.hidden = false;
    button1.hidden = false;
    button2.hidden = false;
    button3.hidden = false;
    button4.hidden = false;
    button5.hidden = false;
    button6.hidden = false;
    button6.hidden = false;
    button7.hidden = false;
    ibutton.hidden = true;
    ibutton1.hidden = true;
    ibuttonl.hidden = true;
    ibuttonr.hidden = true;
    inMenu = true;
}

function Highlight() {
    button.style.opacity = .7;
    button1.style.opacity = .7;
    button2.style.opacity = .7;
    button3.style.opacity = .7;
    button4.style.opacity = .7;
    button5.style.opacity = .7;
    button6.style.opacity = .7;
    button7.style.opacity = .7;
    switch (menuItem) {
        case 0:
            button.style.opacity = 1.;
            break;
        case 1:
            button1.style.opacity = 1.;
            break;
        case 2:
            button2.style.opacity = 1.;
            break;
        case 3:
            button3.style.opacity = 1.;
            break;
        case 4:
            button4.style.opacity = 1.;
            break;
        case 5:
            button5.style.opacity = 1.;
            break;
        case 6:
            button6.style.opacity = 1.;
            break;
        case 7:
            button7.style.opacity = 1.;
            break;
    }
}

function ChooseSet(i) {
    button4.style.backgroundImage = "url(images/" + i + "1.png)";
    button5.style.backgroundImage = "url(images/" + i + "2.png)";
    button6.style.backgroundImage = "url(images/" + i + "3.png)";
    button7.style.backgroundImage = "url(images/" + i + "4.png)";
    setNo = i;
    button.style.border = "none";
    button.style.borderRadius = "0px";
    button1.style.border = "none";
    button1.style.borderRadius = "0px";
    button2.style.border = "none";
    button2.style.borderRadius = "0px";
    button3.style.border = "none";
    button3.style.borderRadius = "0px";
    switch (setNo) {
        case 1:
            button.style.border = "2px solid #FFFFFF";
            button.style.borderRadius = "5vw";
            break;
        case 2:
            button1.style.border = "2px solid #FFFFFF";
            button1.style.borderRadius = "5vw";
            break;
        case 3:
            button2.style.border = "2px solid #FFFFFF";
            button2.style.borderRadius = "5vw";
            break;
        case 4:
            button3.style.border = "2px solid #FFFFFF";
            button3.style.borderRadius = "5vw";
            break;
    }
}

var particles;

function Go(i) {
    index = i - 1;
    activityNo = i
    current_program = programsArray[0];
    if (firstTime) {
        firstTime = false;
        if (document.body.requestFullscreen) {
            document.body.requestFullscreen();
        } else if (document.body.msRequestFullscreen) {
            document.body.msRequestFullscreen();
        } else if (document.body.mozRequestFullScreen) {
            document.body.mozRequestFullScreen();
        } else if (document.body.webkitRequestFullscreen) {
            document.body.webkitRequestFullscreen();
        }
    }

    //   startAudio();
    hideMenu();
    try {
        tsParticles.destroy();
    } catch (e) { }
    if (setNo == 1)
        GoSet1(i);
    else if (setNo == 2)
        GoSet2(i);
    else if (setNo == 3)
        GoSet3(i);
    else
        GoSet4(i);
    particles = tsParticles.domItem(0);
}

function slideTo(el, left) {
    var steps = 10;
    var timer = 25;
    var elLeft = parseInt(el.style.left) || 0;
    var diff = left - elLeft;
    var stepSize = diff / steps;
    console.log(stepSize, ", ", steps);

    function step() {
        elLeft += stepSize;
        el.style.left = elLeft + "vw";
        if (--steps) {
            setTimeout(step, timer);
        }
    }
    step();
}

StoreValue = function (key, value) {
    if (window.localStorage) {
        window.localStorage.setItem(key, value);
    }
};

RetrieveValue = function (key, defaultValue) {
    var got;
    try {
        if (window.localStorage) {
            got = window.localStorage.getItem(key);
            if (got == 0) {
                return got;
            }
            if (got == "") {
                return got;
            }
            if (got) {
                return got;
            }
            return defaultValue;
        }
        return defaultValue;
    } catch (e) {
        return defaultValue;
    }
};


var c = document.getElementById("body");

function camStart() {
    contn = document.getElementById("container");
    prticles = document.querySelector('particles');
    crosshairs = document.querySelector('crosshairs');
    crosshairs.hidden = true;
    splash = document.querySelector('splash');
    button = document.querySelector('button');
    button1 = document.querySelector('button1');
    button2 = document.querySelector('button2');
    button3 = document.querySelector('button3');
    button4 = document.querySelector('button4');
    button5 = document.querySelector('button5');
    button6 = document.querySelector('button6');
    button7 = document.querySelector('button7');
    ibutton = document.querySelector('ibutton');
    ibutton1 = document.querySelector('ibutton1');
    ibuttonl = document.querySelector('ibuttonl');
    ibuttonr = document.querySelector('ibuttonr');
    webcam = document.createElement('canvas'); //getElementById('webcam');
    keyState1 = 0;
    keyState2 = 0;
    keyState3 = 0;
    keyState4 = 0;
    ts = document.querySelector('#tsparticles');


    webGLStart();

    document.onkeydown = MonitorKeyDown;
    document.onkeyup = MonitorKeyUp;

    canvas.onmousedown = MonitorMouseDown;
    canvas.onmouseup = MonitorMouseUp;
    /*   canvas.onmousemove = function (e) {
           e = e || window.event;
           if (mouseState == 1) {
               mouseX = (mouseX + 7.0 * e.clientX / canvas.scrollWidth) / 8.0;
               mouseY = (mouseY + 7.0 * (1.0 - e.clientY / canvas.scrollHeight)) / 8.0;
           }
       } */
    ts.onmousemove = function (e) {
        e = e || window.event;
        if (mouseState == 1) {
            mouseX = (mouseX + 7.0 * e.clientX / canvas.scrollWidth) / 8.0;
            mouseY = (mouseY + 7.0 * (1.0 - e.clientY / canvas.scrollHeight)) / 8.0;
        }
        crosshairs.style.left = e.clientX - crosshairs.offsetWidth / 2 + "px";
        crosshairs.style.top = e.clientY - crosshairs.offsetHeight / 2 + "px";
    }
    canvas.ontouchstart = function (e) {
        e.preventDefault();
        toggleButtons();
        var touchs = e.changedTouches;
        mouseX = touchs[0].clientX / canvas.scrollWidth;
        mouseY = 1.0 - touchs[0].clientY / canvas.scrollHeight;
        c.style.filter = "sepia(1) hue-rotate(230deg) saturate(2)";
    };
    canvas.ontouchend = function (e) {

        e.preventDefault();
        c.style.filter = "grayscale(0)";
    };
    canvas.ontouchmove = function (e) {
        e.preventDefault();
        var touches = e.changedTouches;
        mouseX = touches[0].clientX / canvas.scrollWidth; //] (mouseX + 7.0*touches/canvas.scrollWidth)/8.0;
        mouseY = 1.0 - touches[0].clientY / canvas.scrollHeight; //(mouseY + 7.0*(1.0 - e.clientY/canvas.scrollHeight))/8.0;
    };
    ibutton.onmousedown = function (e) {
        Action(4);
    }

    ibutton1.onmousedown = function (e) {
        Action(3);
    }
    ibuttonl.onmousedown = function (e) {
        showMenu(); //Action(5);
    }
    ibuttonr.onmousedown = function (e) {
        Action(6);
    }

    button.onmousedown = function (e) {
        ChooseSet(1);
    }
    button1.onmousedown = function (e) {
        ChooseSet(2);
    }
    button2.onmousedown = function (e) {
        ChooseSet(3);
    }
    button3.onmousedown = function (e) {
        ChooseSet(4);
    }
    button4.onmousedown = function (e) {
        Go(1);
    }
    button5.onmousedown = function (e) {
        Go(2);
    }
    button6.onmousedown = function (e) {
        Go(3);
    }
    button7.onmousedown = function (e) {
        Go(4);
    }

    ibutton.ontouchstart = function (e) {
        e.preventDefault();
        Action(4);
    }

    ibutton1.ontouchstart = function (e) {
        e.preventDefault();
        Action(3);
    }
    ibuttonl.ontouchstart = function (e) {
        showMenu();
        //Action(5);
    }
    ibuttonr.ontouchstart = function (e) {
        e.preventDefault();
        Action(6);
    }

    button.ontouchstart = function (e) {
        ChooseSet(1);
    }
    button1.ontouchstart = function (e) {
        ChooseSet(2);
    }
    button2.ontouchstart = function (e) {
        ChooseSet(3);
    }
    button3.ontouchstart = function (e) {
        ChooseSet(4);
    }
    button4.ontouchstart = function (e) {
        Go(1);
    }
    button5.ontouchstart = function (e) {
        Go(2);
    }
    button6.ontouchstart = function (e) {
        Go(3);
    }
    button7.ontouchstart = function (e) {
        Go(4);
    }

    var point = {
        x: -10,
        y: 0
    };


    function MouseClick() {
        if (!inMenu) {
            var target = particles.interactivity.element;

            var evt = new MouseEvent("mouseup", {
                view: target,
                bubbles: true,
                cancelable: true,
                screenX: 200,
                screenY: 200,
                x: point.x,
                y: point.y,
            }); //new MouseEvent("click");
            target.dispatchEvent(evt);
        }
    }

    /*   function MoveMouse(xm, ym) {
        var target = particles.interactivity.element;
        var xy = {
            x: this.x,
            y: this.y
        };
        try {
            var pos = particles.interactivity.mouse;
            if (pos.position == undefined) {
                xy.x = target.innerWidth / 2;
                xy.y = target.innerHeight / 2;
                //          particles.interactivity.mouse.position = xy;
            }
            if (point.x < 0) {
                point.x = target.innerWidth / 2;
                point.y = target.innerHeight / 2;
            }
            xy.x = point.x + xm;
            xy.y = point.y + ym;
            if (xy.x < 10)
                xy.x = 10;
            if (xy.y < 10)
                xy.y = 10;
            if (xy.x >= target.innerWidth - 10)
                xy.x = target.innerWidth - 10;
            if (xy.y >= target.innerHeight - 10)
                xy.y = target.innerHeight - 10;
            //pos.position.x = xy.x;
            //pos.position.y = xy.y;
            point.x = xy.x;
            point.y = xy.y;
            console.log('MoveTo: ', point.x, point.y);
            moved = false;

            var moveType = "mousemove";
            var tmp = 1;
            //    point.x = posX;
            //  point.y = posY;
            var moveEvent = new MouseEvent(moveType, {
                view: target,
                bubbles: true,
                cancelable: true,
                clientX: point.x,
                clientY: point.y
                // you can pass any other needed properties here
            });
            target.dispatchEvent(moveEvent);


        } catch (e) {}
    }
*/
    function MouseClick() {
        if (!inMenu) {
            var target = particles.interactivity.element;
            var evt = new MouseEvent("mouseup", {
                view: target,
                bubbles: true,
                cancelable: true,
                screenX: 200,
                screenY: 200,
                x: point.x,
                y: point.y,
            }); //new MouseEvent("click");
            target.dispatchEvent(evt);
        }
    }

    function MoveMouse(xm, ym) {
        var target = particles.interactivity.element;
        var xy = {
            x: this.x,
            y: this.y
        };
        crosshairs.hidden = false;
        try {
            var pos = particles.interactivity.mouse;
            if (pos.position == undefined) {
                xy.x = target.innerWidth / 2;
                xy.y = target.innerHeight / 2;
                //          particles.interactivity.mouse.position = xy;
            }
            if (point.x < 0) {
                point.x = target.innerWidth / 2;
                point.y = target.innerHeight / 2;
            }
            xy.x = point.x + xm;
            xy.y = point.y + ym;
            if (xy.x < 10)
                xy.x = 10;
            if (xy.y < 10)
                xy.y = 10;
            if (xy.x >= target.innerWidth - 10)
                xy.x = target.innerWidth - 10;
            if (xy.y >= target.innerHeight - 10)
                xy.y = target.innerHeight - 10;
            //pos.position.x = xy.x;
            //pos.position.y = xy.y;
            point.x = xy.x;
            point.y = xy.y;
            console.log('MoveTo: ', point.x, point.y);
            crosshairs.style.left = point.x - crosshairs.offsetWidth / 2 + "px";
            crosshairs.style.top = point.y - crosshairs.offsetHeight / 2 + "px";
            var moveType = "mousemove";
            var tmp = 1;
            var moveEvent = new MouseEvent(moveType, {
                view: target,
                bubbles: true,
                cancelable: true,
                clientX: point.x,
                clientY: point.y
                // you can pass any other needed properties here
            });
            target.dispatchEvent(moveEvent);


        } catch (e) { }
    }

    function JoystickMoveTo(jy, jx) {
        if (Math.abs(jx) < .1 && Math.abs(jy) < .1) {
            try {
                if (gpad.getButton(14).value > 0) // dpad left
                    MoveMouse(-10, 0);
                if (gpad.getButton(12).value > 0) // dup
                    MoveMouse(0, -7);
                if (gpad.getButton(13).value > 0) // ddown
                    MoveMouse(0, 7);
                if (gpad.getButton(15).value > 0) // dright
                    MoveMouse(10, 0);
            } catch (e) { }
            return;
        }
        MoveMouse(jx * 10, jy * 7);

    }

    function showPressedButton(index) {
        console.log("Press: ", index);
        if (inMenu) {
            switch (index) {
                case 0: // A

                case 1: // B
                case 2: // X
                case 3: // Y
                    if (menuItem < 4)
                        ChooseSet(menuItem + 1)
                    else
                        Go(menuItem - 3);
                    break;
                case 12: // dup
                    if (menuItem > 3)
                        menuItem -= 4;
                    Highlight();
                    break;
                case 13: // ddown
                    if (menuItem < 4)
                        menuItem += 4;
                    Highlight();
                    break;
                case 14: // dleft
                    if (menuItem > 0)
                        menuItem--;
                    Highlight();
                    break;
                case 15: // dright
                    if (menuItem < 7)
                        menuItem++;
                    Highlight();
                    break;
            }
            console.log("Menu: ", menuItem);
        } else switch (index) {
            case 0: // A
                MouseClick();
                break;
            case 6:
            case 7:
            case 11:
            case 16:
                Action(3);
                break;
            case 3: // Y
                Action(4);
                break;
            case 2: // X
                Action(7);
                break;
            case 4: // LT
                Action(5);
                break;
            case 1: // B
            case 5: // RT
                Action(6);
                break;
            case 10: // LeftTriggerPress
                showMenu();
            case 9://List
                break;
            case 8: // View Button new 20/6/20
                toggleButtons(); // new 20/6/20
                break; // new 20/6/20
            default:
        }
    }

    function removePressedButton(index) {
        console.log("Releasd: ", index);
    }

    function moveJoystick(values, isLeft) {
        if (!inMenu)
            JoystickMoveTo(values[1], values[0]);
    }

    var gpad;

    function getAxes() {
        //       console.log('Axis', gpad.getAxis(0), gpad.getAxis(1), gpad.getButton(14).value);

        if (!inMenu)
            JoystickMoveTo(gpad.getAxis(1), gpad.getAxis(0));
        setTimeout(function () {
            getAxes();
        }, 50);
    }

    gamepads.addEventListener('connect', e => {
        console.log('Gamepad connected:');
        console.log(e.gamepad);
        ChooseSet(1)
        Highlight()
        gpad = e.gamepad;
        e.gamepad.addEventListener('buttonpress', e => showPressedButton(e.index));
        e.gamepad.addEventListener('buttonrelease', e => removePressedButton(e.index));
        //       e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, true),
        //            StandardMapping.Axis.JOYSTICK_LEFT);
        //        e.gamepad.addEventListener('joystickmove', e => moveJoystick(e.values, false),
        //            StandardMapping.Axis.JOYSTICK_RIGHT);
        setTimeout(function () {
            getAxes();
        }, 50);
    });

    gamepads.addEventListener('disconnect', e => {
        console.log('Gamepad disconnected:');
        console.log(e.gamepad);
    });

    gamepads.start();

    ChooseSet(1);

}
//© 2020 Sensory App House Ltd www.sensoryapphouse.com