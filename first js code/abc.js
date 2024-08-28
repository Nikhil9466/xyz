let a;

document.getElementById("as").onclick = function() {
    a = document.getElementById("textbox").value;
    document.getElementById("h1").textContent = `Hello ${a}`;
}