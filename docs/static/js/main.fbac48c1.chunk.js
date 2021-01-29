(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[0],{29:function(e,i,t){},35:function(e,i,t){"use strict";t.r(i);var a=t(0),r=t(1),c=t.n(r),s=t(21),n=t.n(s),o=(t(29),t(11)),d="[SingleProduct] add to cart",p="[Cart] subtract",m="[Cart] add",l="[Cart] delete",u="[Cart] buy all items",b=function(e){return{type:d,payload:{product:e,amount:1,itemPrice:e.price}}},j=r.createContext(),g=t(7),h=t(2),x={products:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case d:var t=e.products.findIndex((function(e){return e.product.name===i.payload.product.name}));return console.log(t),-1!==t&&e.products[t].product.id===i.payload.product.id?(e.products[t].amount++,e.products[t].itemPrice=e.products[t].product.price*e.products[t].amount,Object(h.a)(Object(h.a)({},e),{},{products:Object(g.a)(e.products)})):Object(h.a)(Object(h.a)({},e),{},{products:[].concat(Object(g.a)(e.products),[i.payload])});case m:var a=e.products.findIndex((function(e){return e.product.name===i.payload.product.name}));return e.products[a].amount++,e.products[a].itemPrice=e.products[a].product.price*e.products[a].amount,{products:Object(g.a)(e.products)};case p:var r=e.products.findIndex((function(e){return e.product.name===i.payload.product.name}));return e.products[r].itemPrice=e.products[r].product.price*(e.products[r].amount-1),1===e.products[r].amount?(e.products[r].itemPrice=e.products[r].product.price,{products:Object(g.a)(e.products)}):(e.products[r].amount--,{products:Object(g.a)(e.products)});case l:return{products:e.products.filter((function(e){return e.product.id!==i.payload.product.id}))};case u:return{products:[]};default:return e}},f=t(9),O=t(3),w=t(15),y=function(){var e=c.a.useContext(j),i=e.items,t=e.handleItems,r=e.handleDelete,s=e.buyItems;return Object(a.jsxs)("div",{className:"container-cart",children:[(null===i||void 0===i?void 0:i.products.length)>0?i.products.map((function(e){return Object(a.jsxs)("div",{className:"container-cart__item",children:[Object(a.jsx)("div",{className:"container-cart__image",children:Object(a.jsx)("img",{src:e.product.images[0].img1,alt:e.product.name})}),Object(a.jsxs)("div",{className:"container-cart__details",children:[Object(a.jsx)("h2",{children:e.product.name}),Object(a.jsxs)("p",{children:[" ",e.product.description," "]}),Object(a.jsx)("p",{children:Object(a.jsxs)("strong",{children:["$",e.itemPrice]})}),Object(a.jsxs)("div",{className:"control__products",onClick:t,children:[Object(a.jsx)("div",{className:"removing",children:Object(a.jsx)("span",{id:"minus",children:" \u2212 "})}),Object(a.jsx)("span",{className:"number__products",children:e.amount}),Object(a.jsx)("div",{className:"adding",children:Object(a.jsx)("span",{id:"plus",children:" + "})})]})]}),Object(a.jsx)("div",{onClick:r,children:Object(a.jsx)(w.b,{className:"delete"})})]},e.product.id)})):Object(a.jsx)("div",{className:"empty-search",children:Object(a.jsx)("h3",{children:" There is no items in the cart. "})}),(null===i||void 0===i?void 0:i.products.length)>0&&Object(a.jsxs)("div",{className:"cart__subtotals",children:[Object(a.jsxs)("span",{className:"cart__total-products",children:[null===i||void 0===i?void 0:i.products.reduce((function(e,i){return e+i.amount}),0)," Products"]}),Object(a.jsxs)("p",{className:"cart__value",children:["Subtotal",Object(a.jsxs)("strong",{children:["$",null===i||void 0===i?void 0:i.products.reduce((function(e,i){return e+i.itemPrice}),0)]})]}),Object(a.jsx)("div",{className:"button__wrapper",onClick:s,children:"Buy"})]})]})},N=function(e){var i=e.selected,t=e.handleLowerHigherPrice,c=i.filteredProducts,s=r.useContext(j).handleAddToCart;return Object(a.jsxs)("div",{className:"products",children:[Object(a.jsx)("div",{className:"container-products__filter-price",children:Object(a.jsxs)("select",{defaultValue:"DEFAULT",onChange:t,children:[Object(a.jsx)("option",{value:"DEFAULT",disabled:!0,children:"ORDER BY"}),Object(a.jsx)("option",{value:"higher",children:"HIGHER PRICE"}),Object(a.jsx)("option",{value:"lower",children:"LOWER PRICE"})]})}),Object(a.jsx)("main",{className:"container-products",children:0===c.length?Object(a.jsx)("div",{className:"empty-search",children:Object(a.jsx)("h3",{children:"Unfortunately no devices matched your search parameters :( "})}):c.map((function(e){return Object(a.jsxs)("div",{className:"container-products__item",children:[Object(a.jsxs)("div",{className:"container-image",children:[Object(a.jsx)(f.b,{to:"/products/".concat(e.slug),children:Object(a.jsx)("img",{src:e.images[0].img1,alt:e.name})}),Object(a.jsx)("div",{className:"button__wrapper",onClick:s,children:"ADD TO CART"})]}),Object(a.jsxs)("div",{className:"container-products__details",children:[Object(a.jsx)("p",{children:e.name}),Object(a.jsx)("p",{children:Object(a.jsxs)("strong",{children:["$",e.price]})})]})]},e.id)}))})]})},P=t.p+"static/media/apple-iphone-12-mini-blanco-ambas-vistas.6bad892f.webp",_=t.p+"static/media/apple-iphone-12-mini-blanco-vista-frontal-dinamica.b44d6fd2.webp",S=t.p+"static/media/apple-iphone-12-mini-blanco-vista-frontal.be7d48b9.webp",C=t.p+"static/media/apple-iphone-12-mini-blanco-vista-trasera.0627a6ee.webp",D=t.p+"static/media/apple-iphone-se-negro-ambas-vistas.03dab3e5.webp",A=t.p+"static/media/apple-iphone-se-negro-vista-frontal-dinamica.6887f151.webp",M=t.p+"static/media/apple-iphone-se-negro-vista-frontal.a3346334.webp",L=t.p+"static/media/apple-iphone-se-negro-vista-trasera.e6310c0f.webp",k=t.p+"static/media/huawei-p40pro_0053_51095CAQ-1.2325fbf9.webp",T=t.p+"static/media/huawei-p40pro_0052_51095CAQ-2.99ac0494.webp",E=t.p+"static/media/huawei-p40pro_0051_51095CAQ-3.82b36a3e.webp",G=t.p+"static/media/huawei-p40pro_0050_51095CAQ-4.90a97b5d.webp",R=t.p+"static/media/huawei-y9-prime-verde-ambas-vistas.9912a225.webp",z=t.p+"static/media/huawei-y9-prime-verde-vista-frontal.b7664abe.webp",I=t.p+"static/media/huawei-y9-prime-verde-vista-lateral.98603c3f.webp",F=t.p+"static/media/huawei-y9-prime-verde-vista-trasera.cde0c85c.webp",H=t.p+"static/media/motorola-g9plus-azul-g9plus128blue-1.0a5c5245.webp",$=t.p+"static/media/motorola-g9plus-azul-g9plus128blue-2.a4d3e764.webp",q=t.p+"static/media/motorola-g9plus-azul-g9plus128blue-3.35ca5f4c.webp",B=t.p+"static/media/motorola-g9plus-azul-g9plus128blue-5.7d3b6b4e.webp",X=t.p+"static/media/samsung-galaxy-a10s-azul-ambas-vistas.4c79faeb.webp",Q=t.p+"static/media/samsung-galaxy-a10s-azul-vista-frontal.8d9f0b43.webp",U=t.p+"static/media/samsung-galaxy-a10s-azul-vista-lateral.0b485865.webp",Y=t.p+"static/media/samsung-galaxy-a10s-azul-vista-trasera.a0738d7f.webp",J=t.p+"static/media/samsung-galaxy-s20fe-azul-ambas-vistas.85d53523.webp",V=t.p+"static/media/samsung-galaxy-s20fe-azul-vista-dinamica-derecha.3374049f.webp",W=t.p+"static/media/samsung-galaxy-s20fe-azul-vista-lateral-izquierda.3a422b04.webp",K=t.p+"static/media/samsung-galaxy-s20fe-azul-vista-trasera-camara.6d882031.webp",Z=t.p+"static/media/xiaomi-poco-x3-negro-ambas-vistas.36528eec.webp",ee=t.p+"static/media/xiaomi-_0008_poco-x3-negro.5db30c8e.webp",ie=t.p+"static/media/xiaomi-poco-x3-negro-vista-frontal.723f810b.webp",te=t.p+"static/media/xiaomi-poco-x3-negro-vista-lateral.894f084d.webp",ae=t.p+"static/media/xiaomi-redmi-9c-naranja-ambasvistas.20f77b30.webp",re=t.p+"static/media/xiaomi-redmi-9c-naranja-vista-frontal.00f2fffc.webp",ce=t.p+"static/media/xiaomi-redmi-9c-naranja-vista-lateral.fcf8c62f.webp",se=t.p+"static/media/xiaomi-redmi-9c-naranja-vista-trasera.79f1bc07.webp",ne=t.p+"static/media/xiaomi-redmi-note-9-pro-verde-bothview.d63ce642.webp",oe=t.p+"static/media/xiaomi-redmi-note-9-pro-verde-bothdynamicview.fd57aa31.webp",de=t.p+"static/media/xiaomi-redmi-note-9-pro-verde-dynamicbackview.60a121a8.webp",pe=t.p+"static/media/xiaomi-redmi-note-9-pro-verde-dynamicfrontview.ac0d863d.webp",me=t.p+"static/media/xiaomi-redminote-0005-rn9s-gris-bothview.6b7e6524.webp",le=t.p+"static/media/xiaomi-redminote-0006-rn9s-gris-dynamicview.55c7e6d9.webp",ue=t.p+"static/media/xiaomi-redminote-0007-rn9s-gris-updownview.461a7a58.webp",be=t.p+"static/media/xiaomi-redminote-0008-rn9s-gris-dynamicview.151aed66.webp",je=t.p+"static/media/xiaomi-redminote8-01-negro-01-frontview.ebea7098.png",ge=t.p+"static/media/xiaomi-redminote8-01-negro-02-dynamicbackview.89cf93cf.webp",he=t.p+"static/media/xiaomi-redminote8-01-negro-03-simportview.c5f506ac.png",xe=t.p+"static/media/xiaomi-redminote8-3-1-downview.18f867b9.webp",ve=["xiaomi","apple","huawei","samsung","motorola"],fe=ve[0],Oe=ve[1],we=ve[2],ye=ve[3],Ne=[{id:"1",brand:Oe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Apple iPhone 12 mini",price:18900,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat. ",images:[{img1:P},{im2:_},{img3:S},{img4:C}],slug:"apple-iphone-12-mini"},{id:"2",brand:Oe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Apple iPhone SE 2020",price:10199,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:D},{im2:M},{img3:A},{img4:L}],slug:"apple-iphone-se-2020"},{id:"3",brand:we,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Huawei P40 Pro",price:23499,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:k},{im2:T},{img3:E},{img4:G}],slug:"huawei-p40-pro"},{id:"4",brand:we,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Huawei Y9 Prime",price:5299,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:R},{im2:z},{img3:I},{img4:F}],slug:"huawei-y9-prime"},{id:"5",brand:ve[4],battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Motorola G9 Plus",price:6650,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:H},{im2:$},{img3:q},{img4:B}],slug:"motorola-g9-plus"},{id:"6",brand:ye,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Samsung Galaxy A10s",price:3599,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:X},{im2:Q},{img3:U},{img4:Y}],slug:"samsung-galaxy-a10s"},{id:"7",brand:ye,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Samsung Galaxy S20 Fan Edition",price:13499,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:J},{im2:V},{img3:W},{img4:K}],slug:"samsung-galaxy-s20-fan-edition"},{id:"8",brand:fe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Xiaomi Pocophone X3 NFC",price:5479,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:Z},{im2:ie},{img3:te},{img4:ee}],slug:"xiaomi-pocophone-x3-nfc"},{id:"9",brand:fe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Xiaomi Redmi 9C",price:3499,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:ae},{im2:re},{img3:ce},{img4:se}],slug:"xiaomi-redmi-9c"},{id:"10",brand:fe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Xiaomi Redmi Note 9 Pro",price:6199,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:ne},{im2:oe},{img3:pe},{img4:de}],slug:"xiaomi-redmi-note-9pro"},{id:"11",brand:fe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Xiaomi Redmi Note 9S",price:5699,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:me},{im2:ue},{img3:le},{img4:be}],slug:"xiaomi-redmi-note-9s"},{id:"12",brand:fe,battery:"5020 mAh",camera:"48 + 8 + 5 + 2 MP",cpu:"SnapDragon 720G",display:'6.67"',name:"Xiaomi Redmi Note 9S",price:4399,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim porttitor lacinia. Suspendisse rhoncus mollis sagittis. Mauris nec eros arcu. Duis a euismod erat.",images:[{img1:je},{im2:he},{img3:xe},{img4:ge}],slug:"xiaomi-redmi-note-8"}],Pe=function(e){return Ne.map((function(e){return e.brand})).filter((function(i){return i===e})).length},_e=function(e){var i=e.handleBrandChange,t=e.handlePriceRange,r=ve.sort();return Object(a.jsx)("section",{className:"section-filter",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{className:"title-filter",children:"Brands"}),r.map((function(e,t){return Object(a.jsx)("div",{className:"section-filter__container",children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"checkbox",id:e,name:e,onChange:i,className:"brandCheckbox"}),Object(a.jsxs)("label",{htmlFor:e,className:"brand",children:[e," (",Pe(e),")"]})]})},t)})),Object(a.jsx)("label",{className:"title-filter",children:"Price Range"}),Object(a.jsxs)("div",{className:"section-filter__container",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"radio",id:"3000",name:"price",onChange:t}),Object(a.jsx)("label",{htmlFor:"3000",children:"From $3000 to $6999"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"radio",id:"7000",name:"price",onChange:t}),Object(a.jsx)("label",{htmlFor:"7000",children:"From $7000 to $10999"})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("input",{type:"radio",id:"11000",name:"price",onChange:t}),Object(a.jsx)("label",{htmlFor:"11000",children:"From $11000 or more"})]})]})]})})},Se=function(e,i){return 0===i.length?Ne.filter((function(i){return"3000"===e?i.price>=e&&i.price<=6999:"7000"===e?i.price>=e&&i.price<=10999:"11000"===e?i.price>=e:i.price>=0})):i.filter((function(i){return"3000"===e?i.price>=e&&i.price<=6999:"7000"===e?i.price>=e&&i.price<=10999:"11000"===e?i.price>=e:i.price>=0}))},Ce=function(e,i){return"higher"===e?i.sort((function(e,i){return i.price-e.price})):"lower"===e?i.sort((function(e,i){return e.price-i.price})):void 0},De={products:Ne,filteredProducts:[],temporalProducts:[]},Ae=function(){var e=r.useState(De),i=Object(o.a)(e,2),t=i[0],c=i[1],s=document.querySelectorAll(".brandCheckbox:checked").length;return r.useEffect((function(){0===s&&c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:Ne})}))}),[s]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(_e,{handleBrandChange:function(e){var i,a,r=(i=Ne,a=e.target.id,i.filter((function(e){return e.brand===a})));if(e.target.checked)t.filteredProducts.length===Ne.length?c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:Object(g.a)(r),temporalProducts:Object(g.a)(r)})})):c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:[].concat(Object(g.a)(e.temporalProducts),Object(g.a)(r)),temporalProducts:[].concat(Object(g.a)(e.temporalProducts),Object(g.a)(r))})}));else{var s=t.temporalProducts.filter((function(i){return i.brand!==e.target.id}));c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:s,temporalProducts:s})}))}},handlePriceRange:function(e){if(e.target.checked)if(0===s){var i=Se(e.target.id,Ne);c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:i})}))}else if(0===t.filteredProducts.length){var a=Se(e.target.id,t.temporalProducts);c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:a})}))}else{var r=Se(e.target.id,t.temporalProducts);c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:r})}))}}}),Object(a.jsx)(N,{selected:t,handleLowerHigherPrice:function(e){var i=e.target.value;if(0===s){var a=Ce(i,t.products);c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:a})}))}else{var r=Ce(i,t.filteredProducts);c((function(e){return Object(h.a)(Object(h.a)({},e),{},{filteredProducts:r})}))}}})]})},Me=function(){var e=c.a.useContext(j).items;return Object(a.jsxs)("nav",{className:"navbar",children:[Object(a.jsx)(f.b,{to:"/",children:"E-commerce App"}),Object(a.jsx)(f.b,{to:"/cart",children:Object(a.jsxs)("div",{className:"totalItems",children:[Object(a.jsx)("span",{children:null===e||void 0===e?void 0:e.products.reduce((function(e,i){return e+i.amount}),0)}),Object(a.jsx)(w.a,{})]})})]})},Le=function(e){var i,t=e.match,c=r.useContext(j).handleAddToCartSingleProduct,s=t.params.idPhone,n=(i=s,Ne.find((function(e){return e.slug===i}))),d=n.price,p=n.images,m=n.description,l=n.battery,u=n.display,b=n.cpu,g=n.camera,h=n.name,x=r.useState({preview:p[0].img1}),v=Object(o.a)(x,2),f=v[0],O=v[1],w=document.querySelectorAll(".device-preview__minipreviews div"),y=function(e){O({class:"active",preview:e.currentTarget.src}),w.forEach((function(e){return e.classList.remove("active")})),e.currentTarget.parentNode.classList.add("active")};return r.useEffect((function(){O({class:"active",preview:p[0].img1})}),[p]),Object(a.jsxs)("div",{className:"product-details",children:[Object(a.jsxs)("div",{className:"product-image-container",children:[Object(a.jsx)("div",{className:"device-preview",children:Object(a.jsx)("img",{src:f.preview,alt:"iphone"})}),Object(a.jsxs)("div",{className:"device-preview__minipreviews",children:[Object(a.jsx)("div",{className:"device-preview__minipreviews--one ".concat(f.class),children:Object(a.jsx)("img",{src:p[0].img1,alt:"iphone",onClick:y})}),Object(a.jsx)("div",{className:"device-preview__minipreviews--two",children:Object(a.jsx)("img",{src:p[1].im2,alt:"iphone",onClick:y})}),Object(a.jsx)("div",{className:"device-preview__minipreviews--three",children:Object(a.jsx)("img",{src:p[2].img3,alt:"iphone",onClick:y})}),Object(a.jsx)("div",{className:"device-preview__minipreviews--four",children:Object(a.jsx)("img",{src:p[3].img4,alt:"iphone",onClick:y})})]})]}),Object(a.jsxs)("div",{className:"product-info",children:[Object(a.jsx)("h1",{children:h}),Object(a.jsxs)("h2",{children:["$",d]}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"Description"})]}),Object(a.jsxs)("span",{children:[" ",m," "]}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"Battery"}),"  "]}),Object(a.jsxs)("span",{children:[" ",l," "]}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"Display"})]}),Object(a.jsxs)("span",{children:[" ",u," "]}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"CPU"})," "]}),Object(a.jsxs)("span",{children:[" ",b," "]}),Object(a.jsxs)("p",{children:[" ",Object(a.jsx)("strong",{children:"Camera"})," "]}),Object(a.jsxs)("span",{children:[" ",g," "]}),Object(a.jsx)("div",{className:"cart-button__wrapper",onClick:c,children:"Add to cart"})]})]})},ke=function(){return Object(a.jsxs)(f.a,{children:[Object(a.jsx)(Me,{}),Object(a.jsxs)(O.c,{children:[Object(a.jsx)(O.a,{exact:!0,path:"/products/:idPhone",component:Le}),Object(a.jsx)(O.a,{exact:!0,path:"/cart",component:y}),Object(a.jsx)(O.a,{exact:!0,path:"/",component:Ae})]})]})},Te=function(e){return Ne.find((function(i){return i.name===e}))},Ee=t(23),Ge=t.n(Ee),Re=function(){var e=c.a.useReducer(v,{products:[]}),i=Object(o.a)(e,2),t=i[0],r=i[1];return Object(a.jsx)(j.Provider,{value:{items:t,handleAddToCart:function(e){var i=e.currentTarget.parentNode.querySelector("img").alt,t=Te(i);r(b(t))},handleItems:function(e){var i=e.target.closest(".container-cart__details").querySelector("h2").innerHTML,t=Te(i);"minus"===e.target.id||"removing"===e.target.className?r(function(e){return{type:p,payload:{product:e}}}(t,t.price)):"plus"!==e.target.id&&"adding"!==e.target.className||r(function(e){return{type:m,payload:{product:e}}}(t,t.price))},handleDelete:function(e){var i=e.target.closest(".container-cart__item").querySelector("h2").innerHTML,t=Te(i);r(function(e){return{type:l,payload:{product:e}}}(t))},handleAddToCartSingleProduct:function(e){var i=e.currentTarget.parentElement.querySelector("h1").innerHTML,t=Te(i);r(b(t))},buyItems:function(){var e;r((e=t.products,{type:u,payload:{products:e}})),Ge.a.fire({icon:"success",title:"Successful purchase",text:"You have bought in E-commerce App. Thanks for your purchase"})}},children:Object(a.jsx)(ke,{})})};n.a.render(Object(a.jsx)(Re,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.fbac48c1.chunk.js.map