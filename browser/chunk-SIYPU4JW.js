import{a as F,b as S}from"./chunk-5EMHIINH.js";import{A as m,G as g,H as C,J as E,K as e,L as t,M as f,N as P,O as p,P as y,Q as i,R as c,T as x,Y as T,Z as _,fa as b,ia as w,ja as k,m as d,o as u,s as h,t as v}from"./chunk-UQDSR4D3.js";function O(r,n){if(r&1){let a=P();e(0,"tr")(1,"td",5),i(2),t(),e(3,"td",5),i(4),t(),e(5,"td",5),i(6),t(),e(7,"td",5),i(8),t(),e(9,"td",5),i(10),t(),e(11,"td",5),i(12),t(),e(13,"td",5),i(14),t(),e(15,"td",5)(16,"button",6),p("click",function(){let o=h(a).$implicit,s=y(2);return v(s.redirectToEditPArtyForm(o.id))}),i(17," Edit "),t(),e(18,"button",7),p("click",function(){let o=h(a).$implicit,s=y(2);return v(s.deleteParty(o.id))}),i(19," Delete "),t()()()}if(r&2){let a=n.$implicit,l=n.index;m(2),c(l+1),m(2),c(a.id),m(2),c(a.name),m(2),c(a.company_name),m(2),c(a.email),m(2),c(a.mobile_no),m(2),c(a.credit_limit)}}function D(r,n){if(r&1&&(e(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th",2),i(5,"Sr No"),t(),e(6,"th",2),i(7,"ID"),t(),e(8,"th",2),i(9,"Name"),t(),e(10,"th",2),i(11,"Company Name"),t(),e(12,"th",2),i(13,"Email"),t(),e(14,"th",2),i(15,"MoblieNo"),t(),e(16,"th",2),i(17,"Credit Limit"),t(),e(18,"th",2),i(19,"Actions"),t()()(),e(20,"tbody",3),g(21,O,20,7,"tr",4),t()()()),r&2){let a=y();m(21),C("ngForOf",a.partyStore.partyData())}}function A(r,n){r&1&&(e(0,"div",8),f(1,"div",9),t())}var M=(()=>{let n=class n{constructor(){this.partyStore=d(S),this.parties$=this.partyStore.loadPartyListAll(),this.router=d(b),this.toastrService=d(k)}ngOnInit(){this.parties$=this.partyStore.loadPartyListAll()}redirectToEditPArtyForm(l){this.router.navigate(["party-list",l])}deleteParty(l){this.partyStore.deletePartyList(l),this.toastrService.success("deleted completed successfully!","Success")}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=u({type:n,selectors:[["app-party-table"]],standalone:!0,features:[x],decls:2,vars:1,consts:[[1,"overflow-x-auto"],[1,"min-w-full","bg-white"],[1,"py-2","px-4","border-b-2","border-gray-300"],[1,"self-center"],[4,"ngFor","ngForOf"],[1,"py-2","px-4","border-b"],[1,"bg-blue-500","text-white","py-1","px-3","rounded",3,"click"],[1,"bg-red-500","text-white","py-1","px-3","rounded","ml-2",3,"click"],[1,"flex","justify-center","items-center","h-full"],[1,"loader","ease-linear","rounded-full","border-4","border-t-4","border-gray-200","h-12","w-12"]],template:function(o,s){o&1&&g(0,D,22,1,"div",0)(1,A,2,0),o&2&&E(0,s.partyStore.loading()?1:0)},dependencies:[_,T,w],styles:["@keyframes _ngcontent-%COMP%_spinner{to{transform:rotate(360deg)}}.loader[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spinner .6s linear infinite;border-top-color:#3490dc}"]});let r=n;return r})();var X=(()=>{let n=class n{constructor(){this.router=d(b),this.partyService=d(F),this.partyStore=d(S)}ngOnInit(){}redirectToForm(){this.router.navigate(["party-form"])}};n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=u({type:n,selectors:[["app-party-list"]],standalone:!0,features:[x],decls:7,vars:0,consts:[[1,"m-5"],["type","button",1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:ring-blue-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-blue-600","dark:hover:bg-blue-700","focus:outline-none","dark:focus:ring-blue-800",3,"click"],[1,"text-2xl"]],template:function(o,s){o&1&&(e(0,"div",0)(1,"button",1),p("click",function(){return s.redirectToForm()}),i(2," Add New Party "),t()(),e(3,"div",0)(4,"h1",2),i(5,"Party List"),t(),f(6,"app-party-table"),t())},dependencies:[_,M]});let r=n;return r})();export{X as default};