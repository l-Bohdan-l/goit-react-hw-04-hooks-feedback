(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,n){t.exports={list:"FeedbackOptions_list__2F0G1",button:"FeedbackOptions_button__1eNpo"}},,,,function(t,e,n){t.exports={title:"Section_title__2VHtL"}},function(t,e,n){t.exports={notification:"Notification_notification__1_JQV"}},function(t,e,n){t.exports={list:"Statistics_list__3dFUs"}},,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(5),s=n.n(a),o=(n(13),n(3)),r=(n(14),n(2)),l=n.n(r),d=n(0),u=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(d.jsx)("ul",{className:l.a.list,children:e.map((function(t){return Object(d.jsx)("li",{className:l.a.item,children:Object(d.jsx)("button",{className:l.a.button,type:"button",onClick:function(){return n(t)},id:t,children:t})},t)}))})},j=n(6),b=n.n(j),h=function(t){var e=t.title,n=t.children;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{className:b.a.title,children:e}),n]})};h.defaultProps={title:"",children:[]};var f=n(7),O=n.n(f),x=function(t){var e=t.notification;return Object(d.jsxs)("p",{className:O.a.notification,children:[" ",e," "]})};x.defaultProps={message:""};var p=n(8),v=n.n(p),_=function(t){var e=t.good,n=t.neutral,c=t.bad,i=t.total,a=t.positivePercentage,s=i(),o=a();return Object(d.jsx)("div",{children:s?Object(d.jsxs)("ul",{className:v.a.list,children:[Object(d.jsxs)("li",{children:["Good: ",e]}),Object(d.jsxs)("li",{children:["Neutral: ",n]}),Object(d.jsxs)("li",{children:["Bad: ",c]}),Object(d.jsxs)("li",{children:["Total: ",s]}),Object(d.jsxs)("li",{children:["Positive feedback: ",o," %"]})]}):Object(d.jsx)(x,{notification:"There is no feedback"})})};var g=function(){var t=Object(c.useState)(0),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)(0),s=Object(o.a)(a,2),r=s[0],l=s[1],j=Object(c.useState)(0),b=Object(o.a)(j,2),f=b[0],O=b[1],x=function(){return n+r+f};return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(h,{title:"Please leave feedback",children:Object(d.jsx)(u,{options:["good","neutral","bad"],onLeaveFeedback:function(t){"good"===t&&i(n+1),"neutral"===t&&l(r+1),"bad"===t&&O(f+1)}})}),Object(d.jsx)(h,{children:Object(d.jsx)(_,{good:n,neutral:r,bad:f,total:x,positivePercentage:function(){var t=x();return Math.round(100*n/t)}})})]})})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}],[[16,1,2]]]);
//# sourceMappingURL=main.d19d7deb.chunk.js.map