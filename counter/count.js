let y = document.getElementById("count");
let x = document.getElementById("sub");
let v = document.getElementById("add");
let count = 0;
v.addEventListener("click", function() {
    count += 1;
    y.innerHTML = count;
});
x.addEventListener("click", function() {
    count -= 1;
    y.innerHTML = count;
});