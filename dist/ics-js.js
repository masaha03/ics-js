!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ICS=void 0;var o=n(4),u=r(o);t.ICS=u["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){var o=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];n(this,e),this.value=t,this.props=r||{},this.skipTransformer=o}return r(e,[{key:"shortTransformer",value:function(){return!0}},{key:"transformer",value:function(){return this.value}},{key:"transformedValue",value:function(){return this.skipTransformer||this.shortTransformer()?this.value:this.transformer()}},{key:"transformedProps",value:function(){var e=[];for(var t in this.props)e.push(t+"="+this.props[t]);return e.join(";")}},{key:"toString",value:function(){var e=Object.keys(this.props).length>0,t=this.constructor.propName+(e?";"+this.transformedProps():""),n=this.transformedValue(),r=t+":"+n;return r.match(/.{1,75}/g).join("\r\n ")}}]),e}();o.keyRegex=/^[A-Z]([A-Z]|-)*[A-Z]$/,o.propName="Property",t["default"]=o},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(4),c=o(f),s=n(35),l=r(s),p=n(6),y=function(){function e(){i(this,e),this.prefix="BEGIN:"+this.constructor.componentName,this.suffix="END:"+this.constructor.componentName,this._props=[],this._components=[]}return a(e,[{key:"props",value:function(){return Object.freeze(this._props.slice(0))}},{key:"propNames",value:function(){return Object.freeze(this.props().map(function(e){return e.constructor.propName}))}},{key:"addProp",value:function(e,t,n,r){var o=this,u=this.constructor.validProps;if(!u[e])throw new p.InvalidProvidedPropError;var i=l[e]||l._default(e),a=new i(t,n,r);return u[e].forEach(function(e){return e(o,a)}),this._props.push(a),a}},{key:"components",value:function(){return Object.freeze(this._components.slice(0))}},{key:"componentNames",value:function(){return Object.freeze(this.components().map(function(e){return e.constructor.componentName}))}},{key:"addComponent",value:function(t){var n=this,r=this.constructor.validComponents,o=t.constructor.componentName;if(!(t instanceof e))throw new TypeError("Expected `component` to be an instance of Component.");if(!r[o])throw new p.InvalidProvidedComponentError;return r[o].forEach(function(e){return e(n,t)}),this._components.push(t),t}},{key:"reset",value:function(){this._props=this._components=[]}},{key:"validateRequired",value:function(){var t=this.constructor.requiredProps,n=e._intersect(t,this.propNames());if(n.length>0)throw new p.InvalidComponentError;return!0}},{key:"toString",value:function(){this.validateRequired();var e=this._props.map(function(e){return e.toString()}),t=this._components.map(function(e){return e.toString()});return[this.prefix].concat(u(e),u(t),[this.suffix]).join(this.constructor.separator)}},{key:"toBlob",value:function(){return new Blob([this.toString()],{type:c["default"].MIME_TYPE})}},{key:"toBase64",value:function(){var e=this.toBlob(),t=new window.FileReader;return new Promise(function(n,r){t.readAsDataURL(e),t.onloadend=function(){return n(t.result)},t.onerror=function(){return r(t.error)},t.onabort=function(){return r()}})}}],[{key:"_intersect",value:function(e,t){var n=new Set(t);return e.filter(function(e){return!n.has(e)})}}]),e}();y.componentName="Component",y.separator="\r\n",y.requiredProps=[],y.validProps={},y.validComponents={},t["default"]=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(8),c=r(f),s=n(4),l=r(s),p=n(1),y=r(p),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return!(this.value instanceof Date)}},{key:"transformer",value:function(){var e="DATE"==this.props.VALUE;if(e){var t=6e4*this.value.getTimezoneOffset();this.value=new Date(this.value.getTime()+t)}var n=e?l["default"].DateFormat:l["default"].DateTimeFormat;return(0,c["default"])(this.value,n)}}]),t}(y["default"]);d.propName="DTSTAMP",t["default"]=d},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var u=n(14),i=r(u),a=function c(){o(this,c)};a.MIME_TYPE="text/calendar",a.DateFormat="YYYYMMDD",a.DateTimeFormat="YYYYMMDDTHHmmss",t["default"]=a;for(var f in i)a[f]=i[f]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.unique=t.singleton=t.required=void 0;var o=n(15),u=r(o),i=n(16),a=r(i),f=n(17),c=r(f);t.required=u["default"],t.singleton=a["default"],t.unique=c["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationError=t.InvalidProvidedPropError=t.InvalidProvidedComponentError=t.InvalidComponentError=void 0;var o=n(18),u=r(o),i=n(19),a=r(i),f=n(20),c=r(f),s=n(21),l=r(s);t.InvalidComponentError=u["default"],t.InvalidProvidedComponentError=a["default"],t.InvalidProvidedPropError=c["default"],t.ValidationError=l["default"]},function(e,t){"use strict";var n=function(){function e(e,t){for(var n in t){var r=t[n];r.configurable=!0,r.value&&(r.writable=!0)}Object.defineProperties(e,t)}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),r=function a(e,t,n){var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:a(o,t,n)}if("value"in r&&r.writable)return r.value;var u=r.get;if(void 0!==u)return u.call(n)},o=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},i=function(e){function t(e){u(this,t),Error.captureStackTrace(this,this.constructor),this.message=e,r(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return o(t,e),n(t,{name:{get:function(){return this.constructor.name}}}),t}(Error);e.exports=i},function(e,t,n){"use strict";var r=n(38),o=n(36),u=n(37),i=n(9).Parser,a=new i({YYYY:function(e){return e.getFullYear()},YY:function(e){return e.getFullYear()%100},MMMM:function(e){return r[e.getMonth()]},MMM:function(e){return r.abbr[e.getMonth()]},MM:function(e){return u(e.getMonth()+1)},M:function(e){return e.getMonth()+1},dddd:function(e){return o[e.getDay()]},ddd:function(e){return o.abbr[e.getDay()]},dd:function(e){return o["short"][e.getDay()]},d:function(e){return e.getDay()},DD:function(e){return u(e.getDate())},D:function(e){return e.getDate()},A:function(e){return e.getHours()>=12?"PM":"AM"},a:function(e){return e.getHours()>=12?"pm":"am"},hh:function(e){return u(e.getHours()%12||12)},h:function(e){return e.getHours()%12||12},HH:function(e){return u(e.getHours())},H:function(e){return e.getHours()},mm:function(e){return u(e.getMinutes())},m:function(e){return e.getMinutes()},ss:function(e){return u(e.getSeconds())},s:function(e){return e.getSeconds()}});e.exports=function(e,t){return a.run(t,[e])}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t,n){return new a(t).run(e,n)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(39),a=function(){function e(t){r(this,e),this.obj=t||{},this.re=new RegExp("^("+Object.keys(t).map(i).join("|")+")")}return u(e,[{key:"run",value:function(e,t){var n="";t=t||[];do{var r=e.match(this.re),o=r&&r[1],u=o||e.charAt(0);if(o){var i=this.obj[o];"function"==typeof i&&(i=i.apply(this,t)),n+=i}else n+=u;e=e.substring(u.length)}while(e);return n}}]),e}();o.Parser=a,e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),f=r(a),c=n(5),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);s.componentName="VALARM",s.requiredProps=["ACTION","TRIGGER"],s.validProps={ACTION:[(0,c.singleton)()],TRIGGER:[(0,c.singleton)()],DURATION:[(0,c.singleton)()],REPEAT:[(0,c.singleton)()],DESCRIPTION:[(0,c.singleton)()],SUMMARY:[(0,c.singleton)()],ATTACH:[(0,c.singleton)()],ATTENDEE:[]},t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),f=r(a),c=n(5),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);s.componentName="VCALENDAR",s.requiredProps=["PRODID","VERSION"],s.validProps={PRODID:[(0,c.singleton)()],VERSION:[(0,c.singleton)()],CALSCALE:[(0,c.singleton)()],METHOD:[(0,c.singleton)()]},s.validComponents={VEVENT:[],VTODO:[],VJOURNAL:[],VFREEBUSY:[],VTIMEZONE:[]},t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),f=r(a),c=n(5),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);s.componentName="VEVENT",s.requiredProps=["DTSTAMP","UID"],s.validProps={DTSTAMP:[(0,c.singleton)()],UID:[(0,c.singleton)()],DTSTART:[(0,c.singleton)()],CLASS:[(0,c.singleton)()],CREATED:[(0,c.singleton)()],DESCRIPTION:[(0,c.singleton)()],GEO:[(0,c.singleton)()],"LAST-MOD":[(0,c.singleton)()],LOCATION:[(0,c.singleton)()],ORGANIZER:[(0,c.singleton)()],PRIORITY:[(0,c.singleton)()],SEQUENCE:[(0,c.singleton)()],STATUS:[(0,c.singleton)()],SUMMARY:[(0,c.singleton)()],TRANSP:[(0,c.singleton)()],URL:[(0,c.singleton)()],"RECURRENCE-ID":[(0,c.singleton)()],RRULE:[(0,c.singleton)()],DTEND:[(0,c.singleton)(),(0,c.unique)(["DURATION"])],DURATION:[(0,c.singleton)(),(0,c.unique)(["DTEND"])],ATTACH:[],ATTENDEE:[],CATEGORIES:[],COMMENT:[],CONTACT:[],EXDATE:[],"REQUEST-STATUS":[],RELATED:[],RESOURCES:[],RDATE:[]},s.validComponents={VALARM:[]},t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),f=r(a),c=n(5),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);s.componentName="VTODO",s.requiredProps=["DTSTAMP","UID"],s.validProps={DTSTAMP:[(0,c.singleton)()],UID:[(0,c.singleton)()],CLASS:[(0,c.singleton)()],COMPLETED:[(0,c.singleton)()],CREATED:[(0,c.singleton)()],DESCRIPTION:[(0,c.singleton)()],DTSTART:[(0,c.singleton)()],GEO:[(0,c.singleton)()],"LAST-MOD":[(0,c.singleton)()],LOCATION:[(0,c.singleton)()],ORGANIZER:[(0,c.singleton)()],PERCENT:[(0,c.singleton)()],PRIORITY:[(0,c.singleton)()],"RECURRENCE-ID":[(0,c.singleton)()],SEQUENCE:[(0,c.singleton)()],STATUS:[(0,c.singleton)()],SUMMARY:[(0,c.singleton)()],URL:[(0,c.singleton)()],RRULE:[(0,c.singleton)()],DUE:[(0,c.singleton)(),(0,c.unique)(["DURATION"])],DURATION:[(0,c.singleton)(),(0,c.unique)(["DUE"])],ATTACH:[],ATTENDEE:[],CATEGORIES:[],COMMENT:[],CONTACT:[],EXDATE:[],"REQUEST-STATUS":[],RELATED:[],RESOURCES:[],RDATE:[]},s.validComponents={VALARM:[]},t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VTODO=t.VEVENT=t.VCALENDAR=t.VALARM=void 0;var o=n(10),u=r(o),i=n(11),a=r(i),f=n(12),c=r(f),s=n(13),l=r(s);t.VALARM=u["default"],t.VCALENDAR=a["default"],t.VEVENT=c["default"],t.VTODO=l["default"]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return function(e,t){var n=void 0,r=void 0;if(t instanceof i["default"]?(n=t.constructor.propName,r=e.propNames()):t instanceof f["default"]&&(n=t.constructor.componentName,r=e.componentNames()),!r.includes(n))throw new c.ValidationError}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(1),i=r(u),a=n(2),f=r(a),c=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){return function(e,t){var n=void 0,r=void 0;t instanceof i["default"]?(n=t.constructor.propName,r=e.propNames()):t instanceof f["default"]&&(n=t.constructor.componentName,r=e.componentNames());var o=r.filter(function(e){return e===n});if(o.length>=1)throw new c.ValidationError}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var u=n(1),i=r(u),a=n(2),f=r(a),c=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function u(e){return function(t,n){var r=void 0,u=void 0;n instanceof a["default"]?(r=n.constructor.propName,u=t.propNames()):n instanceof c["default"]&&(r=n.constructor.componentName,u=t.componentNames());var i=new Set(u),f=new Set([r].concat(o(e))),l=new Set([].concat(o(i)).filter(function(e){return!f.has(e)}));if(l>1)throw new s.ValidationError}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u;var i=n(1),a=r(i),f=n(2),c=r(f),s=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),f=r(a),c=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?"Component does not contain all required properties.":arguments[0];return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),t}(f["default"]);t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),f=r(a),c=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?"Provided component's type is not listed in validComponents.":arguments[0];return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),t}(f["default"]);t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),f=r(a),c=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?"Provided property's type is not listed in validProps.":arguments[0];return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),t}(f["default"]);t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(7),f=r(a),c=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?"Provided object was invalid for the recieving component.":arguments[0];return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),t}(f["default"]);t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return"string"==typeof this.value||this.value instanceof String}},{key:"transformer",value:function(){return this.value.join(",")}}]),t}(c["default"]);s.propName="CATEGORIES",t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="CREATED",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="DTEND",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="DTSTART",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="DUE",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(8),c=r(f),s=n(4),l=r(s),p=n(1),y=r(p),d=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return Array.isArray(this.value)?!this.value.every(function(e){return e instanceof Date}):!0}},{key:"transformer",value:function(){var e="DATE"==this.props.VALUE,t=e?l["default"].DateFormat:l["default"].DateTimeFormat;return this.value.map(function(n){if(e){var r=6e4*n.getTimezoneOffset();n=new Date(n.getTime()+r)}return(0,c["default"])(n,t)}).join()}}]),t}(y["default"]);d.propName="EXDATE",t["default"]=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return"string"==typeof this.value||this.value instanceof String}},{key:"transformer",value:function(){return this.value.join(";")}}]),t}(c["default"]);s.propName="GEO",t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="LAST-MODIFIED",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(3),f=r(a),c=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]);c.propName="RDATE",t["default"]=c},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t);
}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return"string"==typeof this.value||this.value instanceof String}},{key:"transformer",value:function(){return this.value?"TRANSPARENT":"OPAQUE"}}]),t}(c["default"]);s.propName="TRANSP",t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(40),c=r(f),s=n(1),l=r(s),p=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return!!this.value}},{key:"transformer",value:function(){return(0,c["default"])()}}]),t}(l["default"]);p.propName="UID",t["default"]=p},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),s=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"shortTransformer",value:function(){return/[0-9].[0-9]/.test(this.value)}},{key:"transformer",value:function(){return parseFloat(this.value).toFixed(1)}}]),t}(c["default"]);s.propName="VERSION",t["default"]=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t,n;return n=t=function(e){function t(){return o(this,t),u(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),t}(f["default"]),t.propName=e,n};var a=n(1),f=r(a)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=t.UID=t.TRANSP=t.RDATE=t.LAST_MODIFIED=t.GEO=t.EXDATE=t.DUE=t.DTSTART=t.DTSTAMP=t.DTEND=t.CREATED=t.CATEGORIES=t._default=void 0;var o=n(34),u=r(o),i=n(22),a=r(i),f=n(23),c=r(f),s=n(24),l=r(s),p=n(3),y=r(p),d=n(25),h=r(d),b=n(26),v=r(b),O=n(27),_=r(O),E=n(28),w=r(E),m=n(29),T=r(m),g=n(30),j=r(g),P=n(31),M=r(P),A=n(32),R=r(A),D=n(33),S=r(D);t._default=u["default"],t.CATEGORIES=a["default"],t.CREATED=c["default"],t.DTEND=l["default"],t.DTSTAMP=y["default"],t.DTSTART=h["default"],t.DUE=v["default"],t.EXDATE=_["default"],t.GEO=w["default"],t.LAST_MODIFIED=T["default"],t.RDATE=j["default"],t.TRANSP=M["default"],t.UID=R["default"],t.VERSION=S["default"]},function(e,t){e.exports=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],e.exports.abbr=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],e.exports["short"]=["Su","Mo","Tu","We","Th","Fr","Sa"]},function(e,t){e.exports=function(e,t,n){return t=t||2,n=n||"0",e=e.toString(),n.repeat(t-e.length)+e}},function(e,t){e.exports=["January","February","March","April","May","June","July","August","September","October","November","December"],e.exports.abbr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},function(e,t){function n(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}n.proto=function(){return RegExp.escape=n,n},e.exports=n},function(e,t){var n=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)}).toUpperCase()};e.exports=n}]);