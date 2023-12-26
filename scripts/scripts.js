const myFunction = () => {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

const mediaQuery = window.matchMedia("(max-width: 600px)");
const handleMediaChange = (event) => {
  if (event.matches) {
    myFunction();
    myFunction();
  } else {
  }
};

mediaQuery.addListener(handleMediaChange);
handleMediaChange(mediaQuery);
