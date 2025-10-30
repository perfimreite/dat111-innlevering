const newsletterForm = document.querySelector("#newsletter-form");

const subscribers = [];

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const email = document.getElementById("email").value;

    subscribers.push({ name: name, phoneNumber: phoneNumber, email: email });
    alert("Gratulerar! Du abonnerar nå på vårt nyheitsbrev.");

    newsletterForm.reset();
});
