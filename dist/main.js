(()=>{"use strict";class e{constructor(e,t,n=0){this.apiKey="ba2ccfa3d69b4712b5e74013241405",this.apiMethod=e,this.location=t,this.days=n}}let t=document.querySelector(".input-location"),n=document.querySelector(".btn-search");n&&n.addEventListener("click",(async()=>{if(t.value){let n=await async function(t,n,a=0){let c=new e(t,n,a),i="https://api.weatherapi.com/v1/"+c.apiMethod+"?key="+c.apiKey+"&q="+n+"&days="+c.days+"&contentType=json";return await async function(e){let t=await fetch(e);return await t.json()}(i)}("forecast.json",t.value,5);t.value="",function(e){!function(e){let t=document.querySelector(".location-name"),n=document.querySelector(".location-details"),a=e.localtime.split(" ")[1],c=e.region+", "+e.country+", "+a;t.innerHTML=e.name,n.innerHTML=c}(e.location)}(n)}})),t.value="Elverum",n.click()})();