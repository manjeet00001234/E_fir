// jQuery(document).ready(function () {
//     buttonFunction();
// });

// function buttonFunction () {
//     jQuery(".button").on("click", function () {
//         jQuery(this).siblings().removeClass("active");
//         // jQuery(this).siblings().html("Button");
//         jQuery(this).toggleClass("active");

//     });
// }

function btn1 () {
    document.getElementById("bt_1").style.backgroundColor = "#f1c40f";
    document.getElementById("bt_1").style.color = "black";
    document.getElementById("bt_2").style.color = "#fff";
    document.getElementById("bt_3").style.color = "#fff";
    document.getElementById("bt_4").style.color = "#fff";
    document.getElementById("bt_2").style.backgroundColor = "#235eaa";
    document.getElementById("bt_3").style.backgroundColor = "#235eaa";
    document.getElementById("bt_4").style.backgroundColor = "#235eaa";

}

function btn2 () {
    document.getElementById("bt_1").style.backgroundColor = "#235eaa";
    document.getElementById("bt_3").style.backgroundColor = "#235eaa";
    document.getElementById("bt_4").style.backgroundColor = "#235eaa";
    document.getElementById("bt_2").style.backgroundColor = "#f1c40f";
    document.getElementById("bt_1").style.color = "#fff";
    document.getElementById("bt_2").style.color = "black";
    document.getElementById("bt_3").style.color = "#fff";
    document.getElementById("bt_4").style.color = "#fff";

}

function btn3 () {
    document.getElementById("bt_1").style.backgroundColor = "#235eaa";
    document.getElementById("bt_2").style.backgroundColor = "#235eaa";
    document.getElementById("bt_4").style.backgroundColor = "#235eaa";
    document.getElementById("bt_3").style.backgroundColor = "#f1c40f";
    document.getElementById("bt_1").style.color = "#fff";
    document.getElementById("bt_2").style.color = "#fff";
    document.getElementById("bt_3").style.color = "black";
    document.getElementById("bt_4").style.color = "#fff";
}

function btn4 () {
    document.getElementById("bt_1").style.backgroundColor = "#235eaa";
    document.getElementById("bt_2").style.backgroundColor = "#235eaa";
    document.getElementById("bt_3").style.backgroundColor = "#235eaa";
    document.getElementById("bt_4").style.backgroundColor = "#f1c40f";
    document.getElementById("bt_1").style.color = "#fff";
    document.getElementById("bt_2").style.color = "#fff";
    document.getElementById("bt_3").style.color = "#fff";
    document.getElementById("bt_4").style.color = "black";
}

// Date object
var today = new Date();

// Current Date
var date = today.getDate() + "-" + (today.getMonth() + 1) +"-"+today.getFullYear() ;

document.getElementById("current_date").innerHTML = date;

// Current Time
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

document.getElementById("current_time").innerHTML = time;




setTimeout(

    function pop() {
        document.getElementById("pop").style.display = "block"
        document.getElementById("main_div").style.opacity="0.3"
    }
    , 2000);

function pop_bt () {
    document.getElementById("pop").style.display = "none";
    document.getElementById("main_div").style.opacity = "1"
    }