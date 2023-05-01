
const mysql2=require('mysql2');
const connection=mysql2.createConnection({
    host:'public.nhumf.tyo2.database-hosting.conoha.io',
    user:'nhumf_sion',
    password:'Noriyuki6403',
    database:'nhumf_sion'
});

const nameTable="select_locale_child_202212011001_cp_csv";
const stringSQL="select * from "+nameTable+" where ten_no='5355620'"+";";

//console.log(stringSQL);

connection.query(
    stringSQL,
    function(err,results,fields){
        //console.log(results);
        //console.log(fields);
    }
)

connection.query(stringSQL,['Page',1],
    function(err,results){
        console.log(results);
    })
    
connection.end();