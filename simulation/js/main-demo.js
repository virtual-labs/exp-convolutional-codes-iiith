var lines = document.querySelectorAll('*[id^="l"]');
var count=0;
const obs = document.getElementById("observations");

function display() {
    count++;

    if (count == 1) {
        document.getElementById("l1").style.display = "block";
        document.getElementById("l2").style.display = "block";
        document.getElementById("l3").style.display = "block";
        document.getElementById("l4").style.display = "block";
        document.getElementById("l5").style.display = "block";
        document.getElementById("l6").style.display = "block";
        document.getElementById("l7").style.display = "block";
        document.getElementById("l8").style.display = "block";

        document.getElementById("second-1").style.display = "block";
        document.getElementById("second-2").style.display = "block";
        document.getElementById("second-3").style.display = "block";
        document.getElementById("second-4").style.display = "block";

        document.getElementById("rcv-1").style.display = "block";
    }

    if (count == 2) {
        document.getElementById("l9").style.display = "block";
        document.getElementById("l10").style.display = "block";
        document.getElementById("l11").style.display = "block";
        document.getElementById("l12").style.display = "block";
        document.getElementById("l13").style.display = "block";
        document.getElementById("l14").style.display = "block";
        document.getElementById("l15").style.display = "block";
        document.getElementById("l16").style.display = "block";

        document.getElementById("third-1").style.display = "block";
        document.getElementById("third-2").style.display = "block";
        document.getElementById("third-3").style.display = "block";
        document.getElementById("third-4").style.display = "block";

        document.getElementById("rcv-2").style.display = "block";
    }

    if (count == 3) {
        document.getElementById("l17").style.display = "block";
        document.getElementById("l18").style.display = "block";
        document.getElementById("l19").style.display = "block";
        document.getElementById("l20").style.display = "block";
        document.getElementById("l21").style.display = "block";
        document.getElementById("l22").style.display = "block";
        document.getElementById("l23").style.display = "block";
        document.getElementById("l24").style.display = "block";

        document.getElementById("fourth-1").style.display = "block";
        document.getElementById("fourth-2").style.display = "block";
        document.getElementById("fourth-3").style.display = "block";
        document.getElementById("fourth-4").style.display = "block";

        document.getElementById("rcv-3").style.display = "block";
    }

    if (count == 4) {
        document.getElementById("l25").style.display = "block";
        document.getElementById("l26").style.display = "block";
        document.getElementById("l27").style.display = "block";
        document.getElementById("l28").style.display = "block";
        document.getElementById("l29").style.display = "block";
        document.getElementById("l30").style.display = "block";
        document.getElementById("l31").style.display = "block";
        document.getElementById("l32").style.display = "block";

        document.getElementById("fifth-1").style.display = "block";
        document.getElementById("fifth-2").style.display = "block";
        document.getElementById("fifth-3").style.display = "block";
        document.getElementById("fifth-4").style.display = "block";

        document.getElementById("rcv-4").style.display = "block";
    }

    if (count == 5) {
        document.getElementById("l33").style.display = "block";
        document.getElementById("l34").style.display = "block";
        document.getElementById("l35").style.display = "block";
        document.getElementById("l36").style.display = "block";
        document.getElementById("l37").style.display = "block";
        document.getElementById("l38").style.display = "block";
        document.getElementById("l39").style.display = "block";
        document.getElementById("l40").style.display = "block";

        document.getElementById("sixth-1").style.display = "block";
        document.getElementById("sixth-2").style.display = "block";
        document.getElementById("sixth-3").style.display = "block";
        document.getElementById("sixth-4").style.display = "block";

        document.getElementById("rcv-5").style.display = "block";

        document.getElementById("observations").innerHTML="Forward pass has been completed.";
    }



    if (count == 6) {
        document.getElementById("l35").style.stroke = 'black';
        document.getElementById("l35").setAttribute("stroke-width", 4);
        document.getElementById("sixth-1").style.backgroundColor = 'lightgray';
        document.getElementById("fifth-2").style.backgroundColor = 'lightgray';

        document.getElementById("msg-5").style.display = "block";
        document.getElementById("msg").style.display = "block";

        document.getElementById("observations").innerHTML="";
    }

    if (count == 7) {
        document.getElementById("l31").style.stroke = 'black';
        document.getElementById("l31").setAttribute("stroke-width", 4);
        document.getElementById("fourth-4").style.backgroundColor = 'lightgray';

        document.getElementById("msg-4").style.display = "block";
    }

    if (count == 8) {
        document.getElementById("l24").style.stroke = 'black';
        document.getElementById("l24").setAttribute("stroke-width", 4);
        document.getElementById("third-4").style.backgroundColor = 'lightgray';

        document.getElementById("msg-3").style.display = "block";
    }

    if (count == 9) {
        document.getElementById("l14").style.stroke = 'black';
        document.getElementById("l14").setAttribute("stroke-width", 4);
        document.getElementById("second-3").style.backgroundColor = 'lightgray';

        document.getElementById("msg-2").style.display = "block";
    }

    if (count == 10) {
        document.getElementById("l2").style.stroke = 'black';
        document.getElementById("l2").setAttribute("stroke-width", 4);
        document.getElementById("first-1").style.backgroundColor = 'lightgray';

        obs.innerHTML="The decoding is complete and the decoded message is <b>11100</b>.";

        document.getElementById("msg-1").style.display = "block";
        document.getElementById("next").setAttribute('disabled', true);
    }
}

function reset() {
    count = 0;
    document.getElementById("next").removeAttribute('disabled');

    for (var i = 0; i < lines.length; i++) {
        lines.item(i).style.display = "none";
    }

    obs.innerHTML="";

    document.getElementById("msg").style.display = "none";
    document.getElementById("msg-1").style.display = "none";
    document.getElementById("msg-2").style.display = "none";
    document.getElementById("msg-3").style.display = "none";
    document.getElementById("msg-4").style.display = "none";
    document.getElementById("msg-5").style.display = "none";

    document.getElementById("rcv-1").style.display = "none";
    document.getElementById("rcv-2").style.display = "none";
    document.getElementById("rcv-3").style.display = "none";
    document.getElementById("rcv-4").style.display = "none";
    document.getElementById("rcv-5").style.display = "none";


    document.getElementById("second-1").style.display = "none";
    document.getElementById("second-2").style.display = "none";
    document.getElementById("second-3").style.display = "none";
    document.getElementById("second-4").style.display = "none";

    document.getElementById("third-1").style.display = "none";
    document.getElementById("third-2").style.display = "none";
    document.getElementById("third-3").style.display = "none";
    document.getElementById("third-4").style.display = "none";

    document.getElementById("fourth-1").style.display = "none";
    document.getElementById("fourth-2").style.display = "none";
    document.getElementById("fourth-3").style.display = "none";
    document.getElementById("fourth-4").style.display = "none";

    document.getElementById("fifth-1").style.display = "none";
    document.getElementById("fifth-2").style.display = "none";
    document.getElementById("fifth-3").style.display = "none";
    document.getElementById("fifth-4").style.display = "none";


    document.getElementById("sixth-1").style.display = "none";
    document.getElementById("sixth-2").style.display = "none";
    document.getElementById("sixth-3").style.display = "none";
    document.getElementById("sixth-4").style.display = "none";

    // Changing back the colors and line stroke widths
    document.getElementById("first-1").style.backgroundColor = 'yellow';
    document.getElementById("second-3").style.backgroundColor = 'yellow';
    document.getElementById("third-4").style.backgroundColor = 'yellow';
    document.getElementById("fourth-4").style.backgroundColor = 'yellow';
    document.getElementById("fifth-2").style.backgroundColor = 'yellow';
    document.getElementById("sixth-1").style.backgroundColor = 'yellow';

    document.getElementById("l2").style.stroke = 'blue';
    document.getElementById("l2").setAttribute("stroke-width", 2);

    document.getElementById("l14").style.stroke = 'blue';
    document.getElementById("l14").setAttribute("stroke-width", 2);

    document.getElementById("l24").style.stroke = 'blue';
    document.getElementById("l24").setAttribute("stroke-width", 2);

    document.getElementById("l31").style.stroke = 'red';
    document.getElementById("l31").setAttribute("stroke-width", 2);

    document.getElementById("l35").style.stroke = 'red';
    document.getElementById("l35").setAttribute("stroke-width", 2);

}