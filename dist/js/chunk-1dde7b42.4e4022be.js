(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dde7b42"],{3738:function(t,e,o){},"676a":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("CContainer",{staticClass:"d-flex align-items-center min-vh-100"},[o("CRow",{staticClass:"justify-content-center new-justify-content-center"},[o("CCol",{attrs:{md:"12"}},[o("CCardGroup",[o("CCard",{staticClass:"p-4"},[o("CHeaderBrand",{staticClass:"mx-auto",attrs:{src:"img/brand/workportal-logo.png",width:"190",height:"46",alt:"CoreUI Logo"}}),o("CCardBody",[o("CForm",[o("h1",[t._v("Login")]),o("p",{staticClass:"text-muted"},[t._v("Sign In to your account")]),o("CInput",{attrs:{placeholder:"Email",autocomplete:"username email"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:t.loginUser.email,callback:function(e){t.$set(t.loginUser,"email",e)},expression:"loginUser.email"}}),o("CInput",{attrs:{placeholder:"Password",type:"password",autocomplete:"curent-password"},scopedSlots:t._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:t.loginUser.password,callback:function(e){t.$set(t.loginUser,"password",e)},expression:"loginUser.password"}}),o("CRow",[o("CCol",{attrs:{col:"6"}},[o("CButton",{staticClass:"px-4",attrs:{color:"primary",disabled:t.loginUser.disabled},on:{click:t.login}},[t._v("Login ")])],1),o("CCol",{staticClass:"text-right",attrs:{col:"6"}})],1)],1)],1)],1)],1)],1)],1)],1)},r=[],a={name:"Login",data:function(){return{loginUser:{email:"",password:"",userType:0,disabled:!1}}},methods:{login:function(){var t=this,e=this;""==e.loginUser.email?this.$swal({type:"error",title:"error",text:"Please Enter Email",showConfirmButton:!0}):""==e.loginUser.password?this.$swal({type:"error",title:"error",text:"Please Enter Password",showConfirmButton:!0}):(e.loginUser.disabled=!0,axios.post(APP_URL+"/login",e.loginUser).then((function(o){e.loginUser.disabled=!1,window.localStorage.setItem("token",o.data.access_token),window.localStorage.setItem("user",JSON.stringify(o.data.user)),axios.defaults.headers.common["Authorization"]="Bearer "+o.data.access_token,t.$router.push("/dashboard")})).catch((function(o){e.loginUser.disabled=!1,t.$swal({type:"error",title:"error",text:o.response.data.message,showConfirmButton:!0})})))}}},n=a,i=(o("7eb8"),o("2877")),l=Object(i["a"])(n,s,r,!1,null,null,null);e["default"]=l.exports},"7eb8":function(t,e,o){"use strict";var s=o("3738"),r=o.n(s);r.a}}]);
//# sourceMappingURL=chunk-1dde7b42.4e4022be.js.map