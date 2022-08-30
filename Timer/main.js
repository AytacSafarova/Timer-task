let [milliseconds, second, minute,] = [0, 0, 0];
let timer = document.querySelector('#timer');
let startbtn=document.getElementById('start-button')
let stopbtn=document.getElementById('stop-button')
let resetbtn=document.getElementById('reset-button')
startbtn.addEventListener('click', start)
stopbtn.addEventListener('click', stop)
resetbtn.addEventListener('click', reset)


function start() {
    count = setInterval(main, 10);
    stopbtn.disabled = false;
    resetbtn.disabled=true;
    startbtn.setAttribute('disabled', true)
};
function stop() {
    clearInterval(count);
    stopbtn.disabled = true;
    resetbtn.disabled=false;
    startbtn.disabled=false;

}
function reset() {
    [milliseconds, second, minute] = [0, 0, 0];
    timer.innerHTML = '00 : 00 : 00';
}
function main() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        second++;
        if (second == 60) {
            second = 0;
            minute++;
            if (minute == 60) {
                minute = 0;
            }
        }
    }
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timer.innerHTML = ` ${m} : ${s} : ${ms}`;
}


