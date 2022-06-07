const string = require('./strings');

//let ip = '111.139.161.143';
//let arr = ip.split('.');
//console.log(arr);

function ipAddress(ip){
   return ip.split('.');
    
}
 console.log(ipAddress('123.456.789'));
 console.log(ipAddress('111.139.161.143'));
 console.log(ipAddress(''));