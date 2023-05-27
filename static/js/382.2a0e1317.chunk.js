"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[382],{1382:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var r=t(8174),a=t(2791),o=t(9434),i=t(4217),c=t(3634),u="NOT_FOUND";var s=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?s:r,o=t.maxSize,i=void 0===o?1:o,c=t.resultEqualityCheck,l=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),f=1===i?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(l):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return u}return{get:r,put:function(e,a){r(e)===u&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(i,l);function d(){var e=f.get(arguments);if(e===u){if(e=n.apply(null,arguments),c){var t=f.getEntries(),r=t.find((function(n){return c(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function f(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function d(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var o,i=0,c={memoizeOptions:void 0},u=r.pop();if("object"===typeof u&&(c=u,u=r.pop()),"function"!==typeof u)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof u+"]");var s=c,l=s.memoizeOptions,d=void 0===l?t:l,m=Array.isArray(d)?d:[d],p=f(r),h=n.apply(void 0,[function(){return i++,u.apply(null,arguments)}].concat(m)),v=n((function(){for(var n=[],e=p.length,t=0;t<e;t++)n.push(p[t].apply(null,arguments));return o=h.apply(null,n)}));return Object.assign(v,{resultFunc:u,memoizedResultFunc:h,dependencies:p,lastResult:function(){return o},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),v};return a}var m=d(l),p=function(n){return n.contactData.contacts},h=function(n){return n.contactData.status},v=function(n){return n.contactData.error},x=function(n){return n.contactData.filter},g=m([p,x],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().trim().includes(e.toLowerCase())}))})),b=t(1413),y=t(7689),j=t(184);var w=function(n,e){return function(t){return(0,o.v9)(i.Qb)?(0,j.jsx)(n,(0,b.Z)({},t)):(0,j.jsx)(y.Fg,{to:e})}},C=t(2636),k=t(9439),A=t(6382),Z=t(2794),N=t(5728);function z(){var n=(0,a.useState)(""),e=(0,k.Z)(n,2),t=e[0],i=e[1],u=(0,a.useState)(""),s=(0,k.Z)(u,2),l=s[0],f=s[1],d=(0,o.I0)(),m=(0,o.v9)(p);function h(n){var e=n.currentTarget,t=e.name,r=e.value;"name"===t&&i(r),"number"===t&&f(r)}var v=(0,A.x0)(),x=(0,A.x0)();return(0,j.jsxs)("form",{onSubmit:function(n){n.preventDefault(),m.some((function(n){return n.name.toLowerCase().trim()===t.toLowerCase().trim()}))?r.Am.warning("Contact ".concat(t," is already exists!")):(d((0,c.md)({name:t.trim(),number:l})),r.Am.success("Contact ".concat(t," successful existed!")),i(""),f(""))},children:[(0,j.jsx)(Z._,{htmlFor:v,children:"Name"}),(0,j.jsx)(Z.I,{type:"text",name:"name",id:v,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:h,required:!0}),(0,j.jsx)(Z._,{htmlFor:x,className:"form-label",children:"Number"}),(0,j.jsx)(Z.I,{type:"tel",name:"number",id:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,2}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:l,onChange:h,required:!0}),(0,j.jsx)(N.z,{type:"submit",className:"formBtn",children:"Add Contact"})]})}var F,_,I,E=t(5503),D="Filter_filter__z+x9X",S=function(){var n=(0,o.v9)(x),e=(0,o.I0)();return(0,j.jsx)("div",{className:D,children:(0,j.jsx)(Z.I,{type:"text",name:"filter",className:"form-control",placeholder:"Find contacts by name",value:n,onChange:function(n){var t=n.target.value;e((0,E.G)(t))}})})},O=t(168),P=t(6444),q=t(8494),L=(0,P.ZP)(q.MdO)(F||(F=(0,O.Z)(["\n  fill: #0d6efd;\n"]))),$=P.ZP.div(_||(_=(0,O.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),R=function(n){var e=n.name,t=n.number,a=n.id,i=(0,o.I0)(),u=t.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)($,{children:[(0,j.jsx)(L,{}),(0,j.jsxs)("span",{children:[e,":"]}),(0,j.jsx)("span",{children:u})]}),(0,j.jsx)(N.z,{type:"button",className:"btn btn-outline-primary btn-sm",onClick:function(){return function(n){i((0,c.us)(n)),r.Am.success("Contact ".concat(e," successful deleted!"))}(a)},children:"Delete"})]})},B=P.ZP.li(I||(I=(0,O.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n"]))),M=function(){var n=(0,o.v9)(g);return(0,j.jsx)("ul",{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,j.jsx)(B,{children:(0,j.jsx)(R,{id:e,name:t,number:r})},e)}))})},Q=w((function(){var n=(0,o.I0)(),e=(0,o.v9)(i.Qb),t=(0,o.v9)(p),u=(0,o.v9)(h),s=(0,o.v9)(v);return(0,a.useEffect)((function(){e&&n((0,c.Y2)())}),[n,e]),(0,a.useEffect)((function(){s&&r.Am.error("Sorry, something went wrong")}),[s]),(0,j.jsxs)(j.Fragment,{children:["pending"===u&&(0,j.jsx)(C.Z,{}),(0,j.jsx)("section",{className:"section",children:(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("h1",{className:"title",children:"Add your contacts"}),(0,j.jsx)(z,{})]})}),(0,j.jsx)("section",{className:"section",children:(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("h2",{className:"title",children:"Contacts"}),!s&&null!==t&&void 0!==t&&t.length?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(S,{}),(0,j.jsx)(M,{})]}):(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("p",{children:"You still haven't any contacts"})})]})})]})}),"/login")},2794:function(n,e,t){t.d(e,{I:function(){return u},_:function(){return c}});var r,a,o=t(168),i=t(6444),c=i.ZP.label(r||(r=(0,o.Z)(["\n  display: block;\n  margin-bottom: 0.5rem;\n"]))),u=i.ZP.input(a||(a=(0,o.Z)(["\n  display: block;\n\n  width: 100%;\n  margin-bottom: 1rem;\n  padding: 0.375rem 0.75rem;\n\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n\n  color: #212529;\n\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #dee2e6;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-radius: 0.375rem;\n\n  &:hover,\n  &:focus {\n    color: #212529;\n    background-color: #fff;\n    outline: transparent;\n    border-color: #86b7fe;\n    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);\n  }\n"])))}}]);
//# sourceMappingURL=382.2a0e1317.chunk.js.map