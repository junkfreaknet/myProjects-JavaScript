
const mysql=require('mysql2');

var connection=mysql.createConnection({
    host        :   'public.nhumf.tyo2.database-hosting.conoha.io',
    user        :   'nhumf_sion',
    password    :   'Noriyuki6403'  ,
    database    :   'nhumf_sion'
});

connection.connect();

connection.query('select distinct syu_ymd from select_locale_child_202212011001_cp_csv',function(error,result,fields){
    
    if(error)throw error;
    console.log('shipping date is ',result[0].syu_ymd);
});

connection.end();