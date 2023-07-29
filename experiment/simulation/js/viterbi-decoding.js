var lines = document.querySelectorAll('*[id^="l"]');
const obs = document.getElementById("observations");

var toggleNumber1 = 0;
var toggleNumber2 = 0;
var toggleNumber3 = 0;
var toggleNumber4 = 0;
var toggleNumber5 = 0;

var toggleFlag = 0;
var currentStage = 0;

function toggle1(id) {
    lineid = document.getElementById(id);
    if (toggleFlag == 0) {

        if (toggleNumber1 == 0) {
            if (lineid.style.opacity == "1") {
                lineid.style.opacity = "0.1";
            }
            else {
                lineid.style.opacity = "1";
            }
        }
    }

    else if (toggleFlag == 1 && lineid.style.opacity != 0.1) {
        if (lineid.style.stroke == 'black') {
            lineid.setAttribute("stroke-width", 3);
            if (lineid.className.baseVal == "line1") {
                lineid.style.stroke = 'red';
            }
            else {
                lineid.style.stroke = 'blue';
            }
        }

        else {
            lineid.style.stroke = 'black';
            lineid.setAttribute("stroke-width", 5);
        }
    }

}

function toggle2(id) {
    lineid = document.getElementById(id);
    if (toggleFlag == 0) {

        if (toggleNumber2 == 0) {
            if (lineid.style.opacity == "1") {
                lineid.style.opacity = "0.1";
            }
            else {
                lineid.style.opacity = "1";
            }
        }
    }

    else if (toggleFlag == 1 && lineid.style.opacity != 0.1) {
        if (lineid.style.stroke == 'black') {
            lineid.setAttribute("stroke-width", 3);
            if (lineid.className.baseVal == "line1") {
                lineid.style.stroke = 'red';
            }
            else {
                lineid.style.stroke = 'blue';
            }
        }

        else {
            lineid.style.stroke = 'black';
            lineid.setAttribute("stroke-width", 5);
        }
    }
}

function toggle3(id) {
    lineid = document.getElementById(id);
    if (toggleFlag == 0) {

        if (toggleNumber3 == 0) {
            if (lineid.style.opacity == "1") {
                lineid.style.opacity = "0.1";
            }
            else {
                lineid.style.opacity = "1";
            }
        }
    }

    else if (toggleFlag == 1 && lineid.style.opacity != 0.1) {
        if (lineid.style.stroke == 'black') {
            lineid.setAttribute("stroke-width", 3);
            if (lineid.className.baseVal == "line1") {
                lineid.style.stroke = 'red';
            }
            else {
                lineid.style.stroke = 'blue';
            }
        }

        else {
            lineid.style.stroke = 'black';
            lineid.setAttribute("stroke-width", 5);
        }
    }
}

function toggle4(id) {
    lineid = document.getElementById(id);
    if (toggleFlag == 0) {

        if (toggleNumber4 == 0) {
            if (lineid.style.opacity == "1") {
                lineid.style.opacity = "0.1";
            }
            else {
                lineid.style.opacity = "1";
            }
        }
    }

    else if (toggleFlag == 1 && lineid.style.opacity != 0.1) {
        if (lineid.style.stroke == 'black') {
            lineid.setAttribute("stroke-width", 3);
            if (lineid.className.baseVal == "line1") {
                lineid.style.stroke = 'red';
            }
            else {
                lineid.style.stroke = 'blue';
            }
        }

        else {
            lineid.style.stroke = 'black';
            lineid.setAttribute("stroke-width", 5);
        }
    }
}

function toggle5(id) {
    lineid = document.getElementById(id);
    if (toggleFlag == 0) {

        if (toggleNumber5 == 0) {
            if (lineid.style.opacity == "1") {
                lineid.style.opacity = "0.1";
            }
            else {
                lineid.style.opacity = "1";
            }
        }
    }

    else if (toggleFlag == 1 && lineid.style.opacity != 0.1) {
        if (lineid.style.stroke == 'black') {
            lineid.setAttribute("stroke-width", 3);
            if (lineid.className.baseVal == "line1") {
                lineid.style.stroke = 'red';
            }
            else {
                lineid.style.stroke = 'blue';
            }
        }

        else {
            lineid.style.stroke = 'black';
            lineid.setAttribute("stroke-width", 5);
        }
    }
}

function check() {
    if (currentStage == 0) {
        const inp1 = document.getElementById("second-inp-1").value;
        const inp2 = document.getElementById("second-inp-2").value;
        const inp3 = document.getElementById("second-inp-3").value;
        const inp4 = document.getElementById("second-inp-4").value;

        const l1 = document.getElementById("l1");
        const l2 = document.getElementById("l2");
        const l3 = document.getElementById("l3");
        const l4 = document.getElementById("l4");
        const l5 = document.getElementById("l5");
        const l6 = document.getElementById("l6");
        const l7 = document.getElementById("l7");
        const l8 = document.getElementById("l8");
        let lineFlag = 0;

        if (l1.style.opacity == "1" && l2.style.opacity == "1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && ((l5.style.opacity == "0.1" && l7.style.opacity == "1") || (l5.style.opacity == "1" && l7.style.opacity == "0.1"))
            && ((l6.style.opacity == "0.1" && l8.style.opacity == "1") || (l6.style.opacity == "1" && l8.style.opacity == "0.1"))) {
            lineFlag = 1;
        }

        if (inp1.length == 0 || inp2.length == 0 || inp3.length == 0 || inp4.length == 0) {
            obs.style.color = "black";
            obs.innerHTML = "Enter all the bits.";
        }

        else if (l1.style.opacity == "0.1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            obs.style.color = "black";
            obs.innerHTML = "Select the paths with the least path metric.";
        }

        else if (inp1 == "0" && inp2 == "in" && inp3 == "2" && inp4 == "in" && lineFlag == "1") {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color = "green";

            //Disabling field inputs and toggling line opacity
            document.getElementById("second-inp-1").setAttribute('disabled', true);
            document.getElementById("second-inp-2").setAttribute('disabled', true);
            document.getElementById("second-inp-3").setAttribute('disabled', true);
            document.getElementById("second-inp-4").setAttribute('disabled', true);
            toggleNumber1 = 1;

            currentStage++;

            //Function to display third stage
            third();

        }

        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }

    else if (currentStage == 1) {
        const inp1 = document.getElementById("third-inp-1").value;
        const inp2 = document.getElementById("third-inp-2").value;
        const inp3 = document.getElementById("third-inp-3").value;
        const inp4 = document.getElementById("third-inp-4").value;

        const l1 = document.getElementById("l9");
        const l2 = document.getElementById("l10");
        const l3 = document.getElementById("l11");
        const l4 = document.getElementById("l12");
        const l5 = document.getElementById("l13");
        const l6 = document.getElementById("l14");
        const l7 = document.getElementById("l15");
        const l8 = document.getElementById("l16");
        let lineFlag = 0;

        if (l1.style.opacity == "1" && l2.style.opacity == "1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "1" && l6.style.opacity == "1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            lineFlag = 1;
        }

        if (inp1.length == 0 || inp2.length == 0 || inp3.length == 0 || inp4.length == 0) {
            obs.style.color = "black";
            obs.innerHTML = "Enter all the bits.";
        }

        else if (l1.style.opacity == "0.1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            obs.style.color = "black";
            obs.innerHTML = "Select the paths with the least path metric.";
        }

        else if (inp1 == "1" && inp2 == "2" && inp3 == "1" && inp4 == "4" && lineFlag == "1") {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color = "green";

            //Disabling field inputs and toggling line opacity
            document.getElementById("third-inp-1").setAttribute('disabled', true);
            document.getElementById("third-inp-2").setAttribute('disabled', true);
            document.getElementById("third-inp-3").setAttribute('disabled', true);
            document.getElementById("third-inp-4").setAttribute('disabled', true);
            toggleNumber2 = 1;

            currentStage++;

            //Function to display fourth stage
            fourth();
        }

        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }

    else if (currentStage == 2) {
        const inp1 = document.getElementById("fourth-inp-1").value;
        const inp2 = document.getElementById("fourth-inp-2").value;
        const inp3 = document.getElementById("fourth-inp-3").value;
        const inp4 = document.getElementById("fourth-inp-4").value;

        const l1 = document.getElementById("l17");
        const l2 = document.getElementById("l18");
        const l3 = document.getElementById("l19");
        const l4 = document.getElementById("l20");
        const l5 = document.getElementById("l21");
        const l6 = document.getElementById("l22");
        const l7 = document.getElementById("l23");
        const l8 = document.getElementById("l24");
        let lineFlag = 0;

        if (l1.style.opacity == "1" && l2.style.opacity == "1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "1" && l6.style.opacity == "1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            lineFlag = 1;
        }

        if (inp1.length == 0 || inp2.length == 0 || inp3.length == 0 || inp4.length == 0) {
            obs.style.color = "black";
            obs.innerHTML = "Enter all the bits.";
        }

        else if (l1.style.opacity == "0.1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            obs.style.color = "black";
            obs.innerHTML = "Select the paths with the least path metric.";
        }

        else if (inp1 == "2" && inp2 == "3" && inp3 == "2" && inp4 == "1" && lineFlag == "1") {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color = "green";

            //Disabling field inputs and toggling line opacity
            document.getElementById("fourth-inp-1").setAttribute('disabled', true);
            document.getElementById("fourth-inp-2").setAttribute('disabled', true);
            document.getElementById("fourth-inp-3").setAttribute('disabled', true);
            document.getElementById("fourth-inp-4").setAttribute('disabled', true);
            toggleNumber3 = 1;

            currentStage++;

            //Function to display fifth stage
            fifth();
        }

        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }

    else if (currentStage == 3) {
        const inp1 = document.getElementById("fifth-inp-1").value;
        const inp2 = document.getElementById("fifth-inp-2").value;
        const inp3 = document.getElementById("fifth-inp-3").value;
        const inp4 = document.getElementById("fifth-inp-4").value;

        const l1 = document.getElementById("l25");
        const l2 = document.getElementById("l26");
        const l3 = document.getElementById("l27");
        const l4 = document.getElementById("l28");
        const l5 = document.getElementById("l29");
        const l6 = document.getElementById("l30");
        const l7 = document.getElementById("l31");
        const l8 = document.getElementById("l32");
        let lineFlag = 0;

        if (l1.style.opacity == "1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "1" && l8.style.opacity == "1") {
            lineFlag = 1;
        }

        if (inp1.length == 0 || inp2.length == 0 || inp3.length == 0 || inp4.length == 0) {
            obs.style.color = "black";
            obs.innerHTML = "Enter all the bits.";
        }

        else if (l1.style.opacity == "0.1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            obs.style.color = "black";
            obs.innerHTML = "Select the paths with the least path metric.";
        }

        else if (inp1 == "2" && inp2 == "2" && inp3 == "3" && inp4 == "2" && lineFlag == "1") {
            obs.innerHTML = "<b>Correct Answer!!!</b>";
            obs.style.color = "green";

            //Disabling field inputs and toggling line opacity
            document.getElementById("fifth-inp-1").setAttribute('disabled', true);
            document.getElementById("fifth-inp-2").setAttribute('disabled', true);
            document.getElementById("fifth-inp-3").setAttribute('disabled', true);
            document.getElementById("fifth-inp-4").setAttribute('disabled', true);
            toggleNumber4 = 1;

            currentStage++;

            //Function to display sixth stage
            sixth();
        }

        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }

    else if (currentStage == 4) {
        const inp1 = document.getElementById("sixth-inp-1").value;
        const inp2 = document.getElementById("sixth-inp-2").value;
        const inp3 = document.getElementById("sixth-inp-3").value;
        const inp4 = document.getElementById("sixth-inp-4").value;

        const l1 = document.getElementById("l33");
        const l2 = document.getElementById("l34");
        const l3 = document.getElementById("l35");
        const l4 = document.getElementById("l36");
        const l5 = document.getElementById("l37");
        const l6 = document.getElementById("l38");
        const l7 = document.getElementById("l39");
        const l8 = document.getElementById("l40");
        let lineFlag = 0;

        if (l1.style.opacity == "0.1" && l2.style.opacity == "1" && l3.style.opacity == "1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "1" && l8.style.opacity == "1") {
            lineFlag = 1;
        }

        if (inp1.length == 0 || inp2.length == 0 || inp3.length == 0 || inp4.length == 0) {
            obs.style.color = "black";
            obs.innerHTML = "Enter all the bits.";
        }

        else if (l1.style.opacity == "0.1" && l2.style.opacity == "0.1" && l3.style.opacity == "0.1" && l4.style.opacity == "0.1"
            && l5.style.opacity == "0.1" && l6.style.opacity == "0.1" && l7.style.opacity == "0.1" && l8.style.opacity == "0.1") {
            obs.style.color = "black";
            obs.innerHTML = "Select the paths with the least path metric.";
        }

        else if (inp1 == "2" && inp2 == "3" && inp3 == "2" && inp4 == "3" && lineFlag == "1") {
            obs.innerHTML = "<b>Correct Answer!!!</b> <br> Forward tracing is successfully completed. Now perform backward tracing by clicking on the lines.";
            obs.style.color = "green";

            //Disabling field inputs and toggling line opacity
            document.getElementById("sixth-inp-1").setAttribute('disabled', true);
            document.getElementById("sixth-inp-2").setAttribute('disabled', true);
            document.getElementById("sixth-inp-3").setAttribute('disabled', true);
            document.getElementById("sixth-inp-4").setAttribute('disabled', true);
            toggleNumber5 = 1;

            currentStage++;
            toggleFlag = 1;

        }

        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }
    }

    else if (currentStage == 5) {
        let blackLineCnt = 0;
        for (var i = 0; i < lines.length; i++) {
            if (lines.item(i).style.stroke == "black") {
                blackLineCnt++;
            }
        }

        if (blackLineCnt != 5) {
            obs.innerHTML = "Click on five lines to perform backtracing";
            obs.style.color = "black";
        }

        else if ((lines.item(0).style.stroke == "black" && lines.item(9).style.stroke == "black"
            && lines.item(21).style.stroke == "black" && lines.item(30).style.stroke == "black"
            && lines.item(34).style.stroke == "black") && blackLineCnt == 5) {
            obs.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully completed the decoding and the decoded message is <b>01100</b>.";
            obs.style.color = "green";
        }

        else if ((lines.item(0).style.stroke == "black" && lines.item(8).style.stroke == "black"
            && lines.item(16).style.stroke == "black" && lines.item(24).style.stroke == "black"
            && lines.item(33).style.stroke == "black") && blackLineCnt == 5) {
            obs.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully completed the decoding and the decoded message is <b>00001</b>.";
            obs.style.color = "green";
        }


        else {
            obs.style.color = "red";
            if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
                obs.innerHTML = "<b>Wrong Again :(</b>";
            }

            else {
                obs.innerHTML = "<b>Wrong Answer :(</b>";
            }
        }

    }
}

function third() {
    document.getElementById("rcv-2").style.display = "block";

    document.getElementById("third-1").style.display = "block";
    document.getElementById("third-2").style.display = "block";
    document.getElementById("third-3").style.display = "block";
    document.getElementById("third-4").style.display = "block";

    document.getElementById("l9").style.display = "block";
    document.getElementById("l10").style.display = "block";
    document.getElementById("l11").style.display = "block";
    document.getElementById("l12").style.display = "block";
    document.getElementById("l13").style.display = "block";
    document.getElementById("l14").style.display = "block";
    document.getElementById("l15").style.display = "block";
    document.getElementById("l16").style.display = "block";
}

function fourth() {
    document.getElementById("rcv-3").style.display = "block";

    document.getElementById("fourth-1").style.display = "block";
    document.getElementById("fourth-2").style.display = "block";
    document.getElementById("fourth-3").style.display = "block";
    document.getElementById("fourth-4").style.display = "block";

    document.getElementById("l17").style.display = "block";
    document.getElementById("l18").style.display = "block";
    document.getElementById("l19").style.display = "block";
    document.getElementById("l20").style.display = "block";
    document.getElementById("l21").style.display = "block";
    document.getElementById("l22").style.display = "block";
    document.getElementById("l23").style.display = "block";
    document.getElementById("l24").style.display = "block";
}

function fifth() {
    document.getElementById("rcv-4").style.display = "block";

    document.getElementById("fifth-1").style.display = "block";
    document.getElementById("fifth-2").style.display = "block";
    document.getElementById("fifth-3").style.display = "block";
    document.getElementById("fifth-4").style.display = "block";

    document.getElementById("l25").style.display = "block";
    document.getElementById("l26").style.display = "block";
    document.getElementById("l27").style.display = "block";
    document.getElementById("l28").style.display = "block";
    document.getElementById("l29").style.display = "block";
    document.getElementById("l30").style.display = "block";
    document.getElementById("l31").style.display = "block";
    document.getElementById("l32").style.display = "block";
}

function sixth() {
    document.getElementById("rcv-5").style.display = "block";

    document.getElementById("sixth-1").style.display = "block";
    document.getElementById("sixth-2").style.display = "block";
    document.getElementById("sixth-3").style.display = "block";
    document.getElementById("sixth-4").style.display = "block";

    document.getElementById("l33").style.display = "block";
    document.getElementById("l34").style.display = "block";
    document.getElementById("l35").style.display = "block";
    document.getElementById("l36").style.display = "block";
    document.getElementById("l37").style.display = "block";
    document.getElementById("l38").style.display = "block";
    document.getElementById("l39").style.display = "block";
    document.getElementById("l40").style.display = "block";
}