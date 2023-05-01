
//list up all properties

var tesObj={p1:1,
            p2:2,
            p3:3,
            p4:4,
            p5:5,
            p6:6,
            p7:7,
            p8:8,
            p9:9
            };

var objToInspect;
var result='a';

for(objToInspect=tesObj;
    objToInspect!=null;
    objToInspect=Object.getPrototypeof(objToInspect))
    {
        result=result.concat(
            //Object.getOwnPropertyNames(objToInspect)
        );
    }

console.log(result);