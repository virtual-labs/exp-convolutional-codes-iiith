var inpArray = [0, 0, 0, 0, 0, 0];
var genSequence1 = [1, 0, 1];
var genSequence2 = [1, 1, 1];

function display() {
    const m1 = document.getElementById("m1").value;
    const m2 = document.getElementById("m2").value;
    const m3 = document.getElementById("m3").value;
    const m4 = document.getElementById("m4").value;
    const m5 = document.getElementById("m5").value;
    const m6 = document.getElementById("m6").value;
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const mEntered = document.getElementById("mEntered");


    if (m1.length == 0 || m2.length == 0 || m3.length == 0
        || m4.length == 0 || m5.length == 0 || m6.length == 0) {

        mEntered.innerHTML = "Enter all the bits.";
        return;

    }

    else if (m1.length > 1 || m2.length > 1 || m3.length > 1
        || m4.length > 1 || m5.length > 1 || m6.length > 1) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else if (m1 > 1 || m1 < 0 || m2 > 1 || m2 < 0 || m3 > 1 || m3 < 0
        || m4 > 1 || m4 < 0 || m5 > 1 || m5 < 0 || m6 > 1 || m6 < 0) {

        mEntered.innerHTML = "Enter values from the set {0, 1}.";
        return;

    }

    else {

        mEntered.innerHTML = "The entered message is <br><b>["
            + m1 + " " + m2 + " " + m3 + " " + m4 + " " + m5 + " " + m6 + "]</b>.";

        inpArray[0] = parseInt(m1);
        inpArray[1] = parseInt(m2);
        inpArray[2] = parseInt(m3);
        inpArray[3] = parseInt(m4);
        inpArray[4] = parseInt(m5);
        inpArray[5] = parseInt(m6);

        part1.style.display = "none";
        part2.style.display = "block";
        return;

    }
}

function check() {
    const b1 = document.getElementById("b1").value;
    const b2 = document.getElementById("b2").value;
    const b3 = document.getElementById("b3").value;
    const b4 = document.getElementById("b4").value;
    const b5 = document.getElementById("b5").value;
    const b6 = document.getElementById("b6").value;
    const b7 = document.getElementById("b7").value;
    const b8 = document.getElementById("b8").value;
    const b9 = document.getElementById("b9").value;
    const b10 = document.getElementById("b10").value;
    const b11 = document.getElementById("b11").value;
    const b12 = document.getElementById("b12").value;

    const cEntered = document.getElementById("cEntered");

    const expectedOut1 = oneD_conv(inpArray, genSequence1);
    const expectedOut2 = oneD_conv(inpArray, genSequence2);

    console.log(inpArray);
    console.log(expectedOut1);
    console.log(expectedOut2);

    if (b1.length == 0 || b2.length == 0 || b3.length == 0 || b4.length == 0
        || b5.length == 0 || b6.length == 0 || b7.length == 0 || b8.length == 0
        || b9.length == 0 || b10.length == 0 || b11.length == 0 || b12.length == 0) {

        cEntered.innerHTML = "Enter all the bits.";
        cEntered.style.color = "black";
        return;
    }

    else if (b1.length > 1 || b2.length > 1 || b3.length > 1 || b4.length > 1
        || b5.length > 1 || b6.length > 1 || b7.length > 1 || b8.length > 1
        || b9.length > 1 || b10.length > 1 || b11.length > 1 || b12.length > 1) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;

    }

    else if (b1 > 1 || b1 < 0 || b2 > 1 || b2 < 0 || b3 > 1 || b3 < 0 || b4 > 1 || b4 < 0
        || b5 > 1 || b5 < 0 || b6 > 1 || b6 < 0 || b7 > 1 || b7 < 0 || b8 > 1 || b8 < 0
        || b9 > 1 || b9 < 0 || b10 > 1 || b10 < 0 || b11 > 1 || b11 < 0 || b12 > 1 || b12 < 0) {

        cEntered.innerHTML = "Enter values from the set {0, 1}.";
        cEntered.style.color = "black";
        return;

    }


    //Ignoring the two bits at the end
    else if (expectedOut1[0] == b1 && expectedOut1[1] == b3 && expectedOut1[2] == b5 && expectedOut1[3] == b7
        && expectedOut1[4] == b9 && expectedOut1[5] == b11 && expectedOut2[0] == b2 && expectedOut2[1] == b4
        && expectedOut2[2] == b6 && expectedOut2[3] == b8 && expectedOut2[4] == b10 && expectedOut2[5] == b12) {

        cEntered.innerHTML = "<b>Correct Answer!!!</b>";
        cEntered.style.color = "green";
        return;
    }

    else {
        if (cEntered.innerHTML == "<b>Wrong Answer :(</b>") {
            cEntered.innerHTML = "<b>Wrong Again :(</b>";
            cEntered.style.color = "red";
            return;
        }

        else {
            cEntered.innerHTML = "<b>Wrong Answer :(</b>";
            cEntered.style.color = "red";
            return;
        }
    }
}

function oneD_conv(a, b) {
    const len1 = a.length;
    const len2 = b.length;

    // Stores the final array
    var c = [];
    for (let i = 0; i < len1 + len2 - 1; ++i) {
        c[i] = 0;
    }

    for (let i = 0; i < len1; ++i) {
        for (let j = 0; j < len2; ++j) {
            c[i + j] = (c[i + j] + (a[i] * b[j])) % 2;
        }
    }

    return c;
}

function initial() {
    const part1 = document.getElementById("part1");
    const part2 = document.getElementById("part2");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const mEntered = document.getElementById("mEntered");
    const cEntered = document.getElementById("cEntered");

    mEntered.innerHTML = "";
    cEntered.innerHTML = "";

    part1.style.display = "block";
    part2.style.display = "none";
    form1.reset();
    form2.reset();

}