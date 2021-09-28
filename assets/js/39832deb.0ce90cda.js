"use strict";(self.webpackChunk_microsoft_overreact_website=self.webpackChunk_microsoft_overreact_website||[]).push([[465],{876:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(2784);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8268:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=a(7896),o=a(1461),r=(a(2784),a(876)),i=["components"],s={id:"using_the_generator",title:"Using the Generator",sidebar_label:"Using the Generator"},l="`overreact-odata` generator",c={unversionedId:"getting_started/using_the_generator",id:"getting_started/using_the_generator",isDocsHomePage:!1,title:"Using the Generator",description:"We created a Yeoman generator to auto-generate specs and data hooks, if the service talks OData. The source code of the generator can be found here and it is published on NPM here.",source:"@site/docs/getting_started/using_the_generator.md",sourceDirName:"getting_started",slug:"/getting_started/using_the_generator",permalink:"/overreact-core/getting_started/using_the_generator",editUrl:"https://github.com/microsoft/overreact-core/packages/website/edit/master/website/docs/getting_started/using_the_generator.md",tags:[],version:"current",lastUpdatedBy:"Like Zhu",lastUpdatedAt:1632869290,formattedLastUpdatedAt:"9/28/2021",frontMatter:{id:"using_the_generator",title:"Using the Generator",sidebar_label:"Using the Generator"},sidebar:"someSidebar",previous:{title:"Quick Start",permalink:"/overreact-core/"},next:{title:"Mutating Data",permalink:"/overreact-core/getting_started/mutation"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Bootstrapping your spec package",id:"bootstrapping-your-spec-package",children:[]},{value:"Defining model aliases",id:"defining-model-aliases",children:[]},{value:"Cherry-picking specs",id:"cherry-picking-specs",children:[]},{value:"Generating spec files",id:"generating-spec-files",children:[]},{value:"Adding more specs",id:"adding-more-specs",children:[]}],d={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overreact-odata-generator"},(0,r.kt)("inlineCode",{parentName:"h1"},"overreact-odata")," generator"),(0,r.kt)("p",null,"We created a Yeoman generator to auto-generate specs and data hooks, if the service talks OData. The source code of the generator can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/overreact-core/tree/main/packages/generator-overreact-odata"},"here")," and it is published on NPM ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/generator-overreact-odata"},"here"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To use the generator, you must have ",(0,r.kt)("a",{parentName:"p",href:"https://yeoman.io/learning/index.html"},"yo")," and the generator itself installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn global add yo generator-overreact-odata\n")),(0,r.kt)("h2",{id:"bootstrapping-your-spec-package"},"Bootstrapping your spec package"),(0,r.kt)("p",null,"In your working directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~$ mkdir my-spec-package\n~$ cd my-spec-package\n~/my-spec-package$ yo overreact-odata:generator\n")),(0,r.kt)("p",null,"It will ask a few questions to get started:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Looks like this is the first time you're generating this package.\nLet's start with gathering some basic information.\n? Your package name (my spec package):\n")),(0,r.kt)("p",null,"Enter a name for your package, and hit Enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? OData metadata endpoint URL:\n")),(0,r.kt)("p",null,"Enter the URL of the OData endpoint (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"https://ui.ads-int.microsoft.com/ODataApi/Mca/V1/"),"). Note that we don't need to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"$metadata")," part."),(0,r.kt)("p",null,"The generator will then start bootstrapping your spec package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Fetching metadata from https://ui.ads-int.microsoft.com/ODataApi/Mca/V1/\nMetadata fetched.\n   create package.json\n   create .overreactrc.json\n\nChanges to package.json were detected.\n\nRunning npm install for you to install the required dependencies.\nnpm notice created a lockfile as package-lock.json. You should commit this file.\n\nadded 15 packages from 10 contributors in 2.951s\n\nPlease modify "modelAliases" in .overreactrc.json, and run "yo overreact-odata" again.\n')),(0,r.kt)("h2",{id:"defining-model-aliases"},"Defining model aliases"),(0,r.kt)("p",null,"Now you'll have a barebone folder like this after the first run:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Bootstrapped Folder",src:a(7539).Z})),(0,r.kt)("p",null,"To continue with spec generation, you'll need to edit ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json")," to select the EDM models you'd like to use. The generator will use the models you've selected to enumerate data paths to form the specs. Any models that are not present in the file would not appear in the generated data paths."),(0,r.kt)("p",null,"You can also add more models into the file. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/concept/schema"},"Schema")," for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".overreactrc.json"',title:'".overreactrc.json"'},'{\n  "url": "https://ui.ads-int.microsoft.com/ODataApi/Mca/V1/",\n  "modelAliases": {\n    // note you can update the alias,\n    // such as "mca_customer" -> "customer"\n    "mca_customer": "Model/McaCustomer",\n\n    "social_profile": "Model/SocialProfile",\n    "post": "Model/Post",\n    "activity": "Model/Activity",\n    "channel_user": "Model/ChannelUser",\n\n    "mca_campaign": "Model/McaCampaign",\n\n    // schema alias\n    "disapproved_campaign": "Model/McaCampaign"\n\n    "mca_ad": "Model/McaAd",\n    "target": "Model/Target",\n    "mca_location": "Model/McaLocation",\n    "channel_profile": "Model/ChannelProfile",\n    "mca_tag": "Model/McaTag",\n\n    // and more schema that might not exist in metadata\n    "suggested_ad": "SuggestedAd",\n\n    // ...\n  }\n}\n')),(0,r.kt)("p",null,"After the model aliases has been defined, run the generator again. This time the generator will ask for environment tag and root properties. ",(0,r.kt)("em",{parentName:"p"},"Environment tag")," is used by overreact's ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," class as a distinguishable identifier among various environments, while ",(0,r.kt)("em",{parentName:"p"},"root property")," is the property from which all other models are navigated from. In OData representation, this is usually the first segment of the URL. For example, in the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://services.odata.org/v4/TripPinServiceRW/Customers(123)/Accounts(456)/\n")),(0,r.kt)("p",null,"The root property ",(0,r.kt)("em",{parentName:"p"},"name")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers"),", and its ",(0,r.kt)("em",{parentName:"p"},"model name")," would be ",(0,r.kt)("inlineCode",{parentName:"p"},"Model/McaCustomer"),", as defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"modelAliases")," property in ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'~/my-spec-package$ yo overreact-odata:generator\n? Enviroment tag MyEndpoint\n? What is the name of the root property? Customers\n? Please provide the model name for the root property Model/McaCustomer\nFetching metadata from https://ui.ads-int.microsoft.com/ODataApi/Mca/V1/\nMetadata fetched.\n\nidentical package.json\n conflict .overreactrc.json\n? Overwrite .overreactrc.json? overwrite\n    force .overreactrc.json\n\nNo change to package.json was detected. No package manager install will be executed.\nPlease modify "specList" in .overreactrc.json, and run "yo overreact-odata" again to generate spec files.\n')),(0,r.kt)("h2",{id:"cherry-picking-specs"},"Cherry-picking specs"),(0,r.kt)("p",null,"After the second run, ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json")," file will contain a new property called ",(0,r.kt)("inlineCode",{parentName:"p"},"specList"),", which includes configurations for all specs to be generated:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"specList": {\n    "customer": [\n      {\n        "type": "entity",\n        "name": "useCustomer",\n        "dataPath": "customer"\n      },\n      {\n        "type": "coll",\n        "name": "useCustomers",\n        "dataPath": "customer"\n      }\n    ],\n    "customer:account": [\n      {\n        "type": "entity",\n        "name": "useAccount",\n        "dataPath": "customer:account"\n      },\n      {\n        "type": "coll",\n        "name": "useAccounts",\n        "dataPath": "customer:account"\n      }\n    ],\n    "customer:account:get_link_preview": [\n      {\n        "type": "call",\n        "name": "useGetLinkPreview",\n        "dataPath": "customer:account:get_link_preview"\n      }\n    ],\n    // ...\n}\n')),(0,r.kt)("p",null,"Each spec contains a name, and a list of configurations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  "spec_name": [\n     "config1": {\n        "type": "entity",\n        "name": "useSpecName",\n     },\n     "config2": {\n        // ...\n     },\n     // ...\n  ]\n')),(0,r.kt)("p",null,"This table explains that the config object should include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"entity")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"coll")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"call")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the spec. ",(0,r.kt)("inlineCode",{parentName:"td"},"call")," includes Action and Function")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the data hook, ",(0,r.kt)("inlineCode",{parentName:"td"},"useAbc"),', where "Abc" is the name of the last model in the data path in pascal case. If ',(0,r.kt)("inlineCode",{parentName:"td"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"coll"),", it'll be pluralized (i.e., ",(0,r.kt)("inlineCode",{parentName:"td"},"useAbcs"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataPath"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This is the same ",(0,r.kt)("inlineCode",{parentName:"td"},"dataPath")," in request contracts used by overreact")))),(0,r.kt)("p",null,"At this moment, however, the actual specs are still not generated yet. This is to give you a chance to edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"specList")," property and cherry pick the specs that are useful to you."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even after the spec files are generated, you can still update ",(0,r.kt)("inlineCode",{parentName:"p"},"specList")," to either remove, or introduce new specs, by adding the new specs/configurations into the property, and running the generator again."))),(0,r.kt)("h2",{id:"generating-spec-files"},"Generating spec files"),(0,r.kt)("p",null,"Finally, once you have a curated ",(0,r.kt)("inlineCode",{parentName:"p"},"specList")," configured, run the generator one more time to generate the actual spec files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/my-spec-package$ yo overreact-odata:generator\nFetching metadata from https://ui.ads-int.microsoft.com/ODataApi/Mca/V1\nMetadata fetched.\nidentical package.json\nidentical .overreactrc.json\n   create env\\edm.js\n   create env\\env-instance.js\n   create env\\schema.js\n   create env\\requestor.js\n   create specs\\customer\\account\\get_u_p_budget_suggestions\\__specs\\calls\\action-spec.js\n   create specs\\customer\\account\\get_u_p_budget_suggestions\\__hooks\\calls\\action-hook.js\n   ...\n   create index.js\n\nNo change to package.json was detected. No package manager install will be executed.\nSpec files generated.\n")),(0,r.kt)("p",null,"And the folder will now look like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spec Folder",src:a(882).Z})),(0,r.kt)("p",null,"At this time, all the basic specs and data hooks are generated in their respective folders under the ",(0,r.kt)("inlineCode",{parentName:"p"},"specs")," subfolder in the package. Specs for entity/collection operations are located in the object model's ",(0,r.kt)("inlineCode",{parentName:"p"},"__hook")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"__specs")," folder directly, while any OData Action/Functions will have dedicated sub-folders named after the call itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"specs\\customer\\account\n  |-- activity\n  |-- campaign\n      |-- __hooks\n          |-- coll\n              |-- coll-hook.js         <-- hooks for Campaign collection operations\n          |-- entity\n      |-- __specs\n      |-- associate_profile\n          |-- __hooks\n              |-- calls\n                  |-- action-hook.js   <-- hooks for Campaigns/AssociateProfile call\n          |-- __specs\n")),(0,r.kt)("p",null,"However if you open any of the .js files, you'll probably notice some errors saying something like this:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unable to resolve path to module './hook-decorators'")),(0,r.kt)("p",null,"This is because we're missing ",(0,r.kt)("em",{parentName:"p"},"decorators"),". Decorators are additional files to provide customization to the generated specs, so that developers could provide extra control over how the data hooks/specs should behave. If you're familiar with overreact, you can manually write the decorators (by creating the missing files and export the desired decorator functions), or, you can run the generator one more time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"~/my-spec-package$ yo overreact-odata:generator --decorators\n")),(0,r.kt)("p",null,"Notice the new ",(0,r.kt)("inlineCode",{parentName:"p"},"--decorators")," switch added to the command line. This tells the generator to create additional decorators to make the folder look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"specs\\customer\\account\n  |-- activity\n  |-- campaign\n      |-- __hooks\n          |-- coll\n              |-- coll-hook.js\n              |-- hook-decorators.js   <-- hook decorators\n          |-- entity\n      |-- __specs\n          |-- coll\n              |-- add-spec.js\n              |-- add-decorators.js    <-- collection decorators for add operation\n      |-- associate_profile\n          |-- __hooks\n              |-- calls\n                  |-- action-hook.js\n          |-- __specs\n")),(0,r.kt)("p",null,"Those decorators provide a way to perform additional operations beyond what has been generated for you. Take a look at the generated decorator.js files to try it out yourself!"),(0,r.kt)("h2",{id:"adding-more-specs"},"Adding more specs"),(0,r.kt)("p",null,"It is generally recommended to incrementally add more data hooks and specs only when they're needed. This keeps the package small and took overreact less time to initialize. "),(0,r.kt)("p",null,"When a new hook is indeed needed, all you need to do is follow the steps listed below to create new specs for the new operation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add new model alias to the ",(0,r.kt)("inlineCode",{parentName:"li"},".overreactrc.json")," file."),(0,r.kt)("li",{parentName:"ol"},"Add new spec into ",(0,r.kt)("inlineCode",{parentName:"li"},"specList")," section in the same file, making sure the spec names and its corresponding data path segments includes the same model aliases added in previous step."),(0,r.kt)("li",{parentName:"ol"},"Run the generator again with ",(0,r.kt)("inlineCode",{parentName:"li"},"--decorators")," flag. This will make the generator create decorator files alongside the spec and hook definition files.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Sometimes it is difficult to manually construct the spec configuration object in ",(0,r.kt)("inlineCode",{parentName:"p"},"specList"),". An eaiser way is\nto make a backup copy of the ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json")," file, then create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json")," with everything from the original file, ",(0,r.kt)("em",{parentName:"p"},"except")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"specList")," object. After that, run the generator again and the full ",(0,r.kt)("inlineCode",{parentName:"p"},"specList")," will be created for you, from which you can look for the desired specs, and copy the definitions over to the original ",(0,r.kt)("inlineCode",{parentName:"p"},".overreactrc.json")," file."))))}m.isMDXComponent=!0},7539:function(e,t,a){t.Z=a.p+"assets/images/bootstrapped-ccd53b6b1e904b90156550163dee286a.jpg"},882:function(e,t,a){t.Z=a.p+"assets/images/spec-folder-fa0c89656fd55283cae38bc712f975f0.jpg"}}]);