var num = window.prompt("Enter a number:");
var i,flag = 0;
for(i=2; i<=num/2;i++){
    if(num%i == 0){
        flag = 1;
        break;
    }
}
if(flag == 1){
    console.log(num," is composite");
}
else{
    console.log(num," is prime");
}