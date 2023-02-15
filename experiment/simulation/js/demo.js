var count = 0;
const obs = document.getElementById("observations");
const line1 = document.getElementById("line-1");
const line2 = document.getElementById("line-2");
const line3 = document.getElementById("line-3");
const line4 = document.getElementById("line-4");
const line5 = document.getElementById("line-5");
const line6 = document.getElementById("line-6");
const line7 = document.getElementById("line-7");
const line8 = document.getElementById("line-8");

const io1 = document.getElementById("io-1");
const io2 = document.getElementById("io-2");
const io3 = document.getElementById("io-3");
const io4 = document.getElementById("io-4");
const io5 = document.getElementById("io-5");
const io6 = document.getElementById("io-6");
const io7 = document.getElementById("io-7");
const io8 = document.getElementById("io-8");

const pm1 = document.getElementById("pm-1");
const pm2 = document.getElementById("pm-2");
const pm3 = document.getElementById("pm-3");
const pm4 = document.getElementById("pm-4");
const pm5 = document.getElementById("pm-5");
const pm6 = document.getElementById("pm-6");
const pm7 = document.getElementById("pm-7");
const pm8 = document.getElementById("pm-8");

const cross1 = document.getElementById("cross-1");
const cross2 = document.getElementById("cross-2");
const cross3 = document.getElementById("cross-3");
const cross4 = document.getElementById("cross-4");

const next1 = document.getElementById("next-1");
const next2 = document.getElementById("next-2");
const next3 = document.getElementById("next-3");
const next4 = document.getElementById("next-4");

function nextStage() {
    count++;

    if (count == 1) {
        line1.style.display = "block";
        line3.style.display = "block";

        io1.style.display = "block";
        io3.style.display = "block";

    }

    if (count == 2) {
        pm1.style.display = "block";
        pm2.style.display = "block";
    }

    if (count == 3) {
        cross1.style.display = "block";
    }

    if (count == 4) {
        io3.style.display = "none";

        line3.style.opacity = "0.1";

        cross1.style.display = "none";

        pm1.style.display = "none";
        pm2.style.display = "none";
        next1.innerHTML = "2";
    }

    if (count == 5) {
        line5.style.display = "block";
        line7.style.display = "block";

        io5.style.display = "block";
        io7.style.display = "block";
    }

    if (count == 6) {
        pm3.style.display = "block";
        pm4.style.display = "block";
    }

    if (count == 7) {
        cross2.style.display = "block";
    }

    if (count == 8) {
        io5.style.display = "none";

        line5.style.opacity = "0.1";        

        cross2.style.display = "none";

        pm3.style.display = "none";
        pm4.style.display = "none";
        next2.innerHTML = "3";
    }

    if (count == 9) {
        line2.style.display = "block";
        line4.style.display = "block";

        io2.style.display = "block";
        io4.style.display = "block";
    }

    if (count == 10) {
        pm5.style.display = "block";
        pm6.style.display = "block";
    }

    if (count == 11) {
        cross3.style.display = "block";
    }

    if (count == 12) {
        io4.style.display = "none";

        line4.style.opacity = "0.1"; 

        cross3.style.display = "none";

        pm5.style.display = "none";
        pm6.style.display = "none";
        next3.innerHTML = "2";
    }

    if (count == 13) {
        line6.style.display = "block";
        line8.style.display = "block";

        io6.style.display = "block";
        io8.style.display = "block";
    }

    if (count == 14) {
        pm7.style.display = "block";
        pm8.style.display = "block";
    }

    if (count == 15) {
        cross4.style.display = "block";
    }

    if (count == 16) {
        io8.style.display = "none";

        line8.style.opacity = "0.1";

        cross4.style.display = "none";

        pm7.style.display = "none";
        pm8.style.display = "none";
        next4.innerHTML = "2";

        obs.innerHTML="Simulation has been successfully completed."
        document.getElementById("next").setAttribute('disabled', true);
    }
}

function reset() {
    count = 0;
    obs.innerHTML = "Consider a 1-step time evolution in the trellis diagram with the following trellis metric and with received bitstream 10.";
    document.getElementById("next").removeAttribute('disabled');


    line1.style.display = "none";
    line2.style.display = "none";
    line3.style.display = "none";
    line4.style.display = "none";
    line5.style.display = "none";
    line6.style.display = "none";
    line7.style.display = "none";
    line8.style.display = "none";

    line3.style.opacity = "1";
    line4.style.opacity = "1";
    line5.style.opacity = "1";
    line8.style.opacity = "1";

    io1.style.display = "none";
    io2.style.display = "none";
    io3.style.display = "none";
    io4.style.display = "none";
    io5.style.display = "none";
    io6.style.display = "none";
    io7.style.display = "none";
    io8.style.display = "none";

    pm1.style.display = "none";
    pm2.style.display = "none";
    pm3.style.display = "none";
    pm4.style.display = "none";

    cross1.style.display = "none";
    cross2.style.display = "none";
    cross3.style.display = "none";
    cross4.style.display = "none";

    next1.style.innerHTML = "";
    next2.style.innerHTML = "";
    next3.style.innerHTML = "";
    next4.style.innerHTML = "";



}