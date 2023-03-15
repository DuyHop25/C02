"use strict";
exports.__esModule = true;
function random() {
    // Lấy ra 2 thẻ input ( Nơi người dùng nhập ) có id = "min" && "max"
    var input_min = document.getElementById("min");
    var input_max = document.getElementById("max");
    // Lấy giá trị của thẻ input được người dùng nhập
    var value_min = Number(input_min.value);
    var value_max = Number(input_max.value);
    // Khai báo 2 biến hằng max && min để gán random giá trị [min,max]
    var min = value_min;
    var max = value_max;
    // Random 2 giá trị trong khoảng [min,max]
    var a = Math.floor(Math.random() * (max - min + 1)) + min;
    // Lấy ra element p có id = "result"
    var p = document.getElementById("result");
    // Output giá trị vừa random bằng thẻ p 
    p.innerHTML = "" + a;
}
random();
