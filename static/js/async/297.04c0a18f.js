/*! For license information please see 297.04c0a18f.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["297"],{90953:function(a,t,s){"use strict";s.r(t),s.d(t,{default:function(){return d}});var e=s("20383"),n=s("35859"),d=(0,n.default)({},[["render",e.render]])},20383:function(a,t,s){"use strict";s.r(t);var e=s("32092");s.es(e,t)},32092:function(a,t,s){"use strict";s.r(t),s.d(t,{render:function(){return r}});var e=s("38613");let n={class:"van-doc-markdown-body"},d=[(0,e.createStaticVNode)('<h1>\u7EC4\u5408\u5F0F API</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>Vant \u5E95\u5C42\u4F9D\u8D56\u4E86 <code>@vant/use</code> \u5305\uFF0C\u5176\u4E2D\u5185\u7F6E\u4E86\u4E00\u7CFB\u5217\u7684\u7EC4\u5408\u5F0F API\u3002\u5BF9\u4E8E\u4F7F\u7528\u4E86 Vant \u7684\u9879\u76EE\uFF0C\u53EF\u4EE5\u590D\u7528\u8FD9\u4E9B API \u8FDB\u884C\u5F00\u53D1\u3002</p></div><div class="van-doc-card"><h3 id="an-zhuang" tabindex="-1">\u5B89\u88C5</h3><p>\u867D\u7136 Vant \u7684\u4F9D\u8D56\u4E2D\u5DF2\u7ECF\u5305\u542B\u4E86 <code>@vant/use</code>\uFF0C\u4F46\u6211\u4EEC\u4ECD\u7136\u63A8\u8350\u663E\u5F0F\u5730\u5B89\u88C5\u5B83\uFF1A</p><pre><code class="language-shell"><span class="hljs-meta prompt_"># </span><span class="language-bash">with npm</span>\nnpm i @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with yarn</span>\nyarn add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with pnpm</span>\npnpm add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with Bun</span>\nbun add @vant/use\n</code></pre></div><div class="van-doc-card"><h3 id="shi-li" tabindex="-1">\u793A\u4F8B</h3><p>\u4E0B\u9762\u662F\u4E00\u4E2A Vant \u7EC4\u5408\u5F0F API \u7684\u7528\u6CD5\u793A\u4F8B\uFF0C\u6211\u4EEC\u4ECE <code>@vant/use</code> \u8FD9\u4E2A\u5305\u4E2D\u5F15\u5165 <code>useWindowSize</code> \u65B9\u6CD5\uFF0C\u7136\u540E\u8FDB\u884C\u8C03\u7528\uFF0C\u5373\u53EF\u83B7\u53D6\u5230\u5F53\u524D Window \u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();\n\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; \u7A97\u53E3\u5BBD\u5EA6</span>\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; \u7A97\u53E3\u9AD8\u5EA6</span>\n</code></pre></div><div class="van-doc-card"><h3 id="api-lie-biao" tabindex="-1">API \u5217\u8868</h3><p>\u4E0B\u9762\u662F Vant \u5BF9\u5916\u63D0\u4F9B\u7684\u6240\u6709\u7EC4\u5408\u5F0F API\uFF0C\u70B9\u51FB\u540D\u79F0\u53EF\u4EE5\u67E5\u770B\u8BE6\u7EC6\u4ECB\u7ECD\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><a href="#/zh-CN/use-click-away" target="_blank">useClickAway</a></td><td>\u76D1\u542C\u70B9\u51FB\u5143\u7D20\u5916\u90E8\u7684\u4E8B\u4EF6</td></tr><tr><td><a href="#/zh-CN/use-count-down" target="_blank">useCountDown</a></td><td>\u63D0\u4F9B\u5012\u8BA1\u65F6\u7BA1\u7406\u80FD\u529B</td></tr><tr><td><a href="#/zh-CN/use-custom-field-value" target="_blank">useCustomFieldValue</a></td><td>\u81EA\u5B9A\u4E49\u8868\u5355\u7EC4\u4EF6\u4E2D\u7684\u8868\u5355\u9879</td></tr><tr><td><a href="#/zh-CN/use-event-listener" target="_blank">useEventListener</a></td><td>\u65B9\u4FBF\u5730\u8FDB\u884C\u4E8B\u4EF6\u7ED1\u5B9A</td></tr><tr><td><a href="#/zh-CN/use-page-visibility" target="_blank">usePageVisibility</a></td><td>\u83B7\u53D6\u9875\u9762\u7684\u53EF\u89C1\u72B6\u6001</td></tr><tr><td><a href="#/zh-CN/use-rect" target="_blank">useRect</a></td><td>\u83B7\u53D6\u5143\u7D20\u7684\u5927\u5C0F\u53CA\u5176\u76F8\u5BF9\u4E8E\u89C6\u53E3\u7684\u4F4D\u7F6E</td></tr><tr><td><a href="#/zh-CN/use-relation" target="_blank">useRelation</a></td><td>\u5EFA\u7ACB\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u5173\u8054\u5173\u7CFB</td></tr><tr><td><a href="#/zh-CN/use-scroll-parent" target="_blank">useScrollParent</a></td><td>\u83B7\u53D6\u5143\u7D20\u6700\u8FD1\u7684\u53EF\u6EDA\u52A8\u7236\u5143\u7D20</td></tr><tr><td><a href="#/zh-CN/use-toggle" target="_blank">useToggle</a></td><td>\u7528\u4E8E\u5728\u5E03\u5C14\u503C\u4E4B\u95F4\u8FDB\u884C\u5207\u6362</td></tr><tr><td><a href="#/zh-CN/use-window-size" target="_blank">useWindowSize</a></td><td>\u83B7\u53D6\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u89C6\u53E3\u5BBD\u5EA6\u548C\u9AD8\u5EA6</td></tr><tr><td><a href="#/zh-CN/use-raf" target="_blank">useRaf</a></td><td>\u63D0\u4F9BrequestAnimationFrame\u7BA1\u7406\u80FD\u529B</td></tr></tbody></table></div>',5)];function r(a,t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",n,d)}}}]);