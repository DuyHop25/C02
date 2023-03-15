function random(): void{
    // Lấy ra 2 thẻ input ( Nơi người dùng nhập ) có id = "min" && "max"
    let input_min:HTMLInputElement = <HTMLInputElement>document.getElementById("min");
    let input_max:HTMLInputElement = <HTMLInputElement>document.getElementById("max");
    // Lấy giá trị của thẻ input được người dùng nhập
    let value_min: number = Number(input_min.value);
    let value_max: number = Number(input_max.value);
    // Khai báo 2 biến hằng max && min để gán random giá trị [min,max]
    const min: number = value_min;
    const max: number = value_max;
    // Random 2 giá trị trong khoảng [min,max]
    let a:number = Math.floor(Math.random() * (max - min + 1) ) + min;
    // Lấy ra element p có id = "result"
    let p:HTMLParagraphElement= <HTMLParagraphElement>document.getElementById("result");
    // Output giá trị vừa random bằng thẻ p 
    p.innerHTML = "" +  a ;
}
random();
export{};
