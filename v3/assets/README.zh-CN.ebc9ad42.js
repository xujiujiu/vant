import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},e=n(`<h1>Lazyload \u61D2\u52A0\u8F7D</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u5F53\u9875\u9762\u9700\u8981\u52A0\u8F7D\u5927\u91CF\u5185\u5BB9\u65F6\uFF0C\u4F7F\u7528\u61D2\u52A0\u8F7D\u53EF\u4EE5\u5B9E\u73B0\u5EF6\u8FDF\u52A0\u8F7D\u9875\u9762\u53EF\u89C6\u533A\u57DF\u5916\u7684\u5185\u5BB9\uFF0C\u4ECE\u800C\u4F7F\u9875\u9762\u52A0\u8F7D\u66F4\u6D41\u7545\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><p><code>Lazyload</code> \u662F <code>Vue</code> \u6307\u4EE4\uFF0C\u4F7F\u7528\u524D\u9700\u8981\u5BF9\u6307\u4EE4\u8FDB\u884C\u6CE8\u518C\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Lazyload</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>);

<span class="hljs-comment">// \u6CE8\u518C\u65F6\u53EF\u4EE5\u914D\u7F6E\u989D\u5916\u7684\u9009\u9879</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><p>\u5C06 <code>v-lazy</code> \u6307\u4EE4\u7684\u503C\u8BBE\u7F6E\u4E3A\u4F60\u9700\u8981\u61D2\u52A0\u8F7D\u7684\u56FE\u7247\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">imageList</span>: [
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg&#39;</span>,
        <span class="hljs-string">&#39;https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg&#39;</span>,
      ],
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="bei-jing-tu-lan-jia-zai" tabindex="-1">\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D</h3><p>\u548C\u56FE\u7247\u61D2\u52A0\u8F7D\u4E0D\u540C\uFF0C\u80CC\u666F\u56FE\u61D2\u52A0\u8F7D\u9700\u8981\u4F7F\u7528 <code>v-lazy:background-image</code>\uFF0C\u503C\u8BBE\u7F6E\u4E3A\u80CC\u666F\u56FE\u7247\u7684\u5730\u5740\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5FC5\u987B\u58F0\u660E\u5BB9\u5668\u9AD8\u5EA6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zu-jian-lan-jia-zai" tabindex="-1">\u7EC4\u4EF6\u61D2\u52A0\u8F7D</h3><p>\u5C06\u9700\u8981\u61D2\u52A0\u8F7D\u7684\u7EC4\u4EF6\u653E\u5728 <code>lazy-component</code> \u6807\u7B7E\u4E2D\uFF0C\u5373\u53EF\u5B9E\u73B0\u7EC4\u4EF6\u61D2\u52A0\u8F7D\u3002</p><pre><code class="language-js"><span class="hljs-comment">// \u6CE8\u518C\u65F6\u8BBE\u7F6E\`lazyComponent\`\u9009\u9879</span>
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">lazy-component</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;img in imageList&quot;</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;img&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">lazy-component</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="options" tabindex="-1">Options</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>loading</td><td>\u52A0\u8F7D\u65F6\u7684\u56FE\u7247</td><td><em>string</em></td><td>-</td></tr><tr><td>error</td><td>\u9519\u8BEF\u65F6\u7684\u56FE\u7247</td><td><em>string</em></td><td>-</td></tr><tr><td>preload</td><td>\u9884\u52A0\u8F7D\u9AD8\u5EA6\u7684\u6BD4\u4F8B</td><td><em>string</em></td><td>-</td></tr><tr><td>attempt</td><td>\u5C1D\u8BD5\u6B21\u6570</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td>listenEvents</td><td>\u76D1\u542C\u7684\u4E8B\u4EF6</td><td><em>string[]</em></td><td><code>scroll</code>\u7B49</td></tr><tr><td>adapter</td><td>\u9002\u914D\u5668</td><td><em>object</em></td><td>-</td></tr><tr><td>filter</td><td>\u56FE\u7247 URL \u8FC7\u6EE4</td><td><em>object</em></td><td>-</td></tr><tr><td>lazyComponent</td><td>\u662F\u5426\u80FD\u61D2\u52A0\u8F7D\u6A21\u5757</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table><blockquote><p>\u66F4\u591A\u5185\u5BB9\u8BF7\u53C2\u7167\uFF1A<a href="https://github.com/hilongjw/vue-lazyload" target="_blank">vue-lazyload \u5B98\u65B9\u6587\u6863</a></p></blockquote></div><h2 id="chang-jian-wen-ti" tabindex="-1">\u5E38\u89C1\u95EE\u9898</h2><div class="van-doc-card"><h3 id="tong-guo-cdn-yin-ru-vant-shi-mei-you-zi-dong-zhu-ce-lazyload-zu-jian" tabindex="-1">\u901A\u8FC7 CDN \u5F15\u5165 Vant \u65F6\uFF0C\u6CA1\u6709\u81EA\u52A8\u6CE8\u518C Lazyload \u7EC4\u4EF6\uFF1F</h3><p>\u7531\u4E8E Lazyload \u7EC4\u4EF6\u5728\u6CE8\u518C\u65F6\u53EF\u4EE5\u4F20\u5165\u4E00\u4E9B\u914D\u7F6E\u9879\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u4F1A\u81EA\u52A8\u6CE8\u518C Lazyload \u7EC4\u4EF6\uFF0C\u9700\u8981\u624B\u52A8\u8FDB\u884C\u6CE8\u518C\uFF1A</p><pre><code class="language-js"><span class="hljs-keyword">const</span> app = <span class="hljs-title class_">Vue</span>.<span class="hljs-title function_">createApp</span>();

app.<span class="hljs-title function_">use</span>(vant.<span class="hljs-property">Lazyload</span>, {
  <span class="hljs-attr">lazyComponent</span>: <span class="hljs-literal">true</span>,
});
</code></pre></div>`,11),p=[e],h={__name:"README.zh-CN",setup(d,{expose:s}){return s({frontmatter:{}}),(o,i)=>(a(),t("div",l,p))}};export{h as default};
