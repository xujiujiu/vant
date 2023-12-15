/*! For license information please see 4809.f8bb2047.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4809"],{24521:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return d}});var s=a("69578"),n=a("35859"),d=(0,n.default)({},[["render",s.render]])},69578:function(t,e,a){"use strict";a.r(e);var s=a("7075");a.es(s,e)},7075:function(t,e,a){"use strict";a.r(e),a.d(e,{render:function(){return l}});var s=a("38613");let n={class:"van-doc-markdown-body"},d=[(0,s.createStaticVNode)('<h1>Composables</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>Vant provide some built-in composition APIs, you can directly use these APIs for development.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Although <code>@vant/use</code> is already included in Vant&#39;s dependencies, it is still recommended to install this package explicitly:</p><pre><code class="language-shell"><span class="hljs-meta prompt_"># </span><span class="language-bash">with npm</span>\nnpm i @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with yarn</span>\nyarn add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with pnpm</span>\npnpm add @vant/use\n<span class="hljs-meta prompt_">\n# </span><span class="language-bash">with Bun</span>\nbun add @vant/use\n</code></pre></div><div class="van-doc-card"><h3 id="demo" tabindex="-1">Demo</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { useWindowSize } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vant/use&#39;</span>;\n\n<span class="hljs-keyword">const</span> { width, height } = <span class="hljs-title function_">useWindowSize</span>();\n\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(width.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window width</span>\n<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(height.<span class="hljs-property">value</span>); <span class="hljs-comment">// -&gt; window height</span>\n</code></pre></div><div class="van-doc-card"><h3 id="api-list" tabindex="-1">API List</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a href="#/en-US/use-click-away" target="_blank">useClickAway</a></td><td>Triggers a callback when user clicks outside of the target element</td></tr><tr><td><a href="#/en-US/use-count-down" target="_blank">useCountDown</a></td><td>Used to manage the countdown</td></tr><tr><td><a href="#/en-US/use-custom-field-value" target="_blank">useCustomFieldValue</a></td><td>Used to custom Field value</td></tr><tr><td><a href="#/en-US/use-event-listener" target="_blank">useEventListener</a></td><td>Used to attach event</td></tr><tr><td><a href="#/en-US/use-page-visibility" target="_blank">usePageVisibility</a></td><td>Get the visible state of the page</td></tr><tr><td><a href="#/en-US/use-rect" target="_blank">useRect</a></td><td>Get the size of an element and its position relative to the viewport</td></tr><tr><td><a href="#/en-US/use-relation" target="_blank">useRelation</a></td><td>Establish the association relationship between parent and child components</td></tr><tr><td><a href="#/en-US/use-scroll-parent" target="_blank">useScrollParent</a></td><td>Get the closest parent element that is scrollable</td></tr><tr><td><a href="#/en-US/use-toggle" target="_blank">useToggle</a></td><td>Used to switch between <code>true</code> and <code>false</code></td></tr><tr><td><a href="#/en-US/use-window-size" target="_blank">useWindowSize</a></td><td>Get the viewport width and height of the browser window</td></tr><tr><td><a href="#/zh-CN/use-raf" target="_blank">useRaf</a></td><td>Used to manage the requestAnimationFrame</td></tr></tbody></table></div>',5)];function l(t,e){return(0,s.openBlock)(),(0,s.createElementBlock)("div",n,d)}}}]);