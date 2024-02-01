const semiCircles = document.querySelectorAll('.semicircle');

const hr = 0;
const min = 0;
const sec = 20;

const hours = hr * 360000;
const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = hours + minutes + seconds
const startTime = Date.now();
const futureTime = startTime + setTime

const TimmerLoop = setInterval(countDownTimer)
countDownTimer();

function countDownTimer() {
    const currentTime = Date.now();
    const remainTime = futureTime - currentTime
    const angle = (remainTime/setTime) * 360

    if(angle > 180) {
        semiCircles[2].style.display = 'none';
        semiCircles[0].transform = 'rotate(180deg)';
        semiCircles[1].transform = `rotate(${angle}deg)`;
    }
    else {
        semiCircles[2].style.display = 'block';
        semiCircles[0].transform = `rotate(${angle}deg)`;
        semiCircles[1].transform = `rotate(${angle}deg)`;
    }

    if(remainTime < 0){
        clearInterval(TimmerLoop)
        semiCircles[0].style.display = 'none';
        semiCircles[1].style.display = 'none';
        semiCircles[2].style.display = 'none';
    }
}