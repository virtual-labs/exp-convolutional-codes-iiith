function answer1() {
    const bit1 = document.getElementById("m1").value;
    const bit2 = document.getElementById("m2").value;
    const bit3 = document.getElementById("m3").value;
    const bit4 = document.getElementById("m4").value;
    const obs = document.getElementById("observations1");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "0" && bit2 == "0" && bit3 == "0" && bit4 == "0") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-1").src="./images/image-2.png";
        document.getElementById("next-1").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer2() {
    const bit1 = document.getElementById("m5").value;
    const bit2 = document.getElementById("m6").value;
    const bit3 = document.getElementById("m7").value;
    const bit4 = document.getElementById("m8").value;
    const obs = document.getElementById("observations2");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "1" && bit2 == "0" && bit3 == "1" && bit4 == "1") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-2").src="./images/image-3.png";
        document.getElementById("next-2").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer3() {
    const bit1 = document.getElementById("m9").value;
    const bit2 = document.getElementById("m10").value;
    const bit3 = document.getElementById("m11").value;
    const bit4 = document.getElementById("m12").value;
    const obs = document.getElementById("observations3");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "0" && bit2 == "0" && bit3 == "1" && bit4 == "1") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-3").src="./images/image-4.png";
        document.getElementById("next-3").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer4() {
    const bit1 = document.getElementById("m13").value;
    const bit2 = document.getElementById("m14").value;
    const bit3 = document.getElementById("m15").value;
    const bit4 = document.getElementById("m16").value;
    const obs = document.getElementById("observations4");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "1" && bit2 == "0" && bit3 == "0" && bit4 == "0") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-4").src="./images/image-5.png";
        document.getElementById("next-4").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer5() {
    const bit1 = document.getElementById("m17").value;
    const bit2 = document.getElementById("m18").value;
    const bit3 = document.getElementById("m19").value;
    const bit4 = document.getElementById("m20").value;
    const obs = document.getElementById("observations5");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "0" && bit2 == "1" && bit3 == "0" && bit4 == "1") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-5").src="./images/image-6.png";
        document.getElementById("next-5").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer6() {
    const bit1 = document.getElementById("m21").value;
    const bit2 = document.getElementById("m22").value;
    const bit3 = document.getElementById("m23").value;
    const bit4 = document.getElementById("m24").value;
    const obs = document.getElementById("observations6");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "1" && bit2 == "1" && bit3 == "1" && bit4 == "0") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-6").src="./images/image-7.png";
        document.getElementById("next-6").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer7() {
    const bit1 = document.getElementById("m25").value;
    const bit2 = document.getElementById("m26").value;
    const bit3 = document.getElementById("m27").value;
    const bit4 = document.getElementById("m28").value;
    const obs = document.getElementById("observations7");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "0" && bit2 == "1" && bit3 == "1" && bit4 == "0") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> The state diagram is not yet complete. Click on next button to answer the next question.";
        obs.style.color = "green";

        document.getElementById("page-7").src="./images/image-8.png";
        document.getElementById("next-7").removeAttribute("disabled");

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function answer8() {
    const bit1 = document.getElementById("m29").value;
    const bit2 = document.getElementById("m30").value;
    const bit3 = document.getElementById("m31").value;
    const bit4 = document.getElementById("m32").value;
    const obs = document.getElementById("observations8");

    if (bit1.length == 0 || bit2.length == 0 || bit3.length == 0 || bit4.length == 0) {

        obs.innerHTML = "Enter all the bits.";
        obs.style.color = "black";
    }

    else if (bit1.length > 1 || bit2.length > 1 || bit3.length > 1 || bit4.length > 1) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 > 1 || bit1 < 0 || bit2 > 1 || bit2 < 0 || bit3 > 1 || bit3 < 0 || bit4 > 1 || bit4 < 0) {

        obs.innerHTML = "Enter values from the set {0, 1}.";
        obs.style.color = "black";
    }

    else if (bit1 == "1" && bit2 == "1" && bit3 == "0" && bit4 == "1") {

        obs.innerHTML = "<b>Correct Answer!!!</b> <br> You have successfully completed the state diagram.";
        obs.style.color = "green";

        document.getElementById("page-8").src="./images/image-9.png";

    }

    else {
        if (obs.innerHTML == "<b>Wrong Answer :(</b>") {
            obs.innerHTML = "<b>Wrong Again :(</b>";
            obs.style.color = "red";
        }

        else {
            obs.innerHTML = "<b>Wrong Answer :(</b>";
            obs.style.color = "red";
        }
    }
}

function page2() {

    const question1 = document.getElementById("question1");
    const question2 = document.getElementById("question2");

    question1.style.display = "none";
    question2.style.display = "block";
}

function page3() {

    const question2 = document.getElementById("question2");
    const question3 = document.getElementById("question3");

    question2.style.display = "none";
    question3.style.display = "block";
}

function page4() {

    const question3 = document.getElementById("question3");
    const question4 = document.getElementById("question4");

    question3.style.display = "none";
    question4.style.display = "block";
}

function page5() {

    const question4 = document.getElementById("question4");
    const question5 = document.getElementById("question5");

    question4.style.display = "none";
    question5.style.display = "block";
}

function page6() {

    const question5 = document.getElementById("question5");
    const question6 = document.getElementById("question6");

    question5.style.display = "none";
    question6.style.display = "block";
}

function page7() {

    const question6 = document.getElementById("question6");
    const question7 = document.getElementById("question7");

    question6.style.display = "none";
    question7.style.display = "block";
}

function page8() {

    const question7 = document.getElementById("question7");
    const question8 = document.getElementById("question8");

    question7.style.display = "none";
    question8.style.display = "block";
}
