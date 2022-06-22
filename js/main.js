let tab1 = document.getElementById("tab1");

let tab2 = document.getElementById("tab2");

let tab3 = document.getElementById("tab3");


function showTabOne() {

    tab1.style.display = "block";
    tab2.style.display = "none";
    tab3.style.display = "none";

};


function showTabTwo() {

    tab1.style.display = "none";
    tab2.style.display = "block";
    tab3.style.display = "none";

};


function showTabThree() {

    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "block";

};