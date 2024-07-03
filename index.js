

// document.addEventListener("DOMContentLoaded", function() {
//     const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
//     const currentDay = document.querySelector('[data-testid="currentDay"]');

//     function updateTimeAndDate() {
//         const now = new Date();
//         currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
//         currentDay.textContent = now.toUTCString().split(' ')[0];
//     }

//     updateTimeAndDate();
//     setInterval(updateTimeAndDate, 1000);
// });


document.addEventListener("DOMContentLoaded", function() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    function updateTimeAndDate() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString().split(' ')[4];
        currentDay.textContent = now.toUTCString().split(' ')[0];
    }

    updateTimeAndDate();
    setInterval(updateTimeAndDate, 1000);

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
