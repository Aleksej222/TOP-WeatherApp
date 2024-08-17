(()=>{"use strict";class e{constructor(e,t,n=0){this.apiKey="ba2ccfa3d69b4712b5e74013241405",this.apiMethod=e,this.location=t,this.days=n}}let t=document.querySelector(".input-location"),n=document.querySelector(".btn-search");n&&n.addEventListener("click",(async()=>{if(t.value){let n=await async function(t,n,i=0){let a=new e(t,n,i),c="https://api.weatherapi.com/v1/"+a.apiMethod+"?key="+a.apiKey+"&q="+n+"&days="+a.days+"&contentType=json";return await async function(e){let t=await fetch(e);return await t.json()}(c)}("forecast.json",t.value,5);t.value="",function(e){!function(e){let t=document.querySelector(".location-name"),n=document.querySelector(".location-details"),i=e.localtime.split(" ")[1],a=e.region+", "+e.country+", "+i;t.innerHTML=e.name,n.innerHTML=a}(e.location),function(e){let t=document.querySelector(".img-current-temp"),n=function(e){let t="",n=!1;return n=function(e,t){let n=!1;return n=e.toLowerCase().split(" ").some((e=>t.includes(e))),n}(e,["sunny","mist","fog"]),t=n?"/icons/weather-conditions/sunny.svg":"/icons/weather-conditions/cloudy.svg",t}(e.condition.text);t.src=n;let i=document.querySelector(".current-temperature-deg"),a=document.querySelector(".feels-like-temperature-deg"),c=document.querySelector(".current-precipitation-mm"),l=document.querySelector(".current-wind-kph");i.innerHTML=e.temp_c+"&deg",a.innerHTML=e.feelslike_c+"&deg",c.innerHTML=e.precip_mm,l.innerHTML=e.wind_kph}(e.current),function(e){let t=document.querySelector(".total-precip-mm"),n=e.day.totalprecip_mm;t.innerHTML=n}(e.forecast.forecastday[0]),function(e){let t=document.querySelector(".weather-list-content");e.forEach((e=>{let n=function(e){let t=document.createElement("li");t.classList.add("weather-list-item");let n=document.createElement("div");n.classList.add("list-item-date");let i=document.createElement("span");i.innerHTML=e.date,n.appendChild(i);let a=document.createElement("ol");a.classList.add("list-forecast-symbols"),a.classList.add("d-flex");let c=["morning","afternoon","evening","night"];for(let e=0;e<c.length;e++){let t=document.createElement("li");t.classList.add("list-forecast-symbol"),t.classList.add("symbol-"+c[e]);let n=document.createElement("image");n.classList.add("image"),t.appendChild(n),a.appendChild(t)}let l=document.createElement("div");l.classList.add("list-forecast-item"),l.classList.add("d-flex");let d=document.createElement("div");d.classList.add("list-item-temperature");let r=document.createElement("span");r.innerHTML=e.day.maxtemp_c+"&deg / "+e.day.mintemp_c+"&deg",d.appendChild(r),l.appendChild(d);let o=document.createElement("div");o.classList.add("list-item-precip");let s=document.createElement("span");s.innerHTML=e.day.totalprecip_mm,o.appendChild(s),l.appendChild(o);let m=document.createElement("div");m.classList.add("list-item-wind");let u=document.createElement("span");return u.innerHTML=e.day.maxwind_kph,m.appendChild(u),l.appendChild(m),t.appendChild(n),t.appendChild(a),t.appendChild(l),t}(e);t.appendChild(n)}))}(e.forecast.forecastday)}(n)}})),t.value="Elverum",n.click()})();