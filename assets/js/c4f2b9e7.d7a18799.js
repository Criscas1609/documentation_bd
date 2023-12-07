"use strict";(self.webpackChunknosql_db_page=self.webpackChunknosql_db_page||[]).push([[207],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>k});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,k=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return t?n.createElement(k,l(l({ref:a},d),{},{components:t})):n.createElement(k,l({ref:a},d))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[p]="string"==typeof e?e:i,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8111:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const r={sidebar_position:3},l="Instalaci\xf3n de Redis",s={unversionedId:"Instalation/redis-instalation",id:"Instalation/redis-instalation",title:"Instalaci\xf3n de Redis",description:"Redis es un sistema de almacenamiento en memoria de c\xf3digo abierto y estructura de datos clave-valor. Conocido por su velocidad y versatilidad, Redis se utiliza com\xfanmente como base de datos en cach\xe9, cola de mensajes y almac\xe9n de datos en tiempo real para aplicaciones r\xe1pidas y escalables. Su estructura de datos admita cadenas, listas, conjuntos, mapas, entre otros, y su rendimiento lo hace ideal para escenarios que requieren acceso r\xe1pido a datos.",source:"@site/docs/Instalation/redis-instalation.md",sourceDirName:"Instalation",slug:"/Instalation/redis-instalation",permalink:"/documentation_bd/docs/Instalation/redis-instalation",draft:!1,editUrl:"https://github.com/Criscas1609/documentation_bd.git/docs/Instalation/redis-instalation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de MongoDB",permalink:"/documentation_bd/docs/Instalation/mongodb-instalation"},next:{title:"Operaciones - B\xe1sicas",permalink:"/documentation_bd/docs/category/operaciones---b\xe1sicas"}},o={},c=[{value:"Instalaci\xf3n de Redis",id:"instalaci\xf3n-de-redis-1",level:2},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Docker",id:"docker",level:3},{value:"Verificaci\xf3n de la Instalaci\xf3n",id:"verificaci\xf3n-de-la-instalaci\xf3n",level:2}],d={toc:c},p="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(p,(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"instalaci\xf3n-de-redis"},"Instalaci\xf3n de Redis"),(0,i.kt)("p",null,"Redis es un sistema de almacenamiento en memoria de c\xf3digo abierto y estructura de datos clave-valor. Conocido por su velocidad y versatilidad, Redis se utiliza com\xfanmente como base de datos en cach\xe9, cola de mensajes y almac\xe9n de datos en tiempo real para aplicaciones r\xe1pidas y escalables. Su estructura de datos admita cadenas, listas, conjuntos, mapas, entre otros, y su rendimiento lo hace ideal para escenarios que requieren acceso r\xe1pido a datos."),(0,i.kt)("h2",{id:"instalaci\xf3n-de-redis-1"},"Instalaci\xf3n de Redis"),(0,i.kt)("h3",{id:"windows"},"Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Descarga Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visita el ",(0,i.kt)("a",{parentName:"li",href:"https://redis.io/download"},"sitio web de Redis")," y descarga la \xfaltima versi\xf3n estable para Windows."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Descomprime el Archivo:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Extrae el archivo ZIP descargado a una ubicaci\xf3n de tu elecci\xf3n."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inicia el Servidor Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Ejecuta ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-server.exe")," desde la ubicaci\xf3n donde descomprimiste Redis.")))),(0,i.kt)("h3",{id:"macos"},"macOS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Instalaci\xf3n con Homebrew:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Abre la Terminal.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Instala Redis con Homebrew:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew install redis\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inicia el Servidor Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inicia el servicio Redis:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew services start redis\n")))))),(0,i.kt)("h3",{id:"linux"},"Linux"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Instalaci\xf3n:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Usa el sistema de gesti\xf3n de paquetes de tu distribuci\xf3n. Ejemplo en Ubuntu:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install redis-server\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"En distribuciones basadas en Red Hat (como Fedora):"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install redis\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inicia el Servidor Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Inicia el servicio Redis:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service redis-server start\n")))))),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Descarga la Imagen de Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ejecuta:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull redis\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Inicia un Contenedor Redis:")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ejecuta:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --name mi-redis-container -p 6379:6379 redis \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Conecta a Redis desde una aplicaci\xf3n utilizando el puerto 6379."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it mi-redis-container redis-cli\n")))))),(0,i.kt)("p",null,"   ",(0,i.kt)("a",{parentName:"p",href:"https://asciinema.org/a/k0u2SGwFru7NtGtCkm9Skb736"},(0,i.kt)("img",{parentName:"a",src:"https://asciinema.org/a/k0u2SGwFru7NtGtCkm9Skb736.svg",alt:"asciicast"}))),(0,i.kt)("h2",{id:"verificaci\xf3n-de-la-instalaci\xf3n"},"Verificaci\xf3n de la Instalaci\xf3n"),(0,i.kt)("p",null,"Para verificar que Redis est\xe1 funcionando correctamente, puedes abrir una interfaz de l\xednea de comandos y ejecutar el cliente Redis:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"En Windows, abre una nueva consola y ejecuta ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-cli.exe"),"."),(0,i.kt)("li",{parentName:"ul"},"En macOS o Linux, abre la Terminal y ejecuta ",(0,i.kt)("inlineCode",{parentName:"li"},"redis-cli"),".")),(0,i.kt)("p",null,"Luego, puedes ejecutar comandos como ",(0,i.kt)("inlineCode",{parentName:"p"},"ping")," para verificar la conexi\xf3n con el servidor Redis."),(0,i.kt)("p",null,"Estos son los pasos b\xe1sicos para instalar Redis en diferentes sistemas operativos y Docker. Consulta la documentaci\xf3n oficial de Redis para detalles m\xe1s espec\xedficos y opciones de configuraci\xf3n adicionales."))}m.isMDXComponent=!0}}]);