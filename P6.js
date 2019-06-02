var num = window.prompt("Enter a number:");
var num2 = num;
var temp=0;
var x;
while(num2>0){
    x=num2%10;
    num2=parseInt(num2/10) ;
    temp=temp*10 + x;
}
if(temp == num){
    console.log(num," is palindrome");
}
else{
    console.log(num," is not palindrome");
}