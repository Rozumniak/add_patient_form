(this["webpackJsonpclient-form"]=this["webpackJsonpclient-form"]||[]).push([[0],{175:function(e,t,A){"use strict";A.r(t);var n=A(0),c=A.n(n),a=A(61),l=A.n(a),r=(A(72),A(3)),s=(A(73),A(67)),o=A(12),i=A.n(o),u=A(4),d=A(1);function m(e){var t=u.b().shape({name:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),secondName:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),birthDate:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),sex:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),telephoneNumber:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),sms:u.a().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c boolean").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),zip:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439"),typeOfPatient:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),doctor:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),document:u.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}),A=Object(n.useState)(""),c=Object(r.a)(A,2),a=c[0],l=c[1],o=Object(n.useState)(!1),m=Object(r.a)(o,2),b=m[0],p=m[1],h=Object(n.useState)(""),O=Object(r.a)(h,2),N=O[0],x=O[1],_=Object(n.useState)(!1),g=Object(r.a)(_,2),f=g[0],v=g[1],B=Object(n.useState)(""),C=Object(r.a)(B,2),y=C[0],V=C[1],G=Object(n.useState)(!1),S=Object(r.a)(G,2),I=S[0],R=S[1],E=function(e,t,A,n,c){e.preventDefault(),"patient"===c?(l(t),p(!1)):"doctor"===c?(x(t),v(!1)):"document"===c&&(V(t),R(!1)),A(n,t)},W=["VIP","\u041e\u041c\u0421","\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0435"];return Object(d.jsx)("div",{className:"wrapper",children:Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(s.a,{initialValues:{name:"",secondName:"",patronymic:"",birthDate:"",sex:"",telephoneNumber:"",sms:!1,country:"",region:"",city:"",street:"",streetNumber:"",zip:"",serial:"",number:"",subdivision:"",issueDate:"",typeOfPatient:"",doctor:"",document:""},validateOnBlur:!0,onSubmit:function(t){e.submitSuccess(t)},validationSchema:t,children:function(e){var t=e.values,A=e.errors,n=e.touched,c=e.handleChange,r=e.handleBlur,s=e.isValid,o=e.handleSubmit,u=e.dirty,m=e.setFieldValue;return Object(d.jsxs)("form",{className:"form",children:[Object(d.jsxs)("div",{className:i()("form__block","generalInfo"),children:[Object(d.jsxs)("label",{className:"label",children:["\u0417\u0410\u041f\u041e\u041b\u041d\u0418\u0422\u0415 \u0424\u041e\u0420\u041c\u0423",Object(d.jsx)("br",{}),"* \u043f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"]}),Object(d.jsx)("input",{className:"generalInfo__input",type:"text",name:"secondName",onChange:c,onBlur:r,value:t.secondName,placeholder:" *\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),n.secondName&&A.secondName&&Object(d.jsx)("p",{className:"error",children:A.secondName}),Object(d.jsx)("input",{className:"generalInfo__input",type:"text",name:"name",onChange:c,onBlur:r,value:t.name,placeholder:" *\u0418\u043c\u044f"}),n.name&&A.name&&Object(d.jsx)("p",{className:"error",children:A.name}),Object(d.jsx)("input",{className:"generalInfo__input",type:"text",name:"patronymic",onChange:c,onBlur:r,value:t.patronymic,placeholder:" \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(d.jsxs)("div",{className:i()("generalInfo__flexRow","row"),children:[Object(d.jsx)("input",{className:"row__item left calendar",type:"date",name:"birthDate",onChange:c,onBlur:r,value:t.birthDate,placeholder:" *\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(d.jsx)("input",{className:"row__item",type:"text",name:"sex",onChange:c,onBlur:r,value:t.sex,placeholder:" *\u041f\u043e\u043b"})]}),n.birthDate&&A.birthDate&&Object(d.jsx)("p",{className:"error",children:A.birthDate}),n.sex&&A.sex&&Object(d.jsx)("p",{className:"error",children:A.sex}),Object(d.jsx)("input",{className:"generalInfo__input",type:"text",name:"telephoneNumber",onChange:c,onBlur:r,value:t.telephoneNumber,placeholder:" *\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),n.telephoneNumber&&A.telephoneNumber&&Object(d.jsx)("p",{className:"error",children:A.telephoneNumber}),Object(d.jsxs)(j,{selectedGroup:a,setSelectedGroup:l,setFieldValue:m,selectorOpen:b,setSelectorOpen:p,setSelectorValue:E,arr:W,selectorName:"*\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",children:[Object(d.jsx)("label",{className:a===W[0]?"clientGroup__label active":"none",onClick:function(e){return E(e,W[0],m,"typeOfPatient","patient")},children:W[0]}),Object(d.jsx)("label",{className:a===W[1]?"clientGroup__label active":"none",onClick:function(e){return E(e,W[1],m,"typeOfPatient","patient")},children:W[1]}),Object(d.jsx)("label",{className:a===W[2]?"clientGroup__label active":"none",onClick:function(e){return E(e,W[2],m,"typeOfPatient","patient")},children:W[2]})]}),A.typeOfPatient&&Object(d.jsx)("p",{className:"error",children:A.typeOfPatient}),Object(d.jsxs)(j,{selectedGroup:N,setSelectedGroup:x,setFieldValue:m,selectorOpen:f,setSelectorOpen:v,setSelectorValue:E,arr:W,selectorName:"*\u041b\u0435\u0447\u0430\u0449\u0438\u0439 \u0432\u0440\u0430\u0447",children:[Object(d.jsx)("label",{className:"\u0418\u0432\u0430\u043d\u043e\u0432 \u041f. \u0421."===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u0418\u0432\u0430\u043d\u043e\u0432 \u041f. \u0421.",m,"doctor","doctor")},children:"\u0418\u0432\u0430\u043d\u043e\u0432 \u041f. \u0421."}),Object(d.jsx)("label",{className:"\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0430 \u041c. \u0424."===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0430 \u041c. \u0424.",m,"doctor","doctor")},children:"\u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0430 \u041c. \u0424."}),Object(d.jsx)("label",{className:"\u041a\u0440\u0438\u0432\u043e\u0440\u0443\u0447\u0435\u043d\u043a\u043e \u0421. \u041d."===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u041a\u0440\u0438\u0432\u043e\u0440\u0443\u0447\u0435\u043d\u043a\u043e \u0421. \u041d.",m,"doctor","doctor")},children:"\u041a\u0440\u0438\u0432\u043e\u0440\u0443\u0447\u0435\u043d\u043a\u043e \u0421. \u041d."})]}),A.doctor&&Object(d.jsx)("p",{className:"error",children:A.doctor}),Object(d.jsxs)("div",{className:i()("generalInfo__flexRow","sms"),children:[Object(d.jsx)("input",{className:"row__item_sms left",type:"checkbox",name:"sms",onChange:c,onBlur:r,value:t.sms}),n.sms&&A.sms&&Object(d.jsx)("p",{className:"error",children:A.sms}),Object(d.jsx)("div",{className:"row__item_sms",children:"\u041d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0421\u041c\u0421"})]})]}),Object(d.jsxs)("div",{className:i()("form__block","adressInfo"),children:[Object(d.jsx)("label",{className:"adressInfo__label small__label",children:"\u0410\u0434\u0440\u0435\u0441:"}),Object(d.jsx)("input",{className:"adressInfo__input",name:"country",onChange:c,onBlur:r,value:t.country,placeholder:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(d.jsx)("input",{className:"adressInfo__input",onChange:c,onBlur:r,value:t.region,name:"region",placeholder:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c"}),Object(d.jsx)("input",{className:"adressInfo__input",onChange:c,onBlur:r,value:t.city,name:"city",placeholder:"\u0413\u043e\u0440\u043e\u0434"}),Object(d.jsxs)("div",{className:i()("adressInfo__flexRow","row"),children:[Object(d.jsx)("input",{className:"row__item left",onChange:c,onBlur:r,value:t.street,name:"street",placeholder:"\u0423\u043b\u0438\u0446\u0430"}),Object(d.jsx)("input",{className:"row__item",onChange:c,onBlur:r,value:t.streetNumber,name:"streetNumber",placeholder:"\u0414\u043e\u043c"})]}),Object(d.jsx)("input",{className:"adressInfo__input",name:"zip",onChange:c,onBlur:r,value:t.zip,placeholder:"\u0418\u043d\u0434\u0435\u043a\u0441"})]}),Object(d.jsx)("label",{className:"adressInfo__label small__label",children:"\u0414\u0430\u043d\u043d\u044b\u0435:"}),Object(d.jsxs)(j,{selectedGroup:y,setSelectedGroup:V,setFieldValue:m,selectorOpen:I,setSelectorOpen:R,setSelectorValue:E,arr:W,selectorName:"*\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",children:[Object(d.jsx)("label",{className:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u041f\u0430\u0441\u043f\u043e\u0440\u0442",m,"document","document")},children:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"}),Object(d.jsx)("label",{className:"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438"===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438",m,"document","document")},children:"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438"}),Object(d.jsx)("label",{className:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435"===a?"clientGroup__label active":"none",onClick:function(e){return E(e,"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435",m,"document","document")},children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435"})]}),A.document&&Object(d.jsx)("p",{className:"error",children:A.document}),Object(d.jsxs)("div",{className:i()("adressInfo__flexRow","row"),children:[Object(d.jsx)("input",{className:"row__item left",onChange:c,onBlur:r,value:t.serial,name:"serial",placeholder:"\u0421\u0435\u0440\u0438\u044f"}),Object(d.jsx)("input",{className:"row__item",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:c,onBlur:r,value:t.number,name:"number"})]}),Object(d.jsx)("input",{className:"adressInfo__input",onChange:c,onBlur:r,value:t.subdivision,name:"subdivision",placeholder:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d"}),Object(d.jsx)("input",{className:"adressInfo__input",onChange:c,onBlur:r,value:t.issueDate,name:"issueDate",placeholder:" *\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(d.jsx)("button",{className:"form__button",type:"submit",disabled:!s||!u,onClick:o,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}})})})}var b=function(e){var t=e.isSubmited,A=e.setSubmited,n=e.children;return Object(d.jsx)("div",{className:t?"modal active":"modal",onClick:function(){return A(!1)},children:Object(d.jsx)("div",{className:t?"modal__content active":"modal__content",onClick:function(e){return e.stopPropagation()},children:n})})},j=function(e){var t=e.selectedGroup,A=(e.setSelectorValue,e.setFieldValue,e.arr,e.selectorName),n=e.selectorOpen,c=e.setSelectorOpen,a=e.children;return Object(d.jsxs)("div",{children:[n?Object(d.jsxs)("div",{className:"form__select clientGroup",onClick:function(){return c(!1)},children:[Object(d.jsx)("label",{className:"clientGroup__label",children:""===t?A:t}),Object(d.jsx)("img",{className:"clientGroup__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgBrdLbCQAgCAVQa5M2a7PcrFFMf0V80YW4EHLwQ4BEiGjDjzB0+F3paHZGENfgLOkM6G2E6g/LoAW1QA8qgRkoBVYgF+xAJigH2YUUuB8SY3pyKl0+RgAAAABJRU5ErkJggg=="})]}):Object(d.jsxs)("div",{className:"form__select clientGroup",onClick:function(){return c(!0)},children:[Object(d.jsx)("label",{className:"clientGroup__label",children:""===t?A:t}),Object(d.jsx)("img",{className:"clientGroup__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABVSURBVHgBpZC7DQAgCETFiRzJDV3FDRwFKaQwiny8hALCPcgBIpZEAoCegmJGXn3jQRDUtgHV8AJFnxeo7luB5sPaojsSyRDN9jCGQRdg/QJJH740AU50pRbNHu2wAAAAAElFTkSuQmCC"})]}),n?Object(d.jsx)("div",{className:"clientGroup__list",children:a}):null]})},p=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),A=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{submitSuccess:function(e){c(!0),localStorage.setItem("values",JSON.stringify(e)),console.log(JSON.parse(localStorage.getItem("values")))}}),Object(d.jsxs)(b,{isSubmited:A,setSubmited:c,children:[Object(d.jsx)("button",{className:"modal__button",onClick:function(){return c(!1)},children:Object(d.jsx)("img",{className:"modal__button img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAKtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////NIuSVgAAADd0Uk5TAAQ4Jxk/DenVIrj4cNTZQCO7Tj7Y3b/rXAHcuu1dAtcDJb7qPULsWiHaydvuW+ZB5dYYN/R6HPvJuFoAAAABYktHRDigB6XWAAAACXBIWXMAAAAnAAAAJwEqCZFPAAABk0lEQVRYw+2V21LCQBBEYzDEIIZAoiAQo1xEUbzj/P+fuVQEMZnd6VWfrO3X3Zrq6TrV43lOTk5OSgd+A/t4GDSN7354FCBzotZx2/ihcUJxR56TdCnsmb+kGZ2Kk5Iz6g/OhU/BkGJhu2hE4/xCtB1kVBg9RV3q55fy/l5aUJbqn69UPgPZz6cn/XbRhKa5lM9Ws5iGc42fCV0v0DlquyFlbE4q5z64V6m5SpzZTuU8XdjMUTkVDJnJiEI4n912dTIhDhlPVTJBDplJ38mEOWS22yfTgkPW03Y7Kw7r2pFpySGzXUmmNYd1bcic3YysOWRyKuh2+QMOmZzuiO5Xv5/jRUuih8c/mNOl8ZPQmYg2HK46z8bOhPyUHBo7E/Kz5dDQmZCfLw61nQnN2e9DTWciqvQh25nQnGofQteczafah8A1Z/Op96F4zevS9KFwzRk/uj60JNPQh1ZkGvvQgkzhLsNkincZJBO4yxCZ0F0GyHxpQXd5Q+ar+ccbdpcVmWvjh2a7h90vf/0O/XNycvr3+gA7bzILtD8tZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0xNFQxMDozNTowMiswMTowMPVk2sUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMTRUMTA6MzU6MDIrMDE6MDCEOWJ5AAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTYtMDYtMTYgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn5r80tgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE0ODcwNjQ5MDLbRkqKAAAAE3RFWHRUaHVtYjo6U2l6ZQAzLjM2S0JCgTW0lAAAAE90RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzL2Nhcmxvc3ByZXZpL2t3Z05KY04vMTE1Ny8xNDg3MDg2MzQ1LWNyb3NzXzgxNTc3LnBuZxelIxsAAAAASUVORK5CYII="})}),Object(d.jsx)("p",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d"})]})]})},h=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,176)).then((function(t){var A=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;A(e),n(e),c(e),a(e),l(e)}))};l.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()},72:function(e,t,A){},73:function(e,t,A){}},[[175,1,2]]]);
//# sourceMappingURL=main.dc5f1481.chunk.js.map