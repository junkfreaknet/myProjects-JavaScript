
function showProps(obj,objName) {
    
    var result='';

    for(var i in obj) {

        if(obj.hasOwnProperty(i)){
            result+=objName+'.'+i+'='+obj[i]+'\n';
        }
    }
    return result;
}

/*********************************************************/

var myCar=new Object();

myCar.make='Ford';
myCar.model='Mustang';
myCar.year='1969';

console.log(showProps(myCar,'myCar'))