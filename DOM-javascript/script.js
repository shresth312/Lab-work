const button = document.getElementById("btn");
const typeSelect = document.getElementById("typeSelect");
const card = document.getElementById("card");
const message = document.getElementById("message");

async function fetchActivity() {
    try {
        message.textContent = "Loading...";
        card.style.display = "none";

        let type = typeSelect.value;
        let url = "https://www.boredapi.com/api/activity";

        if (type) {
            url += `?type=${type}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (!data.activity) {
            throw new Error("No activity found");
        }

        document.getElementById("activity").textContent = data.activity;
        document.getElementById("type").textContent = data.type;
        document.getElementById("participants").textContent = data.participants;

        card.style.display = "block";
        message.textContent = "";
    } 
    catch (error) {
        message.textContent = "Oops! Something went wrong. Try again.";
    }
}

button.addEventListener("click", fetchActivity);
window.addEventListener("load", fetchActivity);
