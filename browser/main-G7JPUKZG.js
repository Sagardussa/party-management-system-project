import{a as u}from"./chunk-MWUAOLXB.js";import{$ as L,A as C,G as S,J as b,K as n,L as i,M as a,N as w,O as I,P as k,Q as p,T as d,aa as _,ba as T,ca as A,ea as M,fa as c,ha as E,ka as H,m as l,o as s,s as h,t as x,u as v,v as y}from"./chunk-UQDSR4D3.js";var f=(t,e)=>{let m=l(u),r=l(c),o=m.isLoggedIn();return o||(r.navigate(["/login"]),!1)};var R=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",loadComponent:()=>import("./chunk-EXODM7KR.js")},{path:"party-list",loadComponent:()=>import("./chunk-SIYPU4JW.js"),canActivate:[f]},{path:"party-form",loadComponent:()=>import("./chunk-X3RGD2KB.js"),canActivate:[f]},{path:"party-list/:id",loadComponent:()=>import("./chunk-U5T4SI62.js"),canActivate:[f]}];var j=(t,e)=>{let m=localStorage.getItem("token");if(m){let r=t.clone({setHeaders:{Authorization:`Token ${m}`}});return e(r)}else return e(t)};var D={providers:[E(R),L(_([j])),A(),H()]};function O(t,e){if(t&1){let m=w();n(0,"div",12),a(1,"div",13),i(),n(2,"div",14),a(3,"span",15),n(4,"a",16),I("click",function(){h(m);let o=k();return x(o.Logout())}),p(5,"Logout"),i()()}}function $(t,e){t&1&&(n(0,"div",14)(1,"a",17),p(2,"Sign in"),i(),a(3,"span",15),n(4,"a",18),p(5,"Create account"),i()())}var F=(()=>{let e=class e{constructor(){this.authService=l(u),this.router=l(c),this.isLoggedIn=!1}ngOnInit(){this.authService.isLoggedIn$.subscribe(r=>{this.isLoggedIn=this.authService.isLoggedIn()})}Logout(){localStorage.removeItem("token"),this.authService.isLoggedIn$.next(!1)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:17,vars:1,consts:[[1,"bg-white"],[1,"mx-auto","max-w-full","px-3","sm:px-6","lg:px-8"],[1,"border-b","border-gray-200"],[1,"flex","h-16","items-center"],["type","button",1,"relative","rounded-md","bg-white","p-2","text-gray-400","lg:hidden"],[1,"absolute","-inset-0.5"],[1,"sr-only"],["fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","aria-hidden","true",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"],[1,"ml-4","flex","lg:ml-0"],["href",""],[1,"ml-auto","flex","items-center"],[1,"hidden","lg:ml-8","lg:block","lg:self-stretch"],[1,"flex","h-full","space-x-8"],[1,"hidden","lg:flex","lg:flex-1","lg:items-center","lg:justify-end","lg:space-x-6"],["aria-hidden","true",1,"h-6","w-px","bg-gray-200"],["href","/login",1,"text-sm","font-medium","text-gray-700","hover:text-gray-800",3,"click"],["href","/login",1,"text-sm","font-medium","text-gray-700","hover:text-gray-800"],["href","/register",1,"text-sm","font-medium","text-gray-700","hover:text-gray-800"]],template:function(o,g){o&1&&(n(0,"header",0)(1,"nav",1)(2,"div",2)(3,"div",3)(4,"button",4),a(5,"span",5),n(6,"span",6),p(7,"Open menu"),i(),v(),n(8,"svg",7),a(9,"path",8),i()(),y(),n(10,"div",9)(11,"a",10)(12,"span",6),p(13,"Your Company"),i()()(),n(14,"div",11),S(15,O,6,0)(16,$,6,0),i()()()()()),o&2&&(C(15),b(15,g.isLoggedIn?15:16))}});let t=e;return t})();var V=(()=>{let e=class e{constructor(){this.title="Party-Management-System"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:2,vars:0,template:function(o,g){o&1&&a(0,"app-header")(1,"router-outlet")},dependencies:[M,F]});let t=e;return t})();T(V,D).catch(t=>console.error(t));