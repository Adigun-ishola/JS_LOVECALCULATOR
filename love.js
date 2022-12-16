function calculatelovescore() {
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var score = Math.floor(Math.random() * 100) + 1;
    var result = name1 + " love " + name2 + " The percentage of their love is " + score + "%";
    if (name1 == null || name2 == "") {
        alert("Names must be filled out");
        return false;
    } else {
        alert(result)
        //document.getElementById('result').innerHTML = result;
        //result;
    }
//window.setTimeout("document.getElementById('result').style.display='none';",5500);


}