!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1),t(2),t(3),t(4);const i="https://renemorozowich.com/wp-json/wp/v2/posts",o="https://renemorozowich.com/wp-json/wp/v2/posts?categories=33",s="https://renemorozowich.com/wp-json/wp/v2/media/";window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("#main-news"),n=document.querySelector("#latest-news");d(e),r(n)});const a=async e=>{try{return(await fetch(e)).json()}catch(e){console.log(e)}},d=e=>{a(i).then(n=>{n.map(n=>{var t;(t=n.featured_media,a(s+t).then(e=>e.source_url)).then(t=>{var i,o,s;e.innerHTML+=(i=n.title.rendered,o=t,s=n.date,`<div class="col-eld 4 col-sm-12 col-md-6">\n    <div class="main-news__item" style="background-image: url(${o});">\n        <div class="box-background"></div>\n        <a href="">\n            <div class="item-theme policy">\n                <span>policy</span>\n            </div>\n        </a>\n        <a href="">\n            <div class="main-news-item__header">\n                <span>${i}</span>\n            </div>\n        </a>                                   \n        <a href="">\n            <div class="main-news-date">\n                <span>${new Date(s).toLocaleDateString()}</span>\n            </div> \n        </a>\n        <a href="">\n            <div class="author__main">\n                <span>Evgeny Tretyak</span>\n            </div> \n        </a>\n        </div>\n    </div>`)})})})},r=e=>{a(o).then(n=>{n.map(n=>{var t,i;e.innerHTML+=(t=n.title.rendered,i=n.date,`\n    <div class="right-news">\n    <div class="right-news__item">\n        <a href="">\n            <div class="right-news__theme">\n                sports\n            </div>\n            <div class="right-news__header">\n            ${t}\n            </div>\n            <div class="right-news__date">\n            ${new Date(i).toLocaleDateString()} <span class="theme__author">Evgeny Tretyak</span>\n            </div> \n        </a>\n        <div class="hr"></div>\n    </div> \n    `)})})}},function(e,n){e.exports=[["policyID","statecode","county","eq_site_limit","hu_site_limit","fl_site_limit","fr_site_limit","tiv_2011","tiv_2012","eq_site_deductible","hu_site_deductible","fl_site_deductible","fr_site_deductible","point_latitude","point_longitude","line","construction","point_granularity"],["119736","FL","CLAY COUNTY","498960","498960","498960","498960","498960","792148.9","0","9979.2","0","0","30.102261","-81.711777","Residential","Masonry","1"],["448094","FL","CLAY COUNTY","1322376.3","1322376.3","1322376.3","1322376.3","1322376.3","1438163.57","0","0","0","0","30.063936","-81.707664","Residential","Masonry","3"],["206893","FL","CLAY COUNTY","190724.4","190724.4","190724.4","190724.4","190724.4","192476.78","0","0","0","0","30.089579","-81.700455","Residential","Wood","1"],["333743","FL","CLAY COUNTY","0","79520.76","0","0","79520.76","86854.48","0","0","0","0","30.063236","-81.707703","Residential","Wood","3"],["172534","FL","CLAY COUNTY","0","254281.5","0","254281.5","254281.5","246144.49","0","0","0","0","30.060614","-81.702675","Residential","Wood","1"],["785275","FL","CLAY COUNTY","0","515035.62","0","0","515035.62","884419.17","0","0","0","0","30.063236","-81.707703","Residential","Masonry","3"],["995932","FL","CLAY COUNTY","0","19260000","0","0","19260000","20610000","0","0","0","0","30.102226","-81.713882","Commercial","Reinforced Concrete","1"],["223488","FL","CLAY COUNTY","328500","328500","328500","328500","328500","348374.25","0","16425","0","0","30.102217","-81.707146","Residential","Wood","1"],["433512","FL","CLAY COUNTY","315000","315000","315000","315000","315000","265821.57","0","15750","0","0","30.118774","-81.704613","Residential","Wood","1"],["142071","FL","CLAY COUNTY","705600","705600","705600","705600","705600","1010842.56","14112","35280","0","0","30.100628","-81.703751","Residential","Masonry","1"],["253816","FL","CLAY COUNTY","831498.3","831498.3","831498.3","831498.3","831498.3","1117791.48","0","0","0","0","30.10216","-81.719444","Residential","Masonry","1"],["894922","FL","CLAY COUNTY","0","24059.09","0","0","24059.09","33952.19","0","0","0","0","30.095957","-81.695099","Residential","Wood","1"],["422834","FL","CLAY COUNTY","0","48115.94","0","0","48115.94","66755.39","0","0","0","0","30.100073","-81.739822","Residential","Wood","1"],["582721","FL","CLAY COUNTY","0","28869.12","0","0","28869.12","42826.99","0","0","0","0","30.09248","-81.725167","Residential","Wood","1"],["842700","FL","CLAY COUNTY","0","56135.64","0","0","56135.64","50656.8","0","0","0","0","30.101356","-81.726248","Residential","Wood","1"],["874333","FL","CLAY COUNTY","0","48115.94","0","0","48115.94","67905.07","0","0","0","0","30.113743","-81.727463","Residential","Wood","1"],["580146","FL","CLAY COUNTY","0","48115.94","0","0","48115.94","66938.9","0","0","0","0","30.121655","-81.732391","Residential","Wood","3"],["456149","FL","CLAY COUNTY","0","80192.49","0","0","80192.49","86421.04","0","0","0","0","30.109537","-81.741661","Residential","Wood","1"],["767862","FL","CLAY COUNTY","0","48115.94","0","0","48115.94","73798.5","0","0","0","0","30.11824","-81.745335","Residential","Wood","3"],["353022","FL","CLAY COUNTY","0","60946.79","0","0","60946.79","62467.29","0","0","0","0","30.065799","-81.717416","Residential","Wood","1"],["367814","FL","CLAY COUNTY","0","28869.12","0","0","28869.12","42727.74","0","0","0","0","30.082993","-81.710581","Residential","Wood","1"],["671392","FL","CLAY COUNTY","0","13410000","0","0","13410000","11700000","0","0","0","0","30.091921","-81.711929","Commercial","Reinforced Concrete","3"],["772887","FL","CLAY COUNTY","0","1669113.93","0","0","1669113.93","2099127.76","0","0","0","0","30.117352","-81.711884","Residential","Masonry","1"],["983122","FL","CLAY COUNTY","0","179562.23","0","0","179562.23","211372.57","0","0","0","0","30.095783","-81.713181","Residential","Wood","3"],["934215","FL","CLAY COUNTY","0","177744.16","0","0","177744.16","157171.16","0","0","0","0","30.110518","-81.727478","Residential","Wood","1"],["385951","FL","CLAY COUNTY","0","17757.58","0","0","17757.58","16948.72","0","0","0","0","30.10288","-81.705719","Residential","Wood","1"],["716332","FL","CLAY COUNTY","0","130129.87","0","0","130129.87","101758.43","0","0","0","0","30.068468","-81.71624","Residential","Wood","1"],["751262","FL","CLAY COUNTY","0","42854.77","0","0","42854.77","63592.88","0","0","0","0","30.068468","-81.71624","Residential","Wood","1"],["633663","FL","CLAY COUNTY","0","785.58","0","0","785.58","662.18","0","0","0","0","30.068468","-81.71624","Residential","Wood","1"],["105851","FL","CLAY COUNTY","0","170361.91","0","0","170361.91","177176.38","0","0","0","0","30.068468","-81.71624","Residential","Wood","1"],["710400","FL","CLAY COUNTY","0","1430.89","0","0","1430.89","1861.41","0","0","0","0","30.068468","-81.71624","Residential","Wood","1"]]},function(e,n,t){},function(e,n,t){},function(e,n){let t=pageYOffset;const i=document.getElementById("navbar");window.addEventListener("scroll",(function(){pageYOffset>t?i.classList.add("navbar-scroll"):i.classList.remove("navbar-scroll"),t=pageYOffset})),document.querySelector(".menu-open").addEventListener("click",e=>{document.querySelector(".menu").classList.toggle("show-menu")})}]);