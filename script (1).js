function handleResponse(answer) {
  let result = document.getElementById("result");

  if (answer === "fine") {
    result.innerText = "congratulations🥳";
  } else {
    result.innerText ="😭"
  }
}
