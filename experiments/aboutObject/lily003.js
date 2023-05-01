
var myObj=new Object(),
    str='myString',
    rand=Math.random(),
    obj=new Object();

myObj.type='dot';
myObj['date created']='blank included string';
myObj[str]='value of string';
myObj[rand]='random number';
myObj[obj]='object';
myObj['']='be able empty string';

console.log(myObj);
console.log('***END***');