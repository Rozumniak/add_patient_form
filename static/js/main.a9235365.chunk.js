(this["webpackJsonpclient-form"]=this["webpackJsonpclient-form"]||[]).push([[0],{175:function(e,A,n){"use strict";n.r(A);var t=n(0),a=n.n(t),s=n(61),c=n.n(s),l=(n(72),n(12)),r=(n(73),n(67)),o=n(6),i=n.n(o),d=n(7),u=n(1);function m(e){var A=d.b().shape({name:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),secondName:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),birthDate:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),sex:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),telephoneNumber:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),sms:d.a().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c boolean").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),zip:d.c().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439")});return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)("div",{className:"content",children:Object(u.jsx)(r.a,{initialValues:{name:"",secondName:"",patronymic:"",birthDate:"",sex:"",telephoneNumber:"",sms:!1,country:"",region:"",city:"",street:"",streetNumber:"",zip:"",serial:"",number:"",subdivision:"",issueDate:""},validateOnBlur:!0,onSubmit:function(A){e.submitSuccess(A)},validationSchema:A,children:function(e){var A=e.values,n=e.errors,t=e.touched,a=e.handleChange,s=e.handleBlur,c=e.isValid,l=e.handleSubmit,r=e.dirty;return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsxs)("div",{className:i()("form__block","generalInfo"),children:[Object(u.jsxs)("label",{className:"label",children:["\u0417\u0410\u041f\u041e\u041b\u041d\u0418\u0422\u0415 \u0424\u041e\u0420\u041c\u0423",Object(u.jsx)("br",{}),"* \u043f\u043e\u043b\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"]}),Object(u.jsx)("input",{className:"generalInfo__input",type:"text",name:"secondName",onChange:a,onBlur:s,value:A.secondName,placeholder:" *\u0424\u0430\u043c\u0438\u043b\u0438\u044f"}),t.secondName&&n.secondName&&Object(u.jsx)("p",{className:"error",children:n.secondName}),Object(u.jsx)("input",{className:"generalInfo__input",type:"text",name:"name",onChange:a,onBlur:s,value:A.name,placeholder:" *\u0418\u043c\u044f"}),t.name&&n.name&&Object(u.jsx)("p",{className:"error",children:n.name}),Object(u.jsx)("input",{className:"generalInfo__input",type:"text",name:"patronymic",onChange:a,onBlur:s,value:A.patronymic,placeholder:" \u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(u.jsxs)("div",{className:i()("generalInfo__flexRow","row"),children:[Object(u.jsx)("input",{className:"row__item left calendar",type:"date",name:"birthDate",onChange:a,onBlur:s,value:A.birthDate,placeholder:" *\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"}),Object(u.jsx)("input",{className:"row__item",type:"text",name:"sex",onChange:a,onBlur:s,value:A.sex,placeholder:" *\u041f\u043e\u043b"})]}),t.birthDate&&n.birthDate&&Object(u.jsx)("p",{className:"error",children:n.birthDate}),t.sex&&n.sex&&Object(u.jsx)("p",{className:"error",children:n.sex}),Object(u.jsx)("input",{className:"generalInfo__input",type:"text",name:"telephoneNumber",onChange:a,onBlur:s,value:A.telephoneNumber,placeholder:" *\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),t.telephoneNumber&&n.telephoneNumber&&Object(u.jsx)("p",{className:"error",children:n.telephoneNumber}),Object(u.jsxs)("select",{className:i()("generalInfo__select"),children:[Object(u.jsx)("option",{children:"*\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432"}),Object(u.jsx)("option",{children:"VIP"}),Object(u.jsx)("option",{children:"\u041e\u041c\u0421"}),Object(u.jsx)("option",{children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u044b\u0435"})]}),Object(u.jsxs)("select",{className:i()("generalInfo__select"),children:[Object(u.jsx)("option",{children:"*\u041b\u0435\u0447\u0430\u0449\u0438\u0439 \u0432\u0440\u0430\u0447"}),Object(u.jsx)("option",{children:"\u041f\u0435\u0442\u0440\u043e\u0432 \u0410. \u0410."}),Object(u.jsx)("option",{children:"\u0421\u0438\u0434\u043e\u0440\u043e\u0432 \u0412. \u0412."}),Object(u.jsx)("option",{children:"\u0421\u044b\u0440\u043a\u0438\u043d\u0430 \u0412. \u0412."})]}),Object(u.jsxs)("div",{className:i()("generalInfo__flexRow"),children:[Object(u.jsx)("input",{className:"row__item",type:"checkbox",name:"sms",onChange:a,onBlur:s,value:A.sms}),t.sms&&n.sms&&Object(u.jsx)("p",{className:"error",children:n.sms}),Object(u.jsx)("div",{className:"row__item",children:"\u041d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0421\u041c\u0421"})]})]}),Object(u.jsxs)("div",{className:i()("form__block","adressInfo"),children:[Object(u.jsx)("label",{className:"adressInfo__label small__label",children:"\u0410\u0434\u0440\u0435\u0441:"}),Object(u.jsx)("input",{className:"adressInfo__input",name:"country",onChange:a,onBlur:s,value:A.country,placeholder:"\u0421\u0442\u0440\u0430\u043d\u0430"}),Object(u.jsx)("input",{className:"adressInfo__input",onChange:a,onBlur:s,value:A.region,name:"region",placeholder:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c"}),Object(u.jsx)("input",{className:"adressInfo__input",onChange:a,onBlur:s,value:A.city,name:"city",placeholder:"\u0413\u043e\u0440\u043e\u0434"}),Object(u.jsxs)("div",{className:i()("adressInfo__flexRow","row"),children:[Object(u.jsx)("input",{className:"row__item left",onChange:a,onBlur:s,value:A.street,name:"street",placeholder:"\u0423\u043b\u0438\u0446\u0430"}),Object(u.jsx)("input",{className:"row__item",onChange:a,onBlur:s,value:A.streetNumber,name:"streetNumber",placeholder:"\u0414\u043e\u043c"})]}),Object(u.jsx)("input",{className:"adressInfo__input",name:"zip",onChange:a,onBlur:s,value:A.zip,placeholder:"\u0418\u043d\u0434\u0435\u043a\u0441"})]}),Object(u.jsx)("label",{className:"adressInfo__label small__label",children:"\u0414\u0430\u043d\u043d\u044b\u0435:"}),Object(u.jsxs)("select",{className:"adressInfo__select",children:[Object(u.jsx)("option",{children:"*\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430"}),Object(u.jsx)("option",{children:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442"}),Object(u.jsx)("option",{children:"\u0432\u0438\u0434\u0435\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u0438"}),Object(u.jsx)("option",{children:"\u0412\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0443\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435"})]}),Object(u.jsxs)("div",{className:i()("adressInfo__flexRow","row"),children:[Object(u.jsx)("input",{className:"row__item left",onChange:a,onBlur:s,value:A.serial,name:"serial",placeholder:"\u0421\u0435\u0440\u0438\u044f"}),Object(u.jsx)("input",{className:"row__item",placeholder:"\u041d\u043e\u043c\u0435\u0440",onChange:a,onBlur:s,value:A.number,name:"number"})]}),Object(u.jsx)("input",{className:"adressInfo__input",onChange:a,onBlur:s,value:A.subdivision,name:"subdivision",placeholder:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d"}),Object(u.jsx)("input",{className:"adressInfo__input",onChange:a,onBlur:s,value:A.issueDate,name:"issueDate",placeholder:" *\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438"}),Object(u.jsx)("button",{className:"form__button",type:"submit",disabled:!c||!r,onClick:l,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}})})})}var j=function(e){var A=e.isSubmited,n=e.setSubmited,t=e.children;return Object(u.jsx)("div",{className:A?"modal active":"modal",onClick:function(){return n(!1)},children:Object(u.jsx)("div",{className:A?"modal__content active":"modal__content",onClick:function(e){return e.stopPropagation()},children:t})})},b=function(){var e=Object(t.useState)(!1),A=Object(l.a)(e,2),n=A[0],a=A[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{submitSuccess:function(e){a(!0),localStorage.setItem("values",JSON.stringify(e)),console.log(JSON.parse(localStorage.getItem("values")))}}),Object(u.jsxs)(j,{isSubmited:n,setSubmited:a,children:[Object(u.jsx)("button",{className:"modal__button",onClick:function(){return a(!1)},children:Object(u.jsx)("img",{className:"modal__button img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAKtQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////NIuSVgAAADd0Uk5TAAQ4Jxk/DenVIrj4cNTZQCO7Tj7Y3b/rXAHcuu1dAtcDJb7qPULsWiHaydvuW+ZB5dYYN/R6HPvJuFoAAAABYktHRDigB6XWAAAACXBIWXMAAAAnAAAAJwEqCZFPAAABk0lEQVRYw+2V21LCQBBEYzDEIIZAoiAQo1xEUbzj/P+fuVQEMZnd6VWfrO3X3Zrq6TrV43lOTk5OSgd+A/t4GDSN7354FCBzotZx2/ihcUJxR56TdCnsmb+kGZ2Kk5Iz6g/OhU/BkGJhu2hE4/xCtB1kVBg9RV3q55fy/l5aUJbqn69UPgPZz6cn/XbRhKa5lM9Ws5iGc42fCV0v0DlquyFlbE4q5z64V6m5SpzZTuU8XdjMUTkVDJnJiEI4n912dTIhDhlPVTJBDplJ38mEOWS22yfTgkPW03Y7Kw7r2pFpySGzXUmmNYd1bcic3YysOWRyKuh2+QMOmZzuiO5Xv5/jRUuih8c/mNOl8ZPQmYg2HK46z8bOhPyUHBo7E/Kz5dDQmZCfLw61nQnN2e9DTWciqvQh25nQnGofQteczafah8A1Z/Op96F4zevS9KFwzRk/uj60JNPQh1ZkGvvQgkzhLsNkincZJBO4yxCZ0F0GyHxpQXd5Q+ar+ccbdpcVmWvjh2a7h90vf/0O/XNycvr3+gA7bzILtD8tZgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0xNFQxMDozNTowMiswMTowMPVk2sUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMTRUMTA6MzU6MDIrMDE6MDCEOWJ5AAAARnRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA2LjcuOC05IDIwMTYtMDYtMTYgUTE2IGh0dHA6Ly93d3cuaW1hZ2VtYWdpY2sub3Jn5r80tgAAABh0RVh0VGh1bWI6OkRvY3VtZW50OjpQYWdlcwAxp/+7LwAAABh0RVh0VGh1bWI6OkltYWdlOjpoZWlnaHQANTEywNBQUQAAABd0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA1MTIcfAPcAAAAGXRFWHRUaHVtYjo6TWltZXR5cGUAaW1hZ2UvcG5nP7JWTgAAABd0RVh0VGh1bWI6Ok1UaW1lADE0ODcwNjQ5MDLbRkqKAAAAE3RFWHRUaHVtYjo6U2l6ZQAzLjM2S0JCgTW0lAAAAE90RVh0VGh1bWI6OlVSSQBmaWxlOi8vLi91cGxvYWRzL2Nhcmxvc3ByZXZpL2t3Z05KY04vMTE1Ny8xNDg3MDg2MzQ1LWNyb3NzXzgxNTc3LnBuZxelIxsAAAAASUVORK5CYII="})}),Object(u.jsx)("p",{children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d"})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,176)).then((function(A){var n=A.getCLS,t=A.getFID,a=A.getFCP,s=A.getLCP,c=A.getTTFB;n(e),t(e),a(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root")),h()},72:function(e,A,n){},73:function(e,A,n){}},[[175,1,2]]]);
//# sourceMappingURL=main.a9235365.chunk.js.map