function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = `<span>&#8220;</span>${recommendation.value}<span>&#8221;</span>`;

    // Add this element to the end of the list of recommendations
    document.querySelector(".all_recommendations").appendChild(element);

    // Reset the value of the textarea
    recommendation.value = "";

    // Show the thank you dialog
    showPopup(true);
  }
}

function showPopup(show) {
  const popup = document.getElementById("popup");
  if (show) {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}
