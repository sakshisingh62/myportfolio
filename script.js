function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("showMenu");
}

function toggleCard(card) {
    const desc = card.querySelector(".edu-desc");

    if (desc.style.height && desc.style.height !== "0px") {
        desc.style.height = "0px";  // collapse
    } else {
        desc.style.height = desc.scrollHeight + "px";  // expand
    }
}

// CONTACT FORM SUBMISSION HANDLING
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector("button[type='submit']");
        const originalText = submitButton.textContent;
        
        // Show loading state
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        } catch (error) {
            alert("Error sending message. Please try again later.");
            console.error("Form submission error:", error);
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}


