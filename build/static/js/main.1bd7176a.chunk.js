(this.webpackJsonpreddit2=this.webpackJsonpreddit2||[]).push([[0],{14:function(t,e,n){t.exports=n(37)},36:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),u=n(2),l=n(3),s=n.n(l),m=function(t){var e=t.newPost,n=t.setNewPost,a=t.posts,c=t.setPosts,r=t.newTitle,u=t.setNewTitle;return o.a.createElement("div",{className:"post-form"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var o={title:r,content:e,karmaTotal:1,comments:[],date:(new Date).toUTCString()};s.a.post("/posts",o).then((function(t){c(a.concat(t.data)),n(""),u("")})).catch((function(t){return console.log(t)}))}},o.a.createElement("input",{type:"text",value:r,required:!0,onChange:function(t){u(t.target.value)}}),o.a.createElement("textarea",{type:"text",value:e,required:!0,onChange:function(t){n(t.target.value)}}),o.a.createElement("button",{type:"submit"},"post")))},i=function(t){var e=t.com,n=t.post,c=Object(a.useState)(e.commentKarma),r=Object(u.a)(c,2),l=r[0],m=r[1],i=Object(a.useState)(!1),d=Object(u.a)(i,2),f=d[0],p=d[1];return Object(a.useEffect)((function(){s.a.patch("/posts/".concat(n.id,"/comment/").concat(e.id),{commentKarma:l}).then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)}))}),[e.id,l,n.id]),o.a.createElement("div",{className:"comment"},o.a.createElement("li",null,l," ",e.commentContent),o.a.createElement("button",{onClick:function(){!1===f?(m(l+1),p(!0)):window.alert("You already voted!")}},"upvote"),o.a.createElement("button",{onClick:function(){!1===f?(m(l-1),p(!0)):window.alert("You alredy voted!")}},"downvote"))},d=function(t){var e=t.post;return e.comments.map((function(t){return o.a.createElement(i,{key:t.id,com:t,post:e})}))},f=function(t){var e=t.post,n=Object(a.useState)(e.karmaTotal),c=Object(u.a)(n,2),r=c[0],l=c[1],m=Object(a.useState)(!1),i=Object(u.a)(m,2),f=i[0],p=i[1],b=Object(a.useState)(e.comments),E=Object(u.a)(b,2),v=E[0],w=E[1],h=Object(a.useState)(""),j=Object(u.a)(h,2),O=j[0],g=j[1];return Object(a.useEffect)((function(){s.a.patch("/posts/".concat(e.id),{karmaTotal:r}).then((function(t){return console.log(t.data)})).catch((function(t){return console.log(t)}))}),[r,e.id]),o.a.createElement("div",{className:"post"},o.a.createElement("h3",null,e.title),o.a.createElement("ul",null,o.a.createElement("li",null,r," ",e.content)),o.a.createElement("button",{onClick:function(){!1===f?(l(r+1),p(!0)):window.alert("You already voted!")}},"upvote"),o.a.createElement("button",{onClick:function(){!1===f?(l(r-1),p(!0)):window.alert("You alredy voted!")}},"downvote"),o.a.createElement("h3",null,"Comments:"),o.a.createElement("ul",null,o.a.createElement(d,{post:e})),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var n={commentContent:O,commentKarma:1,commentDate:(new Date).toUTCString()};s.a.post("/posts/comment/".concat(e.id),n).then((function(t){w(v.concat(t.data)),window.alert("comment added!"),g("")})).catch((function(t){return console.log(t)}))}},o.a.createElement("textarea",{type:"text",value:O,required:!0,onChange:function(t){g(t.target.value)}}),o.a.createElement("button",{type:"submit"},"comment")))},p=function(t){return t.posts.map((function(t){return o.a.createElement(f,{key:t.id,post:t})}))},b=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),i=l[0],d=l[1],f=Object(a.useState)(""),b=Object(u.a)(f,2),E=b[0],v=b[1];return Object(a.useEffect)((function(){s.a.get("/posts").then((function(t){c(t.data)})).catch((function(t){return console.log(t)}))}),[]),o.a.createElement("div",null,o.a.createElement("h1",null,"Reddit 2"),o.a.createElement(m,{newPost:i,setNewPost:d,posts:n,setPosts:c,newTitle:E,setNewTitle:v}),o.a.createElement(p,{posts:n}))};n(36);r.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1bd7176a.chunk.js.map