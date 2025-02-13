document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("content").classList.add("hidden");

    // Smooth scrolling effect
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Function to create and animate floating hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerHTML = "💛"; // Customize heart symbol

        // Randomize heart position and animation duration
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${10 + Math.random() * 5}s`;

        document.body.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener("animationend", () => heart.remove());
    }

    // Generate floating hearts at intervals
    setInterval(createHeart, 1500);

    // Highlight active section in navbar
    window.addEventListener("scroll", function () {
        let sections = document.querySelectorAll("section");
        let navLinks = document.querySelectorAll("nav ul li a");

        sections.forEach((section, i) => {
            let top = section.offsetTop - 80;
            let bottom = top + section.offsetHeight;
            if (window.scrollY >= top && window.scrollY <= bottom) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[i].classList.add("active");
            }
        });
    });

    // Click effect - Small popping hearts
    document.addEventListener("click", function (event) {
        const heart = document.createElement("div");
        heart.classList.add("heart-pop");
        heart.innerHTML = "❤️";

        heart.style.left = `${event.clientX}px`;
        heart.style.top = `${event.clientY}px`;

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 600);
    });
});

// Unlock site with passcode
function unlockSite() {
    const passcode = document.getElementById("passcode").value;
    if (passcode === "11062022") {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").textContent = "Oops! Wrong passcode. Try again! 💛";
    }
}

// Generate a random love note
function generateLoveNote() {
    const notes = [
        "I love you because you make me laugh every day! 😊",
        "You're the most beautiful person inside and out. 💛",
        "I love how you always support me in everything. 💖",
        "Your hugs feel like home. 🤗",
        "You are my Hunbyy. 💍",
        "my first in everything. ",
        "You make my heart smile every day. 💛",
        "Your love is my favorite adventure. 🌎",
        "I love how you make ordinary moments magical. ✨",
        "You're my safe place, my happiness, my everything. 💕",
        "i love you my ART!!!!",
        "God knows how much i love you"
    ];
    document.getElementById("love-note-text").textContent = notes[Math.floor(Math.random() * notes.length)];
}



// Toggle side menu
function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.style.left = sideMenu.style.left === "0px" ? "-250px" : "0px";
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("content").classList.add("hidden");

    // Unlock Site
    function unlockSite() {
        const passcode = document.getElementById("passcode").value;
        if (passcode === "11062022") {
            document.getElementById("lock-screen").style.display = "none";
            document.getElementById("content").classList.remove("hidden");

            // Floating Hearts Effect
            for (let i = 0; i < 10; i++) {
                let heart = document.createElement("div");
                heart.classList.add("floating-heart");
                heart.innerHTML = "💛";
                heart.style.left = Math.random() * 100 + "vw";
                heart.style.animationDuration = Math.random() * 2 + 3 + "s";
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }
        } else {
            document.getElementById("error-message").innerText = "Oops! Try again. 💛";
            document.getElementById("passcode").classList.add("shake");
            setTimeout(() => document.getElementById("passcode").classList.remove("shake"), 300);
        }
    }

    // Smooth Scrolling for Menu
    document.querySelectorAll("#side-menu ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Lightbox Effect for Gallery
    document.querySelectorAll(".photo-grid img").forEach(img => {
        img.addEventListener("click", function () {
            let lightbox = document.createElement("div");
            lightbox.id = "lightbox";
            document.body.appendChild(lightbox);

            let imgClone = document.createElement("img");
            imgClone.src = this.src;
            imgClone.classList.add("lightbox-img");
            lightbox.appendChild(imgClone);

            lightbox.addEventListener("click", function () {
                lightbox.remove();
            });
        });
    });

   
        // Heart Pop Effect
        let heart = document.createElement("div");
        heart.classList.add("heart-pop");
        heart.innerHTML = "💛";
        noteText.appendChild(heart);

        setTimeout(() => heart.remove(), 600);
 
 

    window.unlockSite = unlockSite;
    window.generateLoveNote = generateLoveNote;
});
document.addEventListener("DOMContentLoaded", function () {
    const openQuizBtn = document.getElementById("openQuiz");
    const quizModal = document.getElementById("quizModal");
    const closeQuizBtn = document.querySelector(".close");
    const quizForm = document.getElementById("loveQuiz");
    const quizResult = document.getElementById("quizResult");
    const videoSurprise = document.getElementById("videoSurprise");
    const loveVideo = document.getElementById("loveVideo");

    // Open Love Quiz Modal
    openQuizBtn.addEventListener("click", function () {
        quizModal.style.display = "block";
    });

    // Close Modal
    closeQuizBtn.addEventListener("click", function () {
        quizModal.style.display = "none";
        quizResult.innerHTML = "";
        quizForm.reset();
        videoSurprise.classList.add("hidden"); // Hide video when closing
        loveVideo.pause();
        loveVideo.currentTime = 0; // Reset video
    });

    // Handle Quiz Submission
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let score = 0;
        let answers = quizForm.elements;

        if (answers.q1.value === "correct") score++;
        if (answers.q2.value === "correct") score++;
        if (answers.q3.value === "correct") score++;

        quizResult.innerHTML = `<p>You got ${score}/3 right!</p>`;

        if (score === 3) {
            quizResult.innerHTML += `<p>🎉 Perfect! You know me so well! 💕</p>`;
            startSurprise();
        } else {
            quizResult.innerHTML += `<p>So close! Try again? 😊</p>`;
            videoSurprise.classList.add("hidden"); // Hide video if incorrect
            loveVideo.pause();
            loveVideo.currentTime = 0; // Reset video
        }
    });

    // Surprise Effect - Show Video & Play It
    function startSurprise() {
        videoSurprise.classList.remove("hidden"); // Show video
        loveVideo.play(); // Autoplay video
    }
});
function revealSurprise() {
    let box = document.querySelector(".gift-box");
    let message = document.getElementById("surprise-message");
    let audio = document.getElementById("voiceMessage");

    // Play voice message
    audio.play();

    // Show a cute message
    message.innerText = "Happy Valentine's, my Hun! 💛";

    // Make the gift box bounce and open
    box.classList.add("open");

    // Generate floating hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.innerText = "💛";
        heart.classList.add("hearts");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${1 + Math.random()}s`;
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }
}