(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{111:function(t,i,e){},112:function(t,i,e){},243:function(t,i,e){"use strict";var s=e(111);e.n(s).a},244:function(t,i,e){"use strict";var s=e(112);e.n(s).a},258:function(t,i,e){"use strict";e.r(i);var s=e(59),n=e(60),a=e(69);let l=class extends n.g{};Object(s.a)([Object(n.d)(Boolean)],l.prototype,"isVisible",void 0),l=Object(s.a)([Object(n.a)({components:{Button:a.a}})],l);var o=l,c=(e(243),e(1)),r={name:"Dialogs",components:{Dialog:Object(c.a)(o,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"dialog"},[e("div",{staticClass:"main"},[e("div",{staticClass:"header"},[t._v("\n        提示\n        "),e("button",{staticClass:"close",on:{click:function(i){return t.$emit("update:isVisible",!t.isVisible)}}})]),t._v(" "),e("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),e("div",{staticClass:"footer"},[e("Button",{attrs:{type:"danger"},on:{click:function(i){return t.$emit("update:isVisible",!t.isVisible)}}},[t._v("取消")]),t._v(" "),e("Button",{attrs:{type:"primary"},on:{click:function(i){return t.$emit("update:isVisible",!t.isVisible)}}},[t._v("确定")])],1)])])])}),[],!1,null,"647485f2",null).exports,Button:a.a},data:function(){return{visible:!1}}},u={name:"dialog-demo",components:{Dialogs:Object(c.a)(r,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("Button",{attrs:{type:"primary"},on:{click:function(i){t.visible=!t.visible}}},[t._v("打开Dialog")]),t._v(" "),e("Dialog",{attrs:{"is-visible":t.visible},on:{"update:isVisible":function(i){t.visible=i},"update:is-visible":function(i){t.visible=i}}},[e("span",[t._v("这是一段信息")])])],1)}),[],!1,null,"2880c02d",null).exports}},v=(e(244),Object(c.a)(u,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("Dialogs")],1)}),[],!1,null,"54f964a9",null));i.default=v.exports}}]);