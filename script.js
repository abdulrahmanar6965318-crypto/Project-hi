function handleResponse(answer) {
  let result = document.getElementById("result");

  if (answer === "yes fine") {
    result.innerText = "congratulations 🥳";
  } else {
    result.innerText ="😭"
  }
}
