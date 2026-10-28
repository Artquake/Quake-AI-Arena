const gptr = document.getElementById("gptr");
const gmnr = document.getElementById("gmnr");
const gpt = document.getElementById("chatgpt");
const gmn = document.getElementById("gemini");
const aca = document.getElementById("aca");

gptr.addEventListener("click", function() {
    const message = gpt.value.trim();
    if (message === "") return;

    const bubble = document.createElement("div");
    bubble.textContent = message;
    bubble.className = "gptBubble";
    aca.appendChild(bubble);
    gpt.value = "";
});

gmnr.addEventListener("click", function() {
    const message = gmn.value.trim();
    if (message === "") return;

    const bubble = document.createElement("div");
    bubble.textContent = message;
    bubble.className = "gmnBubble";
    aca.appendChild(bubble);
    gmn.value = "";
});