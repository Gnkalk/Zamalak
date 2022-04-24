const Chengebtn = document.getElementById("Chenge");
var TimeText;
let mode = 0;

ShowTime();
function ChengeMode() {
    ClearTime();
    mode++;
    if (mode % 2 == 0) {
        ShowTime();
    } else {
        Timer();
    }
}
function ShowTime() {
    TimeText = setInterval(Time, 1000); !globalThis.TimeText;
}
function Time() {
    const d = new Date();
    document.getElementById("Time").innerHTML = `<h3>${d.toLocaleTimeString('fa-IR')}</h3>
    <h6>${d.toLocaleDateString('fa-IR')}</h6>`;
}
Chengebtn.addEventListener("click", ChengeMode);
function Timer() {
    document.getElementById("Time").innerHTML = `
    <div d-flex><input type="number" id="timeInputS" placeholder="ثانیه">
    <input type="number" id="timeInputM" placeholder="دقیقه">
    <input type="number" id="timeInputH" placeholder="ساعت"></div>
    <button theme="outline" id="timeBtn" w-50>شروع</button>`;
    const timeBtn = document.getElementById("timeBtn");
    const timeInputS = document.getElementById("timeInputS");
    const timeInputM = document.getElementById("timeInputM");
    const timeInputH = document.getElementById("timeInputH");
    timeBtn.addEventListener("click", () => {
        let h = timeInputH.value;
        let m = timeInputM.value;
        let s = timeInputS.value;
        let Ftime = h * 3600 + m * 60 + s;
        const timer = setInterval(() => {
            Ftime--;
            let h = Math.floor(Ftime / 3600);
            let m = Math.floor((Ftime % 3600) / 60);
            let s = Ftime % 60;
            let Dh = Intl.NumberFormat('fa-IR').format(h);
            let Dm = Intl.NumberFormat('fa-IR').format(m);
            let Ds = Intl.NumberFormat('fa-IR').format(s);
            document.getElementById("Time").innerHTML = `<h3>${Dh}:${Dm}:${Ds}</h3>`;
            if (Ftime == 0) {
                clearInterval(timer);
                document.getElementById("Time").innerHTML = `<h3>پایان!</h3>`;
            }
        }, 1000);
    });
}
function ClearTime() {
    clearInterval(TimeText);
}