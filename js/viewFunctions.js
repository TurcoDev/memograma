export function disableInputs() {
  document.getElementById("input1").disabled = true;
  document.getElementById("input2").disabled = true;
  document.getElementById("button").disabled = true;
}

export function enableInputs() {
  document.getElementById("input1").disabled = false;
  document.getElementById("input2").disabled = false;
  document.getElementById("button").disabled = false;
}

export function showValues(data) {
  document.getElementById("console").innerHTML += `<p>${JSON.stringify(data)}</p>`
}

export function resetConsole() {
  document.getElementById("console").innerHTML = '';
}


export function startInput(main) {
  document.getElementById("button").addEventListener('click', main);
}