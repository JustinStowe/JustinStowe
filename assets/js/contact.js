const form = document.querySelector("form");
const feedback = document.getElementById("form-feedback");

function showFeedback(message, isSuccess) {
  feedback.textContent = message;
  feedback.className = "mb-3 alert " + (isSuccess ? "alert-success" : "alert-danger");
  feedback.style.display = "block";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name-2").value;
  const email = document.querySelector("#email-2").value;
  const message = document.querySelector("#message-2").value;

  sendEmail(name, email, message);
});

function sendEmail(name, email, message) {
  fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: "service_yq45tvo",
      template_id: "template_whu32ad",
      user_id: "Vh-UnyrSNHmS8syZ3",
      template_params: {
        from_name: name,
        from_email: email,
        message: message,
      },
    }),
  })
    .then((response) => {
      showFeedback("Message sent! I will get back to you soon.", true);
      form.reset();
    })
    .catch((error) => {
      showFeedback("Something went wrong. Please try again or reach out via LinkedIn.", false);
    });
}
