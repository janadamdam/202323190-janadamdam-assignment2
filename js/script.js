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
        });
    });
}

const favoriteButtons = document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach((button, index) => {
    const projectCard = button.closest(".project-card");
    const storageKey = "favoriteProject" + index;

    if (localStorage.getItem(storageKey) === "true") {
        projectCard.classList.add("favorited");
        button.textContent = "♥ Favorited";
    }

    button.addEventListener("click", function () {
        const isFavorited = projectCard.classList.toggle("favorited");

        if (isFavorited) {
            button.textContent = "♥ Favorited";
            localStorage.setItem(storageKey, "true");
        } else {
            button.textContent = "♡ Favorite";
            localStorage.setItem(storageKey, "false");
        }
    });
});