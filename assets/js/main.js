(function() {
  "use strict";

  function select(el, all = false) {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  }

  function updateImage() {
    const selectBox = document.getElementById("company-select");
    const selectedValue = selectBox.value;
    const image = document.getElementById("displayed-image");

    switch (selectedValue) {
      case "apple_m":
        image.src = "assets/img/Stocks/apple_m.png";
        break;
      case "microsoft_m":
        image.src = "assets/img/Stocks/msft_m.png";
        break;
      case "netflix_m":
        image.src = "assets/img/Stocks/nflx.png";
        break;
      case "google_m":
        image.src = "assets/img/Stocks/google_m.png";
        break;
      default:
        image.src = "";
        break;
    }
  }

  function updateVolatilityImage() {
    const selectBox = document.getElementById("volatility-select");
    const selectedValue = selectBox.value;
    const image = document.getElementById("volatility-image");

    switch (selectedValue) {
      case "apple_v":
        image.src = "assets/img/Stocks/apple_m.png";
        break;
      case "microsoft_v":
        image.src = "assets/img/Stocks/msft_m.png";
        break;
      case "netflix_v":
        image.src = "assets/img/Stocks/nflx.png";
      case "google_v":
        image.src = "assets/img/Stocks/google_m.png";
        break;
      default:
        image.src = "";
        break;
    }
  }

  window.onload = function() {
    // Initial function calls to update images on page load
    updateImage();
    updateVolatilityImage();

    // Add event listeners for dropdown changes
    document.getElementById("company-select").addEventListener("change", updateImage);
    document.getElementById("volatility-select").addEventListener("change", updateVolatilityImage);
  };
})();
