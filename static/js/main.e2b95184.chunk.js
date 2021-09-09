(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={list__item:"ContactListItem_list__item__2XXCl",list__btn:"ContactListItem_list__btn__2g9kR"}},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n(11),s=n.n(o),u=n(5),i=n(13),b=n(2),l=n(29),j=n.n(l),f=n(6),m=n(4),d=Object(b.b)("contacts/addRequests"),O=Object(b.b)("contacts/addSuccess"),p=Object(b.b)("contacts/addError"),_=Object(b.b)("contacts/deleteRequests"),h=Object(b.b)("contacts/deleteSuccess"),v=Object(b.b)("contacts/deleteError"),x=Object(b.b)("contacts/getRequests"),w=Object(b.b)("contacts/getSuccess"),C=Object(b.b)("contacts/getError"),y=Object(b.b)("contacts/FILTER"),k=Object(b.c)([],(c={},Object(f.a)(c,w,(function(t,e){return e.payload})),Object(f.a)(c,O,(function(t,e){var n=e.payload;return[].concat(Object(i.a)(t),[n])})),Object(f.a)(c,h,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),g=Object(b.c)("",Object(f.a)({},y,(function(t,e){return e.payload}))),N=Object(m.b)({items:k,filter:g}),L=function(t,e){return e.payload},E=function(){return null},R=Object(b.c)(null,(a={},Object(f.a)(a,x,E),Object(f.a)(a,C,L),Object(f.a)(a,d,E),Object(f.a)(a,p,L),Object(f.a)(a,_,E),Object(f.a)(a,v,L),a)),A=N,F=[].concat(Object(i.a)(Object(b.d)()),[j.a]),S=Object(b.a)({reducer:{contacts:A,error:R},middleware:F,devTools:!1}),q=n(20),z=n(63),D=n(7),I=n.n(D),T=n(14),B=n(10),J=n.n(B);J.a.defaults.baseURL="  http://localhost:4040";var P=function(t){var e=t.name,n=t.number,c=t.id;return J.a.post("/contacts",{name:e,number:n,id:c}).then((function(t){return t.data})).catch((function(t){throw t}))},Z=function(t){return J.a.delete("/contacts/".concat(t)).then((function(t){return t.data})).catch((function(t){throw t}))},X=function(t){return t.contacts.filter},M=function(t){return t.contacts.items},U=n(8),$=n.n(U),G=n(1);var H=function(){var t=Object(r.useState)(""),e=Object(q.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(q.a)(a,2),s=o[0],i=o[1],b=Object(u.b)(),l=Object(u.c)(M),j=Object(z.a)(),f=function(){b(function(t){var e=t.name,n=t.number,c=t.id;return function(){var t=Object(T.a)(I.a.mark((function t(a){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(d()),t.prev=1,t.next=4,P({name:e,number:n,id:c});case 4:r=t.sent,a(O(r)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(p(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}({name:n,number:s,id:j}))},m=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}};return Object(G.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();!function(t){return l.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(n)?f():alert("".concat(n," is already in contacts.")),c(""),i("")},children:[Object(G.jsxs)("label",{className:$.a.form__label,children:["Name",Object(G.jsx)("input",{className:$.a.form__input,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m})]}),Object(G.jsxs)("label",{className:$.a.form__label,children:["Phone number",Object(G.jsx)("input",{className:$.a.form__input,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m})]}),Object(G.jsx)("button",{className:$.a.form__btn,type:"submit",children:"Add contact"})]})},K=n(19),Q=n.n(K);var V=function(t){var e=t.id,n=t.name,c=t.number,a=t.onDeleteContact;return Object(G.jsxs)("li",{className:Q.a.list__item,children:[n,": ",c,Object(G.jsx)("button",{className:Q.a.list__btn,type:"button",onClick:function(){return a(e)},children:"Delete"})]})};var W=function(){var t=Object(u.c)(X),e=Object(u.c)(M),n=Object(u.b)();return Object(r.useEffect)((function(){n(function(){var t=Object(T.a)(I.a.mark((function t(e){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(x()),t.prev=1,t.next=4,J.a.get("/contacts").then((function(t){return t.data})).catch((function(t){throw t}));case 4:n=t.sent,e(w(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(C(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())}),[n]),Object(G.jsx)("ul",{children:e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(t){var e=t.name,c=t.id,a=t.number;return Object(G.jsx)(V,{name:e,number:a,onDeleteContact:function(){return n((t=c,function(){var e=Object(T.a)(I.a.mark((function e(n){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(_()),e.prev=1,e.next=4,Z(t);case 4:n(h(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(v(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()));var t}},c)}))})},Y=function(){var t=Object(u.c)(X),e=Object(u.b)();return Object(G.jsx)("div",{children:Object(G.jsxs)("label",{children:["Find contacts by name",Object(G.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(y(t.target.value))}})]})})};var tt=function(){return Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"Phonebook"}),Object(G.jsx)(H,{}),Object(G.jsx)("h2",{children:"Contacts"}),Object(G.jsx)(Y,{}),Object(G.jsx)(W,{})]})};n(60);s.a.render(Object(G.jsx)(u.a,{store:S,children:Object(G.jsx)(tt,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"ContactForm_form__REPcB",form__input:"ContactForm_form__input__2avT9",form__label:"ContactForm_form__label__3r5so",form__btn:"ContactForm_form__btn__30T5w"}}},[[61,1,2]]]);
//# sourceMappingURL=main.e2b95184.chunk.js.map