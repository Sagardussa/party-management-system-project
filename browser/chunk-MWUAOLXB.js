import{_ as s,d as r,j as i,m as n}from"./chunk-UQDSR4D3.js";var m=(()=>{let t=class t{constructor(){this.apiUrls="https://ap.greatfuturetechno.com/",this.http=n(s),this.isLoggedIn$=new r(!1)}loginServices(o){return this.http.post(`${this.apiUrls}login/`,o)}isLoggedIn(){return!!localStorage.getItem("token")}};t.\u0275fac=function(a){return new(a||t)},t.\u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{m as a};