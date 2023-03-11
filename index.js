let a;
let date;
let time;
let loc=navigator.geolocation.getCurrentPosition(function(data){
    document.getElementById('loc').innerHTML='<br> Latitude : '+data.coords.latitude + ' and  Longitude : '+ data.coords.longitude;
});
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(() =>{
a = new Date();
date=a.toLocaleDateString(undefined,options);
time=a.toLocaleTimeString();
document.getElementById('timendate').innerHTML= 'Current Time :  '+time+ ' <br><br> '+ 'Date : '+ date ;
},1000);