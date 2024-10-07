function birthdayCountdown() {
    const birthday = new Date("June 1, 2025 00:00");
    const now = new Date();
    const diff = birthday - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.DAYS').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.HOURS').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.MINUTES').textContent = displayMinute;
    
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.SECONDS').textContent = displaySecond;



    if (diff <= 0) {
        document.querySelector(".DAYS").textContent = 0;
        document.querySelector(".HOURS").textContent = 0;
        document.querySelector(".MINUTES").textContent = 0;
        document.querySelector(".SECONDS").textContent = 0;
        clearInterval(timerId);
        HappyBirthday()
    }
}




let timerId = setInterval(birthdayCountdown, 1000);



function HappyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "HAPPY BIRTHDAY!!!!!"
    heading.classList.add("red")
}

const button = document.querySelector("#MyButton");
button.addEventListener('click', function() {
    document.querySelector("#MyAudio").play();
})