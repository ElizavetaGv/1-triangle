var button=document.getElementById('search');
button.addEventListener('click',findError);

function findError() {
	document.getElementById('result').innerHTML=''
	var sideA=+document.getElementById('sideA').value;
	var sideB=+document.getElementById('sideB').value;
	var sideC=+document.getElementById('sideC').value;

	if (sideA<=0 || sideB<=0 || sideC<=0 || sideA>=sideB+sideC  || sideB>=sideA+sideC || sideC>=sideB+sideA || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
		document.getElementById('message').innerHTML='Неверные данные!';
		return;
	} else {
		document.getElementById('message').innerHTML='';
	}
	findHeight(sideA,sideB,sideC);
}

function findHeight(sideA,sideB,sideC) {
	var p=0.5*(sideA+sideB+sideC);
	var num=2*Math.sqrt(p*(p-sideA)*(p-sideB)*(p-sideC));
	var hA=num/sideA;
	var hB=num/sideB;
	var hC=num/sideC;
	document.getElementById('result').innerHTML="<p>hA=" + hA + "</p>"+"<p>hB=" + hB + "</p>"+"<p>hC=" + hC + "</p>";
}