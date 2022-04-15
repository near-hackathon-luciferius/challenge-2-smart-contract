(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{130:function(e){e.exports=JSON.parse('{"name":"hello-react","version":"1.0.20","homepage":"https://near-hackathon-luciferius.github.io/challenge-2-smart-contract","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","js-sha256":"^0.9.0","materialize-css":"^1.0.0-rc.2","near-api-js":"^0.42.0","react":"^16.13.1","react-dom":"^16.13.1","react-materialize":"^3.9.9","react-router-dom":"^6.3.0","react-scripts":"4.0.3","save":"^2.4.0","save-dev":"^0.0.1-security","styled-components":"^5.2.0","web-vitals":"^1.0.1"},"scripts":{"start":"parcel src/index.html","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"npm run build","deploy":"gh-pages -d build -u \'Pages Bot <pages.bot@nonexisting.io>\'"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"gh-pages":"^3.2.3","parcel-bundler":"^1.12.5"}}')},137:function(e,t){},147:function(e,t){},192:function(e,t,n){"use strict";n.r(t);var r=n(78),a=n(25),o=n(4),c=n.n(o),s=n(0),i=n(48),l=n.n(i),u=n(77),h=n(13),d=(n(84),n(49)),p=n.n(d),m=n(17),b=n(3);function g(e){var t=e.onSubmit,n=e.currentUser;return Object(b.jsx)("form",{onSubmit:t,children:Object(b.jsxs)("fieldset",{id:"fieldset",children:[Object(b.jsxs)("p",{children:["Say hello, ",n.accountId,"!"]}),Object(b.jsx)("p",{className:"highlight",children:Object(b.jsx)(m.TextInput,{autoComplete:"off",autoFocus:!0,id:"name_prompt",className:"name_input",label:"Your name",required:!0})}),Object(b.jsx)(m.Button,{type:"submit",value:"hello",small:!0,className:"margin_button",tooltip:"Executes the method hello which returns a message from NEAR. This does not require a confirmation.",children:"Hello"}),Object(b.jsx)(m.Button,{type:"submit",value:"remember",small:!0,className:"margin_button",tooltip:"Executes the method remember_me which stores the given name in the smart contract. This does require a confirmation.",children:"Remember me"})]})})}function f(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:"This app demonstrates a key element of NEAR\u2019s UX: once an app has permission to make calls on behalf of a user (that is, once a user signs in), the app can make calls to the blockchain for them without prompting extra confirmation. So you\u2019ll see that if you use the hello button, you will get a response right away."}),Object(b.jsx)("p",{children:"But if you do use the remember me button, then NEAR will double-check that you\u2019re ok with sending money to this app for remebering the name."}),Object(b.jsx)("p",{children:"Go ahead and sign in to try it out!"})]})}n(129);var w=n(130).version;n(131);var j=p()(3).times(Math.pow(10,13)).toFixed(),v=function(e){var t=e.contract,n=e.currentUser,r=e.nearConfig,o=e.wallet,i=e.lastTransaction,l=e.provider,u=e.errorMessage,d=Object(s.useState)(u?decodeURI(u):n?"Thinking please wait...":"Please login first."),v=Object(h.a)(d,2),O=v[0],_=v[1];return Object(s.useEffect)((function(){function e(){return(e=Object(a.a)(c.a.mark((function e(t,n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.txStatus(t,n);case 2:r=e.sent,_(r.receipts_outcome[0].outcome.logs.pop());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function r(){return(r=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get_last_message({account_id:n});case 2:r=e.sent,_(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&i&&!u?function(t,n){e.apply(this,arguments)}(i,n.accountId):n&&!u&&function(e){r.apply(this,arguments)}(n.accountId),window.history.pushState({},"",window.location.origin+window.location.pathname)}),[n,u,i,t,l]),Object(b.jsxs)("main",{children:[Object(b.jsxs)("header",{children:[Object(b.jsxs)("h1",{children:["NEAR Challenge #2 - Hello World - ",w]}),n?Object(b.jsx)(m.Button,{onClick:function(){o.signOut(),window.location.replace(window.location.origin+window.location.pathname)},className:"login_button",small:!0,children:"Log out"}):Object(b.jsx)(m.Button,{onClick:function(){o.requestSignIn({contractId:r.contractName,methodNames:[t.hello.name]},"NEAR Challenge #2 - Hello World",null,null)},className:"login_button",small:!0,children:"Log in"})]}),Object(b.jsxs)("h5",{children:["Status: ",O]}),n?Object(b.jsx)(g,{onSubmit:function(e){e.preventDefault();var n=e.target.elements,r=n.fieldset,a=n.name_prompt;r.disabled=!0,"hello"===e.nativeEvent.submitter.value?t.hello({name:a.value},j,0).then((function(e){r.disabled=!1,a.value="",a.focus(),_(e)})):t.remember_me({name:a.value},j,p()("0.00045").times(Math.pow(10,24)).toFixed()).then((function(e){r.disabled=!1,a.value="",a.focus(),_(e)}))},currentUser:n}):Object(b.jsx)(f,{})]})},O=n(76),_=n.n(O),x=n(26);function S(){return(S=Object(a.a)(c.a.mark((function e(){var t,n,a,o,s,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=_()(Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).NEAR_ENV||"testnet"),n=new x.keyStores.BrowserLocalStorageKeyStore,e.next=4,x.connect(Object(r.a)({keyStore:n},t));case 4:if(a=e.sent,!(o=new x.WalletConnection(a)).getAccountId()){e.next=12;break}return e.t0=o.getAccountId(),e.next=10,o.account().state();case 10:e.t1=e.sent.amount,s={accountId:e.t0,balance:e.t1};case 12:return e.next=14,new x.Contract(o.account(),t.contractName,{viewMethods:["get_last_message"],changeMethods:["hello","remember_me"],sender:o.getAccountId()});case 14:return i=e.sent,l=a.connection.provider,e.abrupt("return",{contract:i,currentUser:s,nearConfig:t,walletConnection:o,provider:l});case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.nearInitPromise=function(){return S.apply(this,arguments)}().then((function(e){var t,n,r=e.contract,a=e.currentUser,o=e.nearConfig,c=e.walletConnection,s=e.provider,i=new URLSearchParams(window.location.search);i.has("transactionHashes")&&(t=i.get("transactionHashes")),i.has("errorMessage")&&(n=i.get("errorMessage")),l.a.render(Object(b.jsx)(u.a,{children:Object(b.jsx)(v,{contract:r,currentUser:a,nearConfig:o,wallet:c,lastTransaction:t,provider:s,errorMessage:n})}),document.getElementById("root"))}))},76:function(e,t){var n=Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"hello.cryptosketches.testnet";e.exports=function(e){switch(e){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:n,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:n,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:n,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:"".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/challenge-2-smart-contract",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOME,"/.near/validator_key.json"),walletUrl:"http://localhost:4000/wallet",contractName:n};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:n,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:n,masterAccount:"test.near"};default:throw Error("Unconfigured environment '".concat(e,"'. Can be configured in src/config.js."))}}},84:function(e,t,n){}},[[192,1,2]]]);
//# sourceMappingURL=main.9945d1c1.chunk.js.map