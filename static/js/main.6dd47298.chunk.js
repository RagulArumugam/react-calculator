(this.webpackJsonpsample=this.webpackJsonpsample||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_RagulArumugam_Documents_ag_grid_custom_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(11),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__),App=function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(C_Users_RagulArumugam_Documents_ag_grid_custom_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],handleCalculation=function(_){var e=["+","-","*",".","/","%"];if(value){if(e.includes(_.target.innerText)&&e.includes(value.slice(-1)))return;setValue(value+_.target.innerText)}else e.includes(_.target.innerText)||setValue(_.target.innerText)},handleCalculate=function handleCalculate(){var operator=["+","-","*",".","/","%"];if(value&&!operator.includes(value.slice(-1))){var val="";try{val=eval(value.toString())}catch(err){return alert("Only Natural Numbers Are Allowed"),void setValue("")}if(0===val)return void setValue("");setValue(val.toString())}},handleClear=function(){setValue("")},handleDel=function(){value&&setValue(value.slice(0,-1))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"whole_container",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"calculator-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"output-screen",children:value||0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:"btn-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:function(){return handleClear()},children:"AC"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:function(){return handleDel()},children:"DEL"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"%"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"/"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"*"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"-"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"+"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-large",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,className:"btn-large",children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:handleCalculation,children:"."})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"btn btn-op",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{onClick:function(){return handleCalculate()},children:"="})})]})]})})};__webpack_exports__.a=App},,,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){"use strict";t.r(e);var n=t(1),c=t.n(n),a=t(3),r=t.n(a),l=(t(10),t(4)),i=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;t(_),n(_),c(_),a(_),r(_)}))},s=t(0);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(l.a,{})}),document.getElementById("root")),i()}],[[13,1,2]]]);
//# sourceMappingURL=main.6dd47298.chunk.js.map