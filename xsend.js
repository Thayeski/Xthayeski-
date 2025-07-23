document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelector('#forms');

    if (forms) {
        forms.addEventListener("submit", (e) => {
            e.preventDefault();

            const infossInput = document.getElementById("infoss");
            const infoss = infossInput.value;

         

            const my_text = `client message: ${infoss}`;
            const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`;

            const api = new XMLHttpRequest();
            api.open("GET", url, true);
            api.send();
            api.onerror = function(error) {
                console.error("Error sending message:", error);
            };
         
            api.onreadystatechange = function() {
                if (api.readyState === 4) {
                    if (api.status === 200) {
                        console.log("Message sent successfully:", JSON.parse(api.responseText));
                    } else {
                        console.error("Error sending message:", api.status, api.responseText);
                    }
                }
            };

            infossInput.value = ""; // Clear the input field
            console.log("Message sent:", infoss);
        });
    } else {
        console.error("Form element not found!");
    }
});
