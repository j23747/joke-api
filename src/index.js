
document.addEventListener("click", function(event) {
    // button clikcked
    if (!event.target.matches("#getJoke")) return;

// data from the API
    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => console.log(data));

}); 

function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;

}
