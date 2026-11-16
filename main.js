document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll("form[data-whatsapp]");

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const number = form.dataset.whatsapp.replace(/\D/g, "");
      const formData = new FormData(form);
      const message = [];

      message.push("SHIKSHAK CONSULTANCY - New Enquiry");
      message.push("");

      formData.forEach(function (value, key) {
        if (value.trim() !== "") {
          const field = form.querySelector('[name="' + key + '"]');
          const label = field
            ? form.querySelector('label[for="' + field.id + '"]')
            : null;

          message.push((label ? label.innerText : key) + ": " + value);
        }
      });

      const whatsappURL =
        "https://wa.me/" + number + "?text=" +
        encodeURIComponent(message.join("\n"));

      window.open(whatsappURL, "_blank");
    });
  });
});
