const Calc = () => {
    let maths = document.getElementById('maths').value;
    let english = document.getElementById('english').value;
    let science = document.getElementById('science').value;
    let hindi = document.getElementById('hindi').value;
    let grade = '';
    let total = parseFloat(maths) + parseFloat(english) + parseFloat(science) + parseFloat(hindi);

    let per = (total / 400 * 100);

    if (per <= 100 && per >= 80) {
        grade = 'A';
    }
    else if (per <= 79 && per >= 60) {
        grade = "B";
    }
    else if (per <= 59 && per >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }
    document.getElementById('showData').innerHTML = `OUT OF 400 YOUR TOTAL IS ${total}<br>PERCENTAGE IS ${per}%<br>GRADES ${grade}`;
}

