const BASE_URL = "http://127.0.0.1:5000";
 
function sendData() {
    const name = document.getElementById("nameInput").value;
 
    fetch(`${BASE_URL}/greet`, {
        method: "POST",                          // IMPORTANT
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: name })     // sending data
    })    
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText = data.message;
    });
    
}
function clearData() {
  // clear input field
  document.getElementById("nameInput").value = "";

  // clear result text
  document.getElementById("result").innerText = "";
}