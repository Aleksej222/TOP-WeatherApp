document.querySelector(".input-location"),document.querySelector(".btn-send-request").addEventListener("click",(()=>{!async function(){let e=await fetch("https://api.weatherapi.com/v1/current.json?key=ba2ccfa3d69b4712b5e74013241405&q=london&contentType=json");var t;t=(await e.json()).current,console.log(t)}()}));