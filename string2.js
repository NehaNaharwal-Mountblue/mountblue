const string = require('./strings');

//let ip = '111.139.161.143';
//let arr = ip.split('.');
//console.log(arr);

function ipAddress(ip){
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
        return ip.split('.'); 
    } 
    else{
        return ip.length = 0;
    } 
}

module.export = ipAddress

 console.log(ipAddress('123.456.789'));
 console.log(ipAddress('111.139.161.143'));
 console.log(ipAddress("111.222.333.444.555.666"));
 