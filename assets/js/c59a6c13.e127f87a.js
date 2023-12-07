"use strict";(self.webpackChunknosql_db_page=self.webpackChunknosql_db_page||[]).push([[106],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7264:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={sidebar_position:2},i="Instalaci\xf3n de MongoDB",l={unversionedId:"Instalation/mongodb-instalation",id:"Instalation/mongodb-instalation",title:"Instalaci\xf3n de MongoDB",description:"MongoDB es un sistema de gesti\xf3n de bases de datos NoSQL orientado a documentos. En lugar de utilizar tablas y filas como en las bases de datos relacionales, MongoDB almacena datos en documentos BSON (una representaci\xf3n binaria JSON) dentro de colecciones. Este enfoque flexible permite una f\xe1cil adaptaci\xf3n a cambios en la estructura de datos. MongoDB es conocido por su capacidad de escala horizontal, flexibilidad en el esquema y su capacidad para manejar grandes cantidades de datos no estructurados. Se utiliza com\xfanmente en aplicaciones web modernas y en entornos que requieren almacenamiento de datos \xe1gil y escalabilidad.",source:"@site/docs/Instalation/mongodb-instalation.md",sourceDirName:"Instalation",slug:"/Instalation/mongodb-instalation",permalink:"/documentation_bd/docs/Instalation/mongodb-instalation",draft:!1,editUrl:"https://github.com/Criscas1609/documentation_bd.git/docs/Instalation/mongodb-instalation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalaci\xf3n de Cassandra",permalink:"/documentation_bd/docs/Instalation/cassandra-instalation"},next:{title:"Instalaci\xf3n de Redis",permalink:"/documentation_bd/docs/Instalation/redis-instalation"}},s={},p=[{value:"Instalaci\xf3n de MongoDB",id:"instalaci\xf3n-de-mongodb-1",level:2},{value:"Linux",id:"linux",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"macos",level:3},{value:"Docker",id:"docker",level:3}],c={toc:p},m="wrapper";function d(e){let{components:a,...t}=e;return(0,o.kt)(m,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"instalaci\xf3n-de-mongodb"},"Instalaci\xf3n de MongoDB"),(0,o.kt)("p",null,"MongoDB es un sistema de gesti\xf3n de bases de datos NoSQL orientado a documentos. En lugar de utilizar tablas y filas como en las bases de datos relacionales, MongoDB almacena datos en documentos BSON (una representaci\xf3n binaria JSON) dentro de colecciones. Este enfoque flexible permite una f\xe1cil adaptaci\xf3n a cambios en la estructura de datos. MongoDB es conocido por su capacidad de escala horizontal, flexibilidad en el esquema y su capacidad para manejar grandes cantidades de datos no estructurados. Se utiliza com\xfanmente en aplicaciones web modernas y en entornos que requieren almacenamiento de datos \xe1gil y escalabilidad."),(0,o.kt)("h2",{id:"instalaci\xf3n-de-mongodb-1"},"Instalaci\xf3n de MongoDB"),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Agregar Repositorio (opcional):")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Algunas distribuciones permiten agregar el repositorio oficial de MongoDB. Consulta la ",(0,o.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/"},"documentaci\xf3n oficial")," para instrucciones espec\xedficas."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Instalaci\xf3n:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Usa el gestor de paquetes de tu distribuci\xf3n:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y mongodb\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"En distribuciones basadas en Red Hat (como Fedora):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo yum install -y mongodb\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Iniciar el Servidor:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inicia el servicio MongoDB:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service mongod start\n")))))),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Descarga MongoDB:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Visita ",(0,o.kt)("a",{parentName:"li",href:"https://www.mongodb.com/try/download/community"},"mongodb.com/try/download/community"),"."),(0,o.kt)("li",{parentName:"ul"},"Selecciona la versi\xf3n de MongoDB Community Edition para Windows."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Instalaci\xf3n:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ejecuta el instalador descargado y sigue las instrucciones."),(0,o.kt)("li",{parentName:"ul"},"Puedes optar por instalar MongoDB Compass durante la instalaci\xf3n."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Configuraci\xf3n del Servicio:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MongoDB se instala como un servicio de Windows. Puedes administrarlo desde la consola de servicios.")))),(0,o.kt)("h3",{id:"macos"},"macOS"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Instalaci\xf3n con Homebrew:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Abre la Terminal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Instala Homebrew (si no lo tienes):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Instala MongoDB con Homebrew:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap mongodb/brew\nbrew install mongodb-community\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Iniciar el Servidor:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inicia el servidor MongoDB:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"brew services start mongodb/brew/mongodb-community\n")))))),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Descargar la Imagen de MongoDB:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ejecuta:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull mongo\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Iniciar un Contenedor MongoDB:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ejecuta:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 27017:27017 --name=mongo mongo:4.2\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Despues se inicializa en Docker:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  docker exec -it mongo bash\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Deste la terminal del bash se escribe mongo y listo:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  mongo\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://asciinema.org/a/cnOfYn8N2ncjjYw0VlEVfveby"},(0,o.kt)("img",{parentName:"a",src:"https://asciinema.org/a/cnOfYn8N2ncjjYw0VlEVfveby.svg",alt:"asciicast"}))))))),(0,o.kt)("p",null,"Estos son los pasos b\xe1sicos para instalar MongoDB en diferentes sistemas operativos y Docker. Consulta la documentaci\xf3n oficial de MongoDB para detalles m\xe1s espec\xedficos seg\xfan la versi\xf3n que est\xe1s instalando."))}d.isMDXComponent=!0}}]);