import{C as y}from"./CartBreadcrumb-0618f65a.js";import{c as l}from"./cartStore-fc1f3ec3.js";import{_ as v,m as I,a as B,r as _,o as c,c as i,h as x,e,T as w,b as s,d as h,w as T,t,F as p,i as F}from"./index-45ab631b.js";import{T as d}from"./toast-6c96786e.js";const{VITE_API:m,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"howtobefine",BASE_URL:"/plat-records/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{loadingBread:"",orderId:"",orderInfo:{},orderUser:{},orderProducts:[]}},methods:{getOrder(){this.orderId=this.$route.params.id;const a=`${m}api/${u}/order/${this.orderId}`;this.$http.get(a).then(o=>{this.orderInfo=o.data.order,this.orderUser=o.data.order.user,this.orderProducts=o.data.order.products}).catch(o=>{d.fire({icon:"error",title:`${o.response.data.message}`})})},pay(){this.orderId=this.$route.params.id;const a=`${m}api/${u}/pay/${this.orderId}`;this.$http.post(a).then(o=>{this.getOrder(),this.getCarts(),d.fire({icon:"success",title:`${o.data.message}`}),this.$router.push(`/completed/${this.orderId}`)}).catch(o=>{d.fire({icon:"error",title:`${o.response.data.message}`})})},...I(l,["getCarts"])},components:{CartBreadcrumb:y},computed:{...B(l,["cart"])},mounted(){this.loadingBread=this.$route.name,this.getOrder()}},k={class:"container-fluid"},U={class:"row"},E={class:"parallax py-10",style:{"background-image":"url(https://storage.googleapis.com/vue-course-api.appspot.com/howtobefine/1686751569347.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P45LfLKV3FGlcRGefBEX%2FtJlrKyfUFaIHIb2R5p5WX3K7G1a%2Bxh5asNViDR8dEM0qeMZYngXGFBR6Sband5shgjX5a8U5kMm3peuenpDAQ5W4wmwF9jL4E97aJKh83Qfp1flk70RmXyRzDaDeRZ3zIjNzEQsvvlbU%2FWBhMTSl6ybYWp0w4TeD%2B7eeJgAh8u0%2BhJT2952Yp1C6PYxpAQGf%2FRws2szR0LUcfeerQ63B%2F6L16hZyt7C0bU6nX2Qxh2B%2FjlwjJtCcyLbKUUIFNh5kyX9LUXndFGFs6IDKXLgW0Au9XDwgLBBBCfBmota%2FeoRtHrpFHWm%2FMFDgNGsQGtfOA%3D%3D)"}},A=s("h2",{class:"text-center text-light display-5 mb-5 fw-bold pt-6"},"PAYMENT",-1),D={"aria-label":"breadcrumb"},C={class:"breadcrumb justify-content-center mb-0 fs-5"},N={class:"breadcrumb-item"},P=s("li",{class:"breadcrumb-item text-light active","aria-current":"page"},"PAYMENT",-1),R={class:"container"},L={class:"row pb-5 pb-lg-9 gy-5"},V={class:"col-lg-6"},j={class:"card shadow-lg rounded-0 border-0 p-4"},X={class:"d-flex justify-content-between align-items-center pb-3"},G={class:"h5 mb-0 d-flex align-items-center"},S={key:0,class:"ms-2 text-danger fs-6"},M={key:1,class:"text-success ms-2 fs-6"},Q={class:"fs-5 mb-0 d-flex align-items-center"},z={class:"text-danger fs-6"},H={class:"list-unstyled border-top"},K={class:"flex-shrink-0"},O=["src","alt"],W={class:"d-flex flex-column justify-content-between flex-grow-1 ms-3"},Y={class:"d-flex align-items-center"},J={class:"h6 mb-0"},Z={class:"d-flex justify-content-between align-items-end"},q={class:"mb-0"},ss={class:"mb-0"},es={class:"col-lg-6"},ts={class:"card shadow-lg rounded-0 border-0 p-4"},os=s("h3",{class:"h5 mb-0 border-bottom pb-3"},"訂單資訊",-1),rs={class:"list-unstyled"},as={class:"py-2 border-bottom"},ns={class:"mb-0"},cs={class:"py-2 border-bottom"},is={class:"mb-0"},ds={class:"py-2 border-bottom"},ls={class:"mb-0"},_s={class:"py-2 border-bottom"},hs={class:"mb-0"},ps={class:"py-2 border-bottom"},ms={class:"mb-0"},us={class:"py-2 border-bottom"},bs={class:"mb-0"},fs={class:"py-2 border-bottom"},gs={class:"mb-0"},ys={class:"py-2 border-bottom"},vs={class:"mb-0"};function Is(a,o,Bs,xs,r,b){const f=_("router-link"),g=_("CartBreadcrumb");return c(),i(p,null,[(c(),x(w,{to:"title"},[e("｜付款")])),s("div",k,[s("div",U,[s("div",E,[A,s("nav",D,[s("ol",C,[s("li",N,[h(f,{to:"/",class:"text-decoration-none link-light hvr-light"},{default:T(()=>[e("Home")]),_:1})]),P])])])])]),s("div",R,[h(g,{parentBread:r.loadingBread},null,8,["parentBread"]),s("div",L,[s("div",V,[s("div",j,[s("div",X,[s("h3",G,[e(" 訂單品項"),r.orderInfo.is_paid?(c(),i("span",M,"已付款")):(c(),i("span",S,"未付款"))]),s("p",Q,[e(" 總金額："),s("span",z,"NT$ "+t(a.$filters.currency(r.orderInfo.total)),1)])]),s("ul",H,[(c(!0),i(p,null,F(r.orderProducts,n=>(c(),i("li",{class:"d-flex border-bottom py-3",key:n.id},[s("div",K,[s("img",{src:n.product.imageUrl,alt:n.product.title,width:"80"},null,8,O)]),s("div",W,[s("div",Y,[s("h4",J,t(n.product.title),1)]),s("div",Z,[s("p",q,[e(" NT$ "+t(a.$filters.currency(n.product.price))+" x ",1),s("span",null,t(n.qty),1)]),s("p",ss,"NT$ "+t(a.$filters.currency(n.total)),1)])])]))),128))])])]),s("div",es,[s("div",ts,[os,s("ul",rs,[s("li",as,[s("p",ns,[e(" 訂單金額： "),s("span",null,"NT$ "+t(a.$filters.currency(r.orderInfo.total)),1)])]),s("li",cs,[s("p",is,[e(" 訂單編號： "),s("span",null,t(r.orderInfo.id),1)])]),s("li",ds,[s("p",ls,[e(" 下單時間： "),s("span",null,t(a.$filters.date(r.orderInfo.create_at)),1)])]),s("li",_s,[s("p",hs,[e(" 寄送地址： "),s("span",null,t(r.orderUser.address),1)])]),s("li",ps,[s("p",ms,[e(" 顧客姓名： "),s("span",null,t(r.orderUser.name),1)])]),s("li",us,[s("p",bs,[e(" 連絡電話： "),s("span",null,t(r.orderUser.tel),1)])]),s("li",fs,[s("p",gs,[e(" 電子信箱： "),s("span",null,t(r.orderUser.email),1)])]),s("li",ys,[s("p",vs,[e(" 客戶備註： "),s("span",null,t(r.orderInfo.message),1)])])]),s("button",{type:"button",class:"btn btn-danger w-100",onClick:o[0]||(o[0]=n=>b.pay())},"確認付款")])])])])],64)}const ks=v($,[["render",Is]]);export{ks as default};