// let Name="Ahad";
// let age=19;
// let student=true;

/*
console.log(Name);
console.log(age);
console.log(student); 
*/

// document.getElementById("p1").innerHTML = ("Hello " + Name);
// document.getElementById("p2").innerHTML = ("You are " + age + " Years old");

//arithmetic expressions
/*operands (values,variables)
          operators (+ - * / %) that can be evaluted to the value
          example y=x+5 
          in this example y and x are the operands and = and + both are operators whereas 5 is a constant number*/
//   let students=20;
//   document.getElementById("p1").innerHTML = ("Hello " + students  + " students");

//   let results=25+23*(9+8)
//   document.getElementById("p2").innerHTML = ("Your obtained marks are " + results + "/510");

//practice
// window.alert('dont click here');
// let Name="Ahad";
// let age=19;
// let student=true;

// console.log("Hello ",Name);
// console.log("You are ",age," years old");
// console.log("Enrolled:",student);

// document.getElementById("p1").innerHTML = ("Hello " + Name )
// document.getElementById("p2").innerHTML = ("You are " + age + " years Old")
// document.getElementById("p3").innerHTML = ("Enrolled: " + student);

//how to accept users input
//easy way
// let username=window.prompt("whats your Name");
// console.log(username);
// document.getElementById("p1").innerHTML = ("Hello " + username )

// let userage=window.prompt("whats your age");
// console.log(age);
// document.getElementById("p2").innerHTML = ("You are " + userage + " years Old")

// let Enrolled=window.prompt("Are u currently enrolled");
// console.log(Enrolled);
// document.getElementById("p3").innerHTML = ("Enrolled: " + Enrolled);

//difficult way
// let username;
// document.getElementById("submitbtn").onclick = function () {
//   username = document.getElementById("username").value;
//   console.log(username);

//   if (username != null && username != "" && username != "undefined") {
//     // console.log(username);
//     document.getElementById("p1").innerHTML = "Hello " + username;
//   } else {
//     alert("Please enter username");
//   }
// };

//type conversion
// let userage;
// document.getElementById("submitbtn").onclick = function(){
//   userage=document.getElementById("username").value;
//   userage=Number(userage);
//   console.log(typeof userage, "userage type");
//   userage+=1;
//   document.getElementById("p1").innerHTML=("Hello "+userage+" years old guy");
// }

//circumference of circle
const PI=3.14159;
let radius;
let circumference;

document.getElementById("submitbtn1").onclick=function(){
  radius=document.getElementById("radius").value;
  radius=Number(radius);
  circumference=2*PI*radius
  document.getElementById("p1").innerHTML=("Circumference= "+circumference);
}
//for area of rectangle;
let length;
let width;
let area;
document.getElementById("submitbtn2").onclick=function(){
  length=document.getElementById("length").value;
  width=document.getElementById("width").value;

  length=Number(length);
  width=Number(width);

  area=length*width;
  document.getElementById("p2").innerHTML=("Area of rectangle= "+area);
}
//for area of triangle
let height;
let base;
document.getElementById("submitbtn3").onclick=function(){
  height=document.getElementById("height").value;
  base=document.getElementById("base").value;

  height=Number(height);
  base=Number(base);

  area=1/2*(height*base);
  document.getElementById("p3").innerHTML=("Area of triangle= "+area);
}
let x;
let y;
x=Number(x);
y=Number(y);
document.getElementById("submitbtn4").onclick=function(){
  x=document.getElementById("sqr").value;
  y=Math.pow(x,2);
  document.getElementById("p4").innerHTML=("Square of "+x+" = "+y)
}
document.getElementById("submitbtn5").onclick=function(){
  x=document.getElementById("sqrt").value;
  y=Math.sqrt(x)
  document.getElementById("p5").innerHTML=("Square root of "+x+" = "+y)
}

