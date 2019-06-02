var myArr1 = [1,2,3,4,5];
var myArr2 = new Array;
for( var i = myArr1.length - 1; i>=0;i--){
myArr2.push(myArr1[i]);
}
for(var j=0;j<myArr2.length;j++){
    console.log(myArr2[j]);
}
