

document.addEventListener("click", function (event) {
    // Checking if the button was clicked
    if (!event.target.matches("#button")) return;


    // fetch data from the API
  
    fetch("<https://official-joke-api.appspot.com/random_joke>")
      .then((response) => response.json())
      .then((data) => renderJoke(data));
  });
  
  function renderJoke(data) {
    const setup = document.getElementById("setup");
    const punchline = document.getElementById("punchline");
    setup.innerHTML = data.setup;
    punchline.innerHTML = data.punchline;
  }

  