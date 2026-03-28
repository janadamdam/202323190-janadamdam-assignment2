window.onload = function () {
    window.scrollTo(0, 0);
};

const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning!";
} else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
} else {
    greeting.textContent = "Good Evening!";
}

const overlay = document.getElementById("welcomeOverlay");
const greetBtn = document.getElementById("greetBtn");
const visitorNameInput = document.getElementById("visitorName");
const overlayError = document.getElementById("overlayError");

if (greetBtn && overlay && visitorNameInput && overlayError && greeting) {
    greetBtn.addEventListener("click", function () {
        const visitorName = visitorNameInput.value.trim();

        if (visitorName === "") {
            overlayError.textContent = "Please enter your name before continuing.";
            return;
        }

        greeting.textContent = "Welcome, " + visitorName + "!";
        overlay.classList.add("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const modeButtons = document.querySelectorAll(".mode-btn");
const projectCards = document.querySelectorAll(".project-card");
const modeDescription = document.getElementById("modeDescription");
const emptyMessage = document.getElementById("emptyMessage");


if (modeButtons.length > 0 && projectCards.length > 0 && modeDescription && emptyMessage) {
    modeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedMode = button.dataset.mode;
            let visibleCount = 0;

            modeButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            updateModeVisuals("all");

            projectCards.forEach(card => {
                if (
                    selectedMode === "all" ||
                    card.classList.contains(selectedMode)
                ) {
                    card.style.display = "block";
                    visibleCount++;
                } else {
                    card.style.display = "none";
                }
            });

            if (selectedMode === "all") {
                modeDescription.textContent = "Viewing all projects from both my professional and creative interests.";
            } else if (selectedMode === "professional") {
                modeDescription.textContent = "Viewing projects that reflect my academic and professional interests.";
            } else if (selectedMode === "creative") {
                modeDescription.textContent = "Viewing projects that reflect my creative interests and hobbies.";
            }

            if (visibleCount === 0) {
                emptyMessage.textContent = "No projects found in this view.";
            } else {
                emptyMessage.textContent = "";
            }
            updateModeVisuals(selectedMode);
            revealCreativeShots();
            zoomLaptopFrames();
        });
    });
}

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button, index) => {
    const projectCard = button.closest(".project-card");
    const storageKey = "favoriteProject" + index;

    if (localStorage.getItem(storageKey) === "true") {
        projectCard.classList.add("favorited");
        button.textContent = "❤️";
    }

    button.addEventListener("click", function () {
        const isFavorited = projectCard.classList.toggle("favorited");

        if (isFavorited) {
            button.textContent = "❤️";
            localStorage.setItem(storageKey, "true");
        } else {
            button.textContent = "🤍";
            localStorage.setItem(storageKey, "false");
        }
    });
});

const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const formMessage = document.getElementById("formMessage");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm && nameInput && emailInput && messageInput && nameError && emailError && messageError && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        formMessage.textContent = "";

        let isValid = true;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            isValid = false;
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message should be at least 10 characters long.";
            isValid = false;
        }

        if (isValid) {
            formMessage.textContent = "Your message has been submitted successfully.";
            contactForm.reset();
        }
    });
} else {
    console.log("Form validation elements not found.");
}

function updateModeVisuals(selectedMode) {
    const mixedCard = document.querySelector(".project-card.professional.creative");

    if (!mixedCard) return;

    const professionalView = mixedCard.querySelector(".professional-view");
    const creativeView = mixedCard.querySelector(".creative-view");

    if (!professionalView || !creativeView) return;

    if (selectedMode === "professional") {
        professionalView.style.display = "block";
        creativeView.style.display = "none";
    } else if (selectedMode === "creative") {
        professionalView.style.display = "none";
        creativeView.style.display = "block";
    } else {
        professionalView.style.display = "block";
        creativeView.style.display = "block";
    }
}

const revealElements = document.querySelectorAll(".reveal");

function handleScrollReveal() {
    revealElements.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

function revealCreativeShots() {
    const creativeShots = document.querySelectorAll(".creative-shot");

    creativeShots.forEach((shot, index) => {
        const rect = shot.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 40 && rect.bottom > 100;

        if (isVisible && !shot.classList.contains("show")) {
            setTimeout(() => {
                shot.classList.add("show");
            }, index * 220);
        }
    });
}

function zoomLaptopFrames() {
    const frames = document.querySelectorAll(".zoom-card");

    frames.forEach(frame => {
        const rect = frame.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
            frame.classList.add("zoomed");
        }
    });
}

window.addEventListener("scroll", function () {
    handleScrollReveal();
    revealCreativeShots();
    zoomLaptopFrames();
});

handleScrollReveal();
revealCreativeShots();
zoomLaptopFrames();

