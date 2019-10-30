var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: false,
    typeSpeed: 100,
    onComplete: function () {
        $(".typed-cursor").hide();
    }
});

typewriter.typeString("<h1>hi, i'm <strong>jonathan")
    .pauseFor(500)
    .typeString("<h2>welcome to yet another personal website project you find online")
    .pauseFor(2500)
    .start();