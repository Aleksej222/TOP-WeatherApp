(()=>{"use strict";class e{constructor(e,t,n=0){this.apiKey="ba2ccfa3d69b4712b5e74013241405",this.apiMethod=e,this.location=t,this.days=n}}let t=document.querySelector(".input-location"),n=document.querySelector(".btn-search");n&&n.addEventListener("click",(async()=>{if(t.value){let n=await async function(t,n,c=0){let r=new e(t,n,c),o="https://api.weatherapi.com/v1/"+r.apiMethod+"?key="+r.apiKey+"&q="+n+"&days="+r.days+"&contentType=json";return await async function(e){let t=await fetch(e);return await t.json()}(o)}("forecast.json",t.value,5);t.value="",function(e){var t;!function(e){let t=document.querySelector(".location-name"),n=document.querySelector(".location-details"),c=e.localtime.split(" ")[1],r=e.region+", "+e.country+", "+c;t.innerHTML=e.name,n.innerHTML=r}(e.location),function(e){let t=document.querySelector(".current-temperature-deg"),n=document.querySelector(".feels-like-temperature-deg"),c=document.querySelector(".current-precipitation-mm"),r=document.querySelector(".current-wind-kph");t.innerHTML=e.temp_c+"&deg",n.innerHTML=e.feelslike_c+"&deg",c.innerHTML=e.precip_mm,r.innerHTML=e.wind_kph}(e.current),t=e.forecast,console.log(t)}(n)}})),t.value="Elverum",n.click()})();