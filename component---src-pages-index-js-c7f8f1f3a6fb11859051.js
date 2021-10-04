"use strict";(self.webpackChunkdaiant=self.webpackChunkdaiant||[]).push([[678],{7704:function(e,t,a){a.r(t);var n=a(7294);t.default=function(){var e=n.useState(!1),t=e[0],a=e[1],l=n.useState(!0),c=l[0],s=(l[1],n.useState([])),i=s[0],r=s[1];n.useEffect((function(){Promise.all(m.map((function(e){return fetch("https://api.github.com/repos/"+e.repo).then((function(e){return e.json()})).then((function(t){return{cover:e.cover,repo:t}}))}))).then((function(e){r(e)}))}),[]);var o={title:"¡Hola! Soy ",description:"Soy un desarrollador web de Valencia, España. Siempre busco aprender nuevas tecnologías, y estoy abierto a toda clase de oportunidades.",button:"Habla conmigo"},m=[{repo:"daiant/landys",cover:"/pages/landys.jpg"},{repo:"daiant/landys",cover:"/pages/landys.jpg"}],u={title:"Sobre mí",avatar:"https://github.com/daiant.png",description:{__html:"<p>Soy Carlos Sendra Gisbert, un recién licenciado que intenta hacerse un hueco en el mundo del desarrollo web. </p>                          <p>Mi objetivo es crear de la web un espacio amigable, moderno y mucho más bonito de lo que está ahora.</p>                          <p>Me especializo en React, NextJS y NodeJS, aunque siempre estoy dispuesto a aprender nuevas tecnologías!</p>"},links:[{title:"Github",src:"https://github.com/daiant",svg:"/pages/github.svg"},{title:"LinkedIn",src:"https://linkedin.com",svg:"/pages/linkedin.svg"},{title:"Behance",src:"https://behance.net",svg:"/pages/behance.svg"}]},d=function(e){setTimeout((function(){return a(!t)}),10),document.getElementById("menu_checkbox").checked=!t},p=function(e){var a=document.getElementById(e);t&&d(),a.scrollIntoView()};return n.createElement("main",{className:"main-content"},n.createElement("div",{className:"header",style:{opacity:c?"1":"0"}},n.createElement("div",{className:"header-index"},n.createElement("span",{className:"welcome-name header-name",onClick:function(){return p("index")}},"Carlos")),n.createElement("nav",{className:"navigation"},n.createElement("div",{id:"webapp_cover",onClick:function(e){return d()},style:{filter:t?"invert(0)":"invert(1)"}},n.createElement("div",{id:"menu_button"},n.createElement("input",{type:"checkbox",id:"menu_checkbox"}),n.createElement("label",{htmlFor:"menu_checkbox",id:"menu_label"},n.createElement("div",{id:"menu_text_bar"})))),n.createElement("div",{className:t?"nav-list show":"nav-list"},n.createElement("div",{className:"bg-nav"}),n.createElement("ul",{className:t?"ul-nav show-ul":"ul-nav"},n.createElement("li",{className:"nav-item",onClick:function(){return p("index")}},"Inicio"),n.createElement("li",{className:"nav-item",onClick:function(){return p("soluciones")}},"Soluciones"),n.createElement("li",{className:"nav-item",onClick:function(){return p("proyectos")}},"Proyectos"),n.createElement("li",{className:"nav-item",onClick:function(){return p("sobre-mi")}},"Sobre mí"),n.createElement("li",{className:"nav-item",onClick:function(){return p("contacto")}},"Contacto"))))),n.createElement("section",{className:"section blue",id:"index"},n.createElement("div",{className:"section-wrapper"},n.createElement("div",{className:"welcome-wrapper"},n.createElement("h1",{className:"welcome-title"},o.title,n.createElement("span",{className:"welcome-name",id:"scrollable-name"},"Carlos.")),n.createElement("div",{className:"avatar"},n.createElement("img",{src:o.avatar})),n.createElement("p",null,o.description),n.createElement("button",{onClick:function(){return p("contacto")},className:"welcome-button"},o.button)))),n.createElement("section",{className:"section",id:"soluciones"},n.createElement("div",{className:"section-wrapper"},n.createElement("h2",{className:"section-title"},"Te puedo ayudar con:"),n.createElement("ul",{className:"solution-list"},[{title:"Revisión de portales",svg:"/pages/revisiones.svg",description:"¿Crees que a tu página le falta algo?¿Ese toque especial?"},{title:"Diseño de páginas web",svg:"/pages/webdesign.svg",description:"Encuentra la mejor manera de destacar tu producto: ¡con una página bonita!"},{title:"Creación de una aplicación web",svg:"/pages/webapp.svg",description:"Crea la página ideal para ti, tu comercio o empresa."},{title:"Creación y mantenimiento de servidores",svg:"/pages/backend.svg",description:"Olvídate de la parte difícil de internet, ya me encargo yo."},{title:"SEO y SEM",svg:"/pages/seo.svg",description:"Consigue ser el primero en lo tuyo, conmigo."}].map((function(e,t){return n.createElement("li",{key:t,className:"solution-item"},n.createElement("img",{className:"solution-img",src:e.svg,alt:e.title}),n.createElement("span",{className:"solution-title"},e.title),n.createElement("span",{className:"solution-description"},e.description))}))))),n.createElement("section",{className:"section",id:"proyectos"},n.createElement("div",{className:"section-wrapper"},n.createElement("h2",{className:"section-title"},"Mis proyectos"),i.map((function(e,t){return n.createElement("div",{key:t,className:"work-wrapper"},n.createElement("a",{href:e.repo.html_url,target:"_blank"},n.createElement("img",{src:e.cover,alt:e.repo.name}),n.createElement("div",{className:"work-data"},n.createElement("h2",{className:"work-title"},e.repo.name),n.createElement("div",{className:"work-hidden"},n.createElement("span",{className:"work-description"},e.repo.description),n.createElement("span",{className:"work-updated"},n.createElement("svg",{width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",fill:"#fff",fillRule:"evenodd",clipRule:"evenodd"},n.createElement("path",{d:"M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z"})),new Date(e.repo.updated_at).toLocaleDateString("es-ES"))))))})))),n.createElement("section",{className:"section",id:"sobre-mi"},n.createElement("div",{className:"section-wrapper"},n.createElement("h2",{className:"section-title"},u.title),n.createElement("div",{className:"about-avatar"},n.createElement("img",{src:u.avatar,alt:"Imagen de Carlo Sendra Gisbert"})),n.createElement("div",{className:"about-description",dangerouslySetInnerHTML:u.description}),n.createElement("div",{className:"divider"}),n.createElement("div",{className:"links-list"},u.links.map((function(e,t){return n.createElement("div",{className:"link-item",key:t},n.createElement("a",{href:e.src},n.createElement("img",{className:"link-item-img",src:e.svg,alt:e.title})))}))))),n.createElement("section",{className:"section",id:"contacto"},n.createElement("div",{className:"section-wrapper"},n.createElement("h2",null,"¿Te he convencido?"),n.createElement("form",null,n.createElement("div",{className:"input-box"},n.createElement("label",{className:"input-label",htmlFor:"name"},"Nombre"),n.createElement("input",{className:"input",type:"text",id:"name",placeholder:"Introduce tu nombre..."})),n.createElement("div",{className:"input-box"},n.createElement("label",{className:"input-label",htmlFor:"email"},"Correo electrónico"),n.createElement("input",{type:"email",className:"input",id:"email",placeholder:"Email de contacto..."})),n.createElement("div",{className:"input-box"},n.createElement("label",{className:"input-label",htmlFor:"content"},"Mensaje"),n.createElement("textarea",{className:"input",placeholder:"Qué pasa, a ver"})),n.createElement("input",{type:"submit",className:"input submit-form",value:"Enviar"})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-c7f8f1f3a6fb11859051.js.map