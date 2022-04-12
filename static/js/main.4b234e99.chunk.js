(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var o=n(62),r=n(58),a=n(4),c=n.n(a),l=n(0),s=n(59),i=n.n(s),u=n(61),d=n(9),h=(n(68),n(19)),p=n.n(h),m=n(1);function b(e){var t=e.onSubmit,n=e.currentUser;return Object(m.jsx)("form",{onSubmit:t,children:Object(m.jsxs)("fieldset",{id:"fieldset",children:[Object(m.jsxs)("p",{children:["Say hello, ",n.accountId,"!"]}),Object(m.jsxs)("p",{className:"highlight",children:[Object(m.jsx)("label",{htmlFor:"name",children:"Your name:"}),Object(m.jsx)("input",{autoComplete:"off",autoFocus:!0,id:"name_prompt",required:!0})]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("label",{htmlFor:"donation",children:"Donation (optional):"}),Object(m.jsx)("input",{autoComplete:"off",defaultValue:"0",id:"donation",max:p()(n.balance).div(Math.pow(10,24)),min:"0",step:"0.01",type:"number"}),Object(m.jsx)("span",{title:"NEAR Tokens",children:"\u24c3"})]}),Object(m.jsx)("button",{type:"submit",children:"Hello!"})]})})}function j(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("p",{children:"This app demonstrates a key element of NEAR\u2019s UX: once an app has permission to make calls on behalf of a user (that is, once a user signs in), the app can make calls to the blockchain for them without prompting extra confirmation. So you\u2019ll see that if you don\u2019t include a donation, your name gets posted right away."}),Object(m.jsx)("p",{children:"But if you do add a donation, then NEAR will double-check that you\u2019re ok with sending money to this app."}),Object(m.jsx)("p",{children:"Go ahead and sign in to try it out!"})]})}var O=p()(3).times(Math.pow(10,13)).toFixed(),f=function(e){var t=e.contract,n=e.currentUser,o=e.nearConfig,r=e.wallet,a=Object(l.useState)("No transaction executed."),c=Object(d.a)(a,2),s=c[0],i=c[1];return Object(m.jsxs)("main",{children:[Object(m.jsxs)("header",{children:[Object(m.jsx)("h1",{children:"NEAR Challenge #2 - Hello World"}),n?Object(m.jsx)("button",{onClick:function(){r.signOut(),window.location.replace(window.location.origin+window.location.pathname)},children:"Log out"}):Object(m.jsx)("button",{onClick:function(){r.requestSignIn({contractId:o.contractName,methodNames:[t.hello.name]},"NEAR Challenge #2 - Hello World",null,null)},children:"Log in"})]}),Object(m.jsxs)("h3",{children:["Status: ",s]}),n?Object(m.jsx)(b,{onSubmit:function(e){e.preventDefault();var n=e.target.elements,o=n.fieldset;n.hello;o.disabled=!0,t.hello({name:name_prompt.value},O,p()(donation.value||"0").times(Math.pow(10,24)).toFixed()).then((function(e){o.disabled=!1,donation.value="0",name_prompt.value="",name_prompt.focus(),i(e)}))},currentUser:n}):Object(m.jsx)(j,{})]})},g=n(60),w=n.n(g),S=n(20);function x(){return(x=Object(r.a)(c.a.mark((function e(){var t,n,r,a,l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w()(Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).NEAR_ENV||"testnet"),n=new S.keyStores.BrowserLocalStorageKeyStore,e.next=4,S.connect(Object(o.a)({keyStore:n},t));case 4:if(r=e.sent,!(a=new S.WalletConnection(r)).getAccountId()){e.next=12;break}return e.t0=a.getAccountId(),e.next=10,a.account().state();case 10:e.t1=e.sent.amount,l={accountId:e.t0,balance:e.t1};case 12:return e.next=14,new S.Contract(a.account(),t.contractName,{viewMethods:[],changeMethods:["hello"],sender:a.getAccountId()});case 14:return s=e.sent,e.abrupt("return",{contract:s,currentUser:l,nearConfig:t,walletConnection:a});case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return x.apply(this,arguments)}().then((function(e){var t=e.contract,n=e.currentUser,o=e.nearConfig,r=e.walletConnection;i.a.render(Object(m.jsx)(u.a,{children:Object(m.jsx)(f,{contract:t,currentUser:n,nearConfig:o,wallet:r})}),document.getElementById("root"))}))},60:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"hello.cryptosketches.testnet";e.exports=function(e){switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},68:function(e,t,n){},75:function(e,t){},85:function(e,t){}},[[130,1,2]]]);
//# sourceMappingURL=main.4b234e99.chunk.js.map