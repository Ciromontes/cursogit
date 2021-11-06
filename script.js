document.querySelector('h1').addEventListener('click', ()=> {
    document.body.syle.background = 'green';
})
function colorChanger() {
    var selectValue = document.getElementById("mySelection").value;
    document.getElementById("dummy").innerHTML = "You selectd: " + selectValue;
    document.body.style.backgroundColor = selectValue;

}