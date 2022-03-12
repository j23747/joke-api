
document.addEventListener("click", function(event) {
    // button clikcked
    if (!event.target.matches("#getJoke")) return;


    fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => console.log(data));

}); 
