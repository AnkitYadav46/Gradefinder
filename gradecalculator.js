const calculator = () =>{
  var maths = document.getElementById('maths').value;
  var chm = document.getElementById('chm').value;
  var phy = document.getElementById('phy').value;
  var eng = document.getElementById('eng').value;
  var comp = document.getElementById('comp').value;
  var grades = "";


  let totalGrades = parseFloat(maths) + parseFloat(chm) + parseFloat(comp) + parseFloat(phy) + parseFloat(eng);
  let perc = (totalGrades/500) * 100;
  debugger;

  if(perc <= 100  && perc >= 90){
    grades = 'A';
  }
  else if(perc < 90 && perc >= 80){
    grades = 'B'
  }
  else if(perc < 80  && perc >= 60){
    grades = 'C';
  }
  else if(perc < 60  && perc >= 40){
    grades = 'D';
  }
  else{
    grades = 'F';
  }

  if(perc >= 39.5){
    document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. CONGRATULATIONS YOU PASSED!!!! 🔥🔥🔥🔥. `
  }
  else{
    document.getElementById('showData').innerHTML = ` Out of 500 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. SORRY YOU FAILED 😰😰😰😰. `
  }

  
}
