(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{43:function(t,e,s){"use strict";s.r(e);var r=s(1),a=s(5),i=function(t){return!!t&&/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)},n=function(t,e){return t.length>=e};function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){c(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function c(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={mounted:function(){var t=this;this.loading=!0,this.$store.dispatch("data/loadDataFromServer","users").finally((function(){console.log("loaded"),t.loading=!1})),this.resetUser()},data:function(){return{loading:!1,saving:!1,showModal:!1,user:null,rules:{email:i,minLength:n},errors:{name:"",email:"",password:""}}},computed:l(l({},Object(r.c)("data",["users"])),{},{formIsValid:function(){return console.log(123),Object.values(this.errors).reduce((function(t,e){return t&&""===e}),!0)}}),methods:l(l({},Object(r.b)("data",["saveUserData"])),{},{editUser:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.showModal=!0,null!==t?this.user=l(l({},this.users[t]),{},{password:""}):this.resetUser(),this.validateUser()},saveUser:function(){var t=this;this.saving=!0,this.saveUserData(this.user).finally((function(){t.saving=!1,t.showModal=!1}))},resetUser:function(){this.user={name:"",email:"",password:""}},validateUser:function(){this.user.name.length?this.errors.name="":this.errors.name="Введите данные в поле",this.rules.email(this.user.email)?this.errors.email="":this.errors.email="Введите корректный email";var t=this.user.id&&0===this.user.password.length||this.rules.minLength(this.user.password,6);this.errors.password=t?"":"Пароль должен содержать не менее 6 символов"}}),components:{AppSpinner:a.a}},u=s(0),v=Object(u.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",[t._v("Пользователи")]),t._v(" "),t.loading?s("app-spinner"):s("table",{staticClass:"table table-hover mt-5"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Имя")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("email")])])]),t._v(" "),s("tbody",t._l(t.users,(function(e,r){return s("tr",{key:e.id,staticStyle:{cursor:"pointer"},on:{click:function(e){return t.editUser(r)}}},[s("td",[t._v(t._s(r+1))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))])])})),0)]),t._v(" "),s("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"button"},on:{click:function(e){return t.editUser()}}},[t._v("Создать")])],1)]),t._v(" "),t.showModal?s("div",{staticClass:"modal fade show",staticStyle:{display:"block"},attrs:{id:"staticBackdrop"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[t._v(t._s(t.user.id?"Редактирование":"Создание"))]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){t.showModal=!1}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[t._v("Имя")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.name,expression:"user.name",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.errors.name},attrs:{type:"text",id:"name"},domProps:{value:t.user.name},on:{change:t.validateUser,input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.errors.name?s("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.name)+"\n                        ")]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[t._v("Адрес электронной почты")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.email,expression:"user.email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.errors.email},attrs:{type:"email",id:"email"},domProps:{value:t.user.email},on:{change:t.validateUser,input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.errors.email?s("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.email)+"\n                        ")]):t._e()]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[t._v("Пароль")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.user.password,expression:"user.password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.errors.password},attrs:{type:"password",id:"password"},domProps:{value:t.user.password},on:{change:t.validateUser,input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.errors.password?s("div",{staticClass:"invalid-feedback"},[t._v("\n                            "+t._s(t.errors.password)+"\n                        ")]):t._e()])]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.saving||!t.formIsValid},on:{click:t.saveUser}},[t.saving?s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}):t._e(),t._v("\n                        "+t._s(t.saving?"Сохранение":"Сохранить")+"\n                    ")])])])])]):t._e()])}),[],!1,null,null,null);e.default=v.exports},5:function(t,e,s){"use strict";var r={},a=s(0),i=Object(a.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("div",{staticClass:"spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[this._v("Загрузка...")])])])}],!1,null,"36a0d4e2",null);e.a=i.exports}}]);