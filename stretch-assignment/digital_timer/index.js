let tenStart = 0;
window.setInterval(
    function() {
        tenStart += 1;
        document.getElementById("secondTens").textContent = tenStart;
}, 10000)

let singleStart = 0;
window.setInterval(
    function() {
        singleStart += 1;
        document.getElementById("secondOnes").textContent = singleStart;
}, 1000);

let hundredthStart = 0;
window.setInterval(
    function() {
        hundredthStart += 1;
        document.getElementById("msHundreds").textContent = hundredthStart;
}, 100);

let miliStart = 0;
window.setInterval(
    function() {
        miliStart += 1;
        document.getElementById("msTens").textContent = miliStart;
}, 10);