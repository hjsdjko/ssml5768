(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/peijianxinxi/add-or-update"],{"20b3":function(n,e,i){"use strict";var t;i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}));var r=function(){var n=this,e=n.$createElement;n._self._c},a=[]},"2c64":function(n,e,i){"use strict";var t=i("6fc2"),r=i.n(t);r.a},"6fc2":function(n,e,i){},"733a":function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,i,t,r,a,u){try{var c=n[a](u),o=c.value}catch(s){return void i(s)}c.done?e(o):Promise.resolve(o).then(t,r)}function u(n){return function(){var e=this,i=arguments;return new Promise((function(t,r){var u=n.apply(e,i);function c(n){a(u,t,r,c,o,"next",n)}function o(n){a(u,t,r,c,o,"throw",n)}c(void 0)}))}}var c=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("8c56"))}.bind(null,i)).catch(i.oe)},o={data:function(){return{ruleForm:{peijianbianhao:this.getUUID(),peijianmingcheng:"",peijianleixing:"",peijianxinxi:"",peijiantupian:"",shengchandi:"",mendianmingcheng:"",thumbsupnum:"",crazilynum:"",price:""},peijianleixingOptions:[],peijianleixingIndex:0,mendianmingchengOptions:[],mendianmingchengIndex:0,user:{},ro:{peijianbianhao:!1,peijianmingcheng:!1,peijianleixing:!1,peijianxinxi:!1,peijiantupian:!1,shengchandi:!1,mendianmingcheng:!1,thumbsupnum:!1,crazilynum:!1,price:!1}}},components:{wPicker:c},computed:{},onLoad:function(e){var i=this;return u(t.default.mark((function r(){var a,u,c,o;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=n.getStorageSync("nowTable"),r.next=3,i.$api.session(a);case 3:return u=r.sent,i.user=u.data,i.peijianleixingOptions="车身类,底盘类,发动机类,变速器类,电器类,其它".split(","),r.next=8,i.$api.option("mendianxinxi","mendianmingcheng",{});case 8:if(u=r.sent,i.mendianmingchengOptions=u.data,i.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(i.ruleForm.refid=e.refid),!e.id){r.next=18;break}return i.ruleForm.id=e.id,r.next=16,i.$api.info("peijianxinxi",i.ruleForm.id);case 16:u=r.sent,i.ruleForm=u.data;case 18:if(!e.cross){r.next=65;break}c=n.getStorageSync("crossObj"),r.t0=t.default.keys(c);case 21:if((r.t1=r.t0()).done){r.next=65;break}if(o=r.t1.value,"peijianbianhao"!=o){r.next=27;break}return i.ruleForm.peijianbianhao=c[o],i.ro.peijianbianhao=!0,r.abrupt("continue",21);case 27:if("peijianmingcheng"!=o){r.next=31;break}return i.ruleForm.peijianmingcheng=c[o],i.ro.peijianmingcheng=!0,r.abrupt("continue",21);case 31:if("peijianleixing"!=o){r.next=35;break}return i.ruleForm.peijianleixing=c[o],i.ro.peijianleixing=!0,r.abrupt("continue",21);case 35:if("peijianxinxi"!=o){r.next=39;break}return i.ruleForm.peijianxinxi=c[o],i.ro.peijianxinxi=!0,r.abrupt("continue",21);case 39:if("peijiantupian"!=o){r.next=43;break}return i.ruleForm.peijiantupian=c[o],i.ro.peijiantupian=!0,r.abrupt("continue",21);case 43:if("shengchandi"!=o){r.next=47;break}return i.ruleForm.shengchandi=c[o],i.ro.shengchandi=!0,r.abrupt("continue",21);case 47:if("mendianmingcheng"!=o){r.next=51;break}return i.ruleForm.mendianmingcheng=c[o],i.ro.mendianmingcheng=!0,r.abrupt("continue",21);case 51:if("thumbsupnum"!=o){r.next=55;break}return i.ruleForm.thumbsupnum=c[o],i.ro.thumbsupnum=!0,r.abrupt("continue",21);case 55:if("crazilynum"!=o){r.next=59;break}return i.ruleForm.crazilynum=c[o],i.ro.crazilynum=!0,r.abrupt("continue",21);case 59:if("price"!=o){r.next=63;break}return i.ruleForm.price=c[o],i.ro.price=!0,r.abrupt("continue",21);case 63:r.next=21;break;case 65:i.styleChange();case 66:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},peijianleixingChange:function(n){this.peijianleixingIndex=n.target.value,this.ruleForm.peijianleixing=this.peijianleixingOptions[this.peijianleixingIndex]},mendianmingchengChange:function(n){this.mendianmingchengIndex=n.target.value,this.ruleForm.mendianmingcheng=this.mendianmingchengOptions[this.mendianmingchengIndex]},peijiantupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.peijiantupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.ruleForm.peijianbianhao){e.next=3;break}return n.$utils.msg("配件编号不能为空"),e.abrupt("return");case 3:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){e.next=6;break}return n.$utils.msg("赞应输入整数"),e.abrupt("return");case 6:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){e.next=9;break}return n.$utils.msg("踩应输入整数"),e.abrupt("return");case 9:if(n.ruleForm.price){e.next=12;break}return n.$utils.msg("价格不能为空"),e.abrupt("return");case 12:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){e.next=15;break}return n.$utils.msg("价格应输入数字"),e.abrupt("return");case 15:if(!n.ruleForm.id){e.next=20;break}return e.next=18,n.$api.update("peijianxinxi",n.ruleForm);case 18:e.next=22;break;case 20:return e.next=22,n.$api.add("peijianxinxi",n.ruleForm);case 22:n.$utils.msgBack("提交成功");case 23:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"start"===n?i-=60:"end"===n&&(i+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(i,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,i("543d")["default"])},a2ff:function(n,e,i){"use strict";i.r(e);var t=i("733a"),r=i.n(t);for(var a in t)"default"!==a&&function(n){i.d(e,n,(function(){return t[n]}))}(a);e["default"]=r.a},a4eb:function(n,e,i){"use strict";i.r(e);var t=i("20b3"),r=i("a2ff");for(var a in r)"default"!==a&&function(n){i.d(e,n,(function(){return r[n]}))}(a);i("2c64");var u,c=i("f0c5"),o=Object(c["a"])(r["default"],t["b"],t["c"],!1,null,"06d73e50",null,!1,t["a"],u);e["default"]=o.exports},d144:function(n,e,i){"use strict";(function(n){i("fbee");t(i("66fd"));var e=t(i("a4eb"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,i("543d")["createPage"])}},[["d144","common/runtime","common/vendor"]]]);