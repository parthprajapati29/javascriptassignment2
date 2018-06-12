function button1(){
	var counter = 0;
	counter++;
	++counter;
	alert("for first counter++ it first set counter then increment the value so counter is set to 1 ,after ++Counter it first increment then set counter to:  " +counter);
}

function button2(){

	var n = 2; 
	n *= 3 + 5;
	alert("the value of n is :  " + n + " bcozit calculate  n=(2*3)+(2*5)");
}

function button3(){
	var a = 1, b = 1; 
	var c = ++a; 
	var d = b++;
	alert("A is: "+a + " B is: "+b +" C is: " +c +" D is: " +d);
}

function button4(){
var a = 2; 
var x = 1 + (a*=2);
alert("A is :"+a + "  B is :"+x);
}

function button5(){

	var a=1,b=9,c=3,d=4;
	alert("Max number is : " +Math.max(a, b, c , d));
}

function button6(){

	var sid,a=6 ,b=2;
	sid = (a+b<4) ? "below": "after";   //ternary
	alert(sid);
}

function button7(){

var a = prompt("Please enter any number between 0 to 3");
switch(a) {
    case "0":
        alert("0");
        break;
    case "1":
        alert("1");
        break;
    case "2":
        alert("2 , 3");
        break;
    case "3":
        alert("2 , 3");
        break;
    default:
        alert("Entered in default execution as tokens were not matched");
}
}

function button8(){

	var age = prompt("Please Enter the age : ");
	if(age>18){
		alert("Not a teenager")
	}
	else{
		alert("a teenager");
	}
}

function button9(){
	var d = new Date();
	var theDay=d.getDay();
	switch (theDay)
	{
		case 1:
		 	alert("monday");
		 break;
		case 2:
		 	alert("Tuesday");
		 break;
		case 3:
		 	alert("wednesday");
		 break;
		case 4:
		 	alert("Thursday");
		 break;
		case 5:
		 	alert("Friday");
		 break;
		case 6:
		 	alert("It's a weekend");
		 break;
		case 0:
		 	alert("It's a weekend");
		 break;
		default:
		 	alert("I'm really looking forward to this weekend!");
    }
}

function button10(){

     var d = new Date();
     var n = d.getHours();
    if(n>=0 && n<=12){
 		  document.getElementById('demo').style.background = "Yellow";
 		  
    }else if(n>=12 && n<=18){
		document.getElementById('demo1').style.background = "blue";
		
    }
     else if(n>=18 && n<=23){
		document.getElementById('demo2').style.background = "black";
		
	}
 }



