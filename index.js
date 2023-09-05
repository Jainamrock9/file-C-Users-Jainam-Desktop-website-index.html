let a= prompt("hey whats your marks");
a = Number.parseInt(a)
if(a<0){
  alert("this is an invalid marks");
}
else if (a<35){
  alert("you are a fail");
}
else if (a>35){
  alert("you are a pass");
}
else{
  alert("you are pass");
}
