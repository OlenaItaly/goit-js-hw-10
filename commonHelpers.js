import"./assets/styles-e969fe97.js";import{f,i as h}from"./assets/vendor-77e16229.js";let a,n;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],n=a-d.defaultDate,n<1?(h.error({color:"red",position:"topRight",message:"Please choose a date in the future"}),r.disabled=!0):(r.disabled=!1,s.disabled=!0)}};function p(t){const l=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:c,minutes:u,seconds:m}}f("#datepicker",d);const s=document.querySelector("#datepicker"),r=document.querySelector("button"),o=document.querySelectorAll(".value");console.log(o);r.disabled=!0;r.addEventListener("click",t=>{const i=setInterval(()=>{if(n=a-new Date,t.preventDefault(),s.disabled=!0,n<1){r.disabled=!0,s.disabled=!1,clearInterval(i);return}const e=p(n);console.log(t.currentTarget),o[0].textContent=e.days.toString().padStart(2,"0"),o[1].textContent=e.hours.toString().padStart(2,"0"),o[2].textContent=e.minutes.toString().padStart(2,"0"),o[3].textContent=e.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map