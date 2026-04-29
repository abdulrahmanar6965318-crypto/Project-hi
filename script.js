function handleResponse(answer) {
  let result = document.getElementById("result");

  if (answer === "yes fine") {
    result.innerText = "Congratulations 🥳🎉";
    result.style.color = "green";
  } else {
    result.innerText = "Why not fine? 😭";
    result.style.color = "red";
  }
}
