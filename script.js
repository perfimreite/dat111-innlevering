const newsletterForm = document.querySelector("#newsletter-form");

const subscribers = [];

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    subscribers.push({ name: name, email: email });
    alert("Gratulerar! Du abonnerar nå på vårt nyheitsbrev.");
});
