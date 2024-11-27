var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Menos  es más')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong> es aburrido</strong>')
    .pauseFor(2500)
    .start();