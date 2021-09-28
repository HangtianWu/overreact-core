"use strict";(self.webpackChunk_microsoft_overreact_website=self.webpackChunk_microsoft_overreact_website||[]).push([[458],{876:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1141:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=a(7896),r=a(1461),o=(a(2784),a(876)),i=["components"],s={slug:"odata",title:"Working with OData",author:"zlike",author_title:"overreact",author_url:"https://github.com/zlike",author_image_url:"https://avatars0.githubusercontent.com/u/760238?v=4",tags:["odata"]},c=void 0,l={permalink:"/overreact-core/blog/odata",editUrl:"https://github.com/microsoft/overreact-core/packages/website/edit/master/website/blog/blog/2021-01-14-odata.md",source:"@site/blog/2021-01-14-odata.md",title:"Working with OData",description:"A typical usage of overreact within our team is to deal with OData from various service endpoints. Usually these endpoints already have pre-built schema packages available (such as @bingads-webui/mca-odata-schemas, and @bingads-webui/campaign-odata-schemas), from which we can extract useful information and generate overreact specs without having our developers write from scratch. Given each entity (e.g., Activity, Ad) have CRUD operations, as well as OData actions/functions attached, this could save a tremendous amount of manual effort.",date:"2021-01-14T00:00:00.000Z",formattedDate:"January 14, 2021",tags:[{label:"odata",permalink:"/overreact-core/blog/tags/odata"}],readingTime:3.705,truncated:!1,authors:[{name:"zlike",title:"overreact",url:"https://github.com/zlike",imageURL:"https://avatars0.githubusercontent.com/u/760238?v=4"}]},u={authorsImageUrls:[void 0]},p=[{value:"The Idea",id:"the-idea",children:[]},{value:"Usage",id:"usage",children:[]}],m={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A typical usage of overreact within our team is to deal with ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," from various service endpoints. Usually these endpoints already have pre-built schema packages available (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"@bingads-webui/mca-odata-schemas"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"@bingads-webui/campaign-odata-schemas"),"), from which we can extract useful information and generate overreact specs without having our developers write from scratch. Given each entity (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Ad"),") have CRUD operations, as well as OData actions/functions attached, this could save a tremendous amount of manual effort."),(0,o.kt)("h2",{id:"the-idea"},"The Idea"),(0,o.kt)("p",null,"To generate a spec for each OData model, we'll need to solve these problems:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"How to create ",(0,o.kt)("inlineCode",{parentName:"li"},"dataPath")," from OData model hierarchy."),(0,o.kt)("li",{parentName:"ol"},'How to assign proper "Key" values to each level on hierarchy.'),(0,o.kt)("li",{parentName:"ol"},'How to identify from response which property is the "Key".')),(0,o.kt)("p",null,'In overreact, the internal data structure ("store") is constructed from a schema tree, where each node has an associated ',(0,o.kt)("inlineCode",{parentName:"p"},"dataPath")," to describe its location from root. Similarly, OData also organizes data using a tree-like structure, and provides navigation properties to locate specific data in the tree. "),(0,o.kt)("p",null,"Consider an OData GET request to fetch an ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity"),". The URL would look like this:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"GET ",(0,o.kt)("a",{parentName:"p",href:"https://contoso.com/Customers(123)/Accounts(456)/Activities('789')"},"https://contoso.com/Customers(123)/Accounts(456)/Activities('789')"))),(0,o.kt)("p",null,"We can directly map ",(0,o.kt)("inlineCode",{parentName:"p"},"dataPath")," from EDM hierarchy to ",(0,o.kt)("inlineCode",{parentName:"p"},"customer:account:activity"),"."),(0,o.kt)("p",null,"For OData actions/functions, a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://contoso.com/Customers(123)/Accounts(456)/Default.FooBar()")," will map to ",(0,o.kt)("inlineCode",{parentName:"p"},"customer:account:foo_bar"),'. Note that we converted the Pascal naming to Snake convention, and discarded the namespace "Default" in this case.'),(0,o.kt)("p",null,'The "Key" values are used to identify which entity to use on each level in the hierarchy. Currently in overreact we have 2 options to select keys:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"locator.order")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"variables"),". For example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const variables = {\n    locator: {\n        order: ['cid', 'aid', 'activityId'],\n        descriptor: { cid: 123, aid: 456, activityId: '789' },\n    },\n};\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Using ",(0,o.kt)("inlineCode",{parentName:"li"},"parentKeySelector")," in request contract.")),(0,o.kt)("p",null,"Unfortunately ",(0,o.kt)("inlineCode",{parentName:"p"},"parentKeySelector"),' only provides "Key" info for current value, as well as its "parent" key values. We\'ll loose info for levels that are higher than 2, so in our case we\'ll resort to using ',(0,o.kt)("inlineCode",{parentName:"p"},"order"),"."),(0,o.kt)("p",null,'Finally, we need to identify the "Key" property value from OData responses, as they are used to look up cached items in overreact store. Luckily it is usually specified in ',(0,o.kt)("inlineCode",{parentName:"p"},"$$ODataExtension.Key")," from the OData schemas. It is an array value but for now we'll only leverage the first one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const { $$ODataExtension } = entitySchema;\n\ncreateResponseContract({\n    // ...\n    keySelector: r => r[$$ODataExtension.Key[0]],\n})\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,'First, we\'ll need to define a "name mapper", to map OData schema name (',(0,o.kt)("inlineCode",{parentName:"p"},"Model/McaCustomer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Edm/String"),', etc.) to snake-case names ("customer", "string", "load_thread", etc.)'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const pascalToSnakeCase = str => str.split(/(?=[A-Z])/).join('_').toLowerCase();\n\nfunction schemaNameMapper(name) {\n  const MODEL_PREFIX = 'Model/';\n  const PRIMITIVE_PREFIX = 'Edm/';\n  const MCA_PREFIX = 'Mca';\n\n  let modelName = name;\n  if (name.startsWith(MODEL_PREFIX)) {\n    modelName = name.substring(MODEL_PREFIX.length);\n\n    if (modelName.startsWith(MCA_PREFIX)) {\n      modelName = modelName.substring(MCA_PREFIX.length);\n    }\n  }\n  if (name.startsWith(PRIMITIVE_PREFIX)) {\n    modelName = name.substring(PRIMITIVE_PREFIX.length);\n  }\n\n  return pascalToSnakeCase(modelName);\n}\n")),(0,o.kt)("p",null,"Given you've already set up the EDM model, simply create overreact schema and specs by doing this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  createSpec,\n  createOverreactSchema,\n} from '@microsoft/overreact-odata';\n\nconst overreactSchema = createOverreactSchema(edm, schemaNameMapper, {\n  disapproved_campaign: 'Model/McaCampaign',\n});\n\nconst specs = createSpec(\n  // EDM model from @bingads-webui/edm-core\n  edm,    \n  overreactSchema,\n\n  // \"schemas\" is exported from OData schema packages, such as\n  //   import { schemas } from '@bingads-webui/mca-odata-schemas';\n  schemas['Model/McaCustomer'],\n\n  schemaNameMapper,\n\n  // Root property\n  [{ name: 'Customers', schema: schemas['Model/McaCustomer'] }],\n  {}    // reserved for future use\n);\n\n// Debug only: dump the specs object to see what's been generated:\nconsole.log(specs);\n")),(0,o.kt)("p",null,"Now, in your container component, simply do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n    useODataAction,\n    useODataEntity,\n    useODataCollection,\n} from '@microsoft/overreact-odata';\n\nconst useReplyAsComment = variables => useODataAction(specs, 'customer:account:activity:reply_as_comment', null, variables);\n\nconst useActivity = (variables, config) => useODataEntity(specs, 'customer:account:activity', variables, config);\n\nconst useActivities = (variables, config) => useODataCollection(specs, 'customer:account:activity', variables, config);\n\nconst testVariableEntity = {\n    locator: {\n        descriptor: { cid: 123, aid: 456, activityId: '789' },\n        order: ['cid', 'aid', 'activityId'],\n    },\n};\n\nconst testVariableCollection = {\n    locator: {\n        descriptor: { cid: 123, aid: 456 },\n        order: ['cid', 'aid'],\n    },\n    pageSize: 20,\n    cursorIndex: 0,\n};\n\nexport function ActivityItem() {\n  const [{ data }, { update }] = useActivity(testVariableEntity);\n\n  const updateData = useCallback(() => {\n    update({\n      Id: '123',\n      Title: 'Not fake anymore',\n      Author: 'Me',\n    });\n  }, [update]);\n\n  return (\n    <div>\n      <pre>{data && JSON.stringify(data, null, 2)}</pre>\n      <button onClick={updateData}>Update</button>\n    </div>\n  );\n}\n\nexport function ActivityList() {\n  const [{ data }, { loadMore }] = \n    useActivities(testVariableCollection);\n\n  useEffect(() => {\n    loadMore();\n  }, [loadMore]);\n\n  return (\n    <div>\n      <pre>{data && JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n\nexport function ActivityReplyAsComment() {\n  const [data] = useReplyAsComment(testVariableEntity);\n\n  return (\n    <div>\n      <pre>{data && JSON.stringify(data, null, 2)}</pre>\n    </div>\n  );\n}\n\n")))}d.isMDXComponent=!0}}]);