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

// let s = "  anurag";
// console.log(s)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.charAt(0))
// console.log(s.indexOf('a'))
// console.log(s.lastIndexOf('a'))
// console.log(s.substring(0,4))
// console.log(s.startsWith('a'))
// console.log(s.endsWith('g'))
// console.log(s.split())
// console.log(s.trim())
// let s1 = "Tawaniya"
// console.log(s.concat(s1))
