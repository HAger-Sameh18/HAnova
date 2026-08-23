const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.textContent = "☀️";

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.textContent = "🌙";
        } else {
            themeBtn.textContent = "☀️";
        }

    });

}

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", function () {
    const scrollTop = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";
});

const welcomeMessage = document.getElementById("welcomeMessage");

setTimeout(function () {
    welcomeMessage.style.opacity = "0";

    setTimeout(function () {
        welcomeMessage.remove();
    }, 500);

}, 3000);

function completeLesson(event, nextPage, lessonNumber) {
    event.preventDefault();

    const messages = [
        "🎉 Great Job! You completed Lesson 1!",
        "👏 Excellent! You completed Lesson 2!",
        "🚀 Amazing! You finished Lesson 3!",
        "✨ Wonderful! Lesson 4 is completed!",
        "🔥 Awesome! You completed Lesson 5!",
        "💜 Great Work! You finished Lesson 6!",
        "🌟 Excellent Work! Lesson 7 is completed!",
        "🎯 Nice Job! You completed Lesson 8!",
        "💫 Amazing Work! Lesson 9 is completed!",
        "🏆 Fantastic! You completed Lesson 10!"
    ];

    const messageBox = document.createElement("div");
    messageBox.id = "completeMessage";

    messageBox.innerHTML = `
        <h2>${messages[lessonNumber - 1]}</h2>
        <p>Ready for the next lesson? 🚀</p>
    `;

    document.body.appendChild(messageBox);

    setTimeout(function () {
        window.location.href = nextPage;
    }, 1800);
}

function completeHTML(event, nextPage) {
    event.preventDefault();

    const messageBox = document.createElement("div");
    messageBox.id = "completeMessage";

    messageBox.innerHTML = `
        <h2>🎉 Congratulations!</h2>
        <p>You have completed all HTML lessons! 💜</p>
        <p>Now you are ready to continue your Front-End journey! 🚀</p>
    `;

    document.body.appendChild(messageBox);

    setTimeout(function () {
        window.location.href = nextPage;
    }, 2500);
}

function completeJavaScript(event, nextPage) {
    event.preventDefault();

    const messageBox = document.createElement("div");
    messageBox.id = "completeMessage";

    messageBox.innerHTML = `
        <h2>🎉 Congratulations!</h2>
        <p>You have completed all JavaScript lessons! 💜</p>
        <p>You are now ready to build interactive web pages! 🚀</p>
    `;

    document.body.appendChild(messageBox);

    setTimeout(function () {
        window.location.href = nextPage;
    }, 2500);
}

function completeCSS(event, nextPage) {
    event.preventDefault();

    const messageBox = document.createElement("div");
    messageBox.id = "completeMessage";

    messageBox.innerHTML = `
        <h2>🎉 Congratulations!</h2>
        <p>You have completed all CSS lessons! 💜</p>
        <p>You are now ready to create beautiful and responsive websites! 🚀</p>
    `;

    document.body.appendChild(messageBox);

    setTimeout(function () {
        window.location.href = nextPage;
    }, 2500);
}

function completeFrontEnd(event, nextPage) {
    event.preventDefault();

    const messageBox = document.createElement("div");
    messageBox.id = "completeMessage";

    messageBox.innerHTML = `
        <h2>🏆 Congratulations!</h2>
        <p>You have completed the Front-End Development course! 💜</p>
        <p>You learned HTML, CSS and JavaScript! 🚀</p>
        <p>Keep Learning, Keep Building, Keep Improving! ✨</p>
    `;

    document.body.appendChild(messageBox);

    setTimeout(function () {
        window.location.href = nextPage;
    }, 2500);
}