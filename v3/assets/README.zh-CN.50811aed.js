import{o as a,a as t,y as n}from"./vue-libs.b44bc779.js";const l={class:"van-doc-markdown-body"},c=n(`<h1>ActionBar \u52A8\u4F5C\u680F</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u4E3A\u9875\u9762\u76F8\u5173\u64CD\u4F5C\u63D0\u4F9B\u4FBF\u6377\u4EA4\u4E92\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">ActionBar</span>, <span class="hljs-title class_">ActionBarIcon</span>, <span class="hljs-title class_">ActionBarButton</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBar</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarIcon</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">ActionBarButton</span>);
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BA2\u670D&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5E97\u94FA&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickIcon&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u8D2D\u4E70&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;onClickButton&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickIcon</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u70B9\u51FB\u56FE\u6807&#39;</span>);
    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onClickButton</span> = (<span class="hljs-params"></span>) =&gt; <span class="hljs-title class_">Toast</span>(<span class="hljs-string">&#39;\u70B9\u51FB\u6309\u94AE&#39;</span>);
    <span class="hljs-keyword">return</span> {
      onClickIcon,
      onClickButton,
    };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="hui-biao-ti-shi" tabindex="-1">\u5FBD\u6807\u63D0\u793A</h3><p>\u5728 ActionBarIcon \u7EC4\u4EF6\u4E0A\u8BBE\u7F6E <code>dot</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u4E00\u4E2A\u5C0F\u7EA2\u70B9\uFF1B\u8BBE\u7F6E <code>badge</code> \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u56FE\u6807\u53F3\u4E0A\u89D2\u5C55\u793A\u76F8\u5E94\u7684\u5FBD\u6807\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BA2\u670D&quot;</span> <span class="hljs-attr">dot</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;5&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5E97\u94FA&quot;</span> <span class="hljs-attr">badge</span>=<span class="hljs-string">&quot;12&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u52A0\u5165\u8D2D\u7269\u8F66&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u8D2D\u4E70&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-tu-biao-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272</h3><p>\u901A\u8FC7 ActionBarIcon \u7684 <code>color</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u56FE\u6807\u7684\u989C\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BA2\u670D&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ee0a24&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;cart-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;star&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5DF2\u6536\u85CF&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff5000&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u52A0\u5165\u8D2D\u7269\u8F66&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u8D2D\u4E70&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-an-niu-yan-se" tabindex="-1">\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272</h3><p>\u901A\u8FC7 ActionBarButton \u7684 <code>color</code> \u5C5E\u6027\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u7684\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 <code>linear-gradient</code> \u6E10\u53D8\u8272\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;chat-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5BA2\u670D&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-icon</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;shop-o&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u5E97\u94FA&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#be99ff&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u52A0\u5165\u8D2D\u7269\u8F66&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-action-bar-button</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#7232dd&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span> <span class="hljs-attr">text</span>=<span class="hljs-string">&quot;\u7ACB\u5373\u8D2D\u4E70&quot;</span> /&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-action-bar</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="actionbar-props" tabindex="-1">ActionBar Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>safe-area-inset-bottom</td><td>\u662F\u5426\u5F00\u542F<a href="#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei" target="_blank">\u5E95\u90E8\u5B89\u5168\u533A\u9002\u914D</a></td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>placeholder <code>v3.5.1</code></td><td>\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-props" tabindex="-1">ActionBarIcon Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>\u56FE\u6807</td><td><em>string</em></td><td>-</td></tr><tr><td>color</td><td>\u56FE\u6807\u989C\u8272</td><td><em>string</em></td><td><code>#323233</code></td></tr><tr><td>icon-class</td><td>\u56FE\u6807\u989D\u5916\u7C7B\u540D</td><td><em>string | Array | object</em></td><td>-</td></tr><tr><td>icon-prefix <code>v3.0.17</code></td><td>\u56FE\u6807\u7C7B\u540D\u524D\u7F00\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">class-prefix \u5C5E\u6027</a></td><td><em>string</em></td><td><code>van-icon</code></td></tr><tr><td>dot</td><td>\u662F\u5426\u663E\u793A\u56FE\u6807\u53F3\u4E0A\u89D2\u5C0F\u7EA2\u70B9</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>badge</td><td>\u56FE\u6807\u53F3\u4E0A\u89D2\u5FBD\u6807\u7684\u5185\u5BB9</td><td><em>number | string</em></td><td>-</td></tr><tr><td>badge-props <code>v3.2.8</code></td><td>\u81EA\u5B9A\u4E49\u5FBD\u6807\u7684\u5C5E\u6027\uFF0C\u4F20\u5165\u7684\u5BF9\u8C61\u4F1A\u88AB\u900F\u4F20\u7ED9 <a href="#/zh-CN/badge#props" target="_blank">Badge \u7EC4\u4EF6\u7684 props</a></td><td><em>BadgeProps</em></td><td>-</td></tr><tr><td>url</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E vue-router \u7684 <a href="https://router.vuejs.org/zh/api/#to" target="_blank">to \u5C5E\u6027</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-props" tabindex="-1">ActionBarButton Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td>-</td></tr><tr><td>type</td><td>\u6309\u94AE\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code>primary</code> <code>info</code> <code>warning</code> <code>danger</code></td><td><em>string</em></td><td><code>default</code></td></tr><tr><td>color</td><td>\u6309\u94AE\u989C\u8272\uFF0C\u652F\u6301\u4F20\u5165 <code>linear-gradient</code> \u6E10\u53D8\u8272</td><td><em>string</em></td><td>-</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7\u56FE\u6807\u540D\u79F0\u6216\u56FE\u7247\u94FE\u63A5\uFF0C\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 <a href="#/zh-CN/icon#props" target="_blank">name \u5C5E\u6027</a></td><td><em>string</em></td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>loading</td><td>\u662F\u5426\u663E\u793A\u4E3A\u52A0\u8F7D\u72B6\u6001</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>url</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td><em>string</em></td><td>-</td></tr><tr><td>to</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u7B49\u540C\u4E8E vue-router \u7684 <a href="https://router.vuejs.org/zh/api/#to" target="_blank">to \u5C5E\u6027</a></td><td><em>string | object</em></td><td>-</td></tr><tr><td>replace</td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbaricon-slots" tabindex="-1">ActionBarIcon Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6587\u672C\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="actionbarbutton-slots" tabindex="-1">ActionBarButton Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6309\u94AE\u663E\u793A\u5185\u5BB9</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> {
  <span class="hljs-title class_">ActionBarProps</span>,
  <span class="hljs-title class_">ActionBarIconProps</span>,
  <span class="hljs-title class_">ActionBarButtonProps</span>,
} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-action-bar-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-action-bar-height</td><td><em>50px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-width</td><td><em>48px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-height</td><td><em>100%</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-size</td><td><em>18px</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-font-size</td><td><em>var(--van-font-size-xs)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-active-color</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-text-color</td><td><em>var(--van-gray-7)</em></td><td>-</td></tr><tr><td>--van-action-bar-icon-background-color</td><td><em>var(--van-background-color-light)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-action-bar-button-warning-color</td><td><em>var(--van-gradient-orange)</em></td><td>-</td></tr><tr><td>--van-action-bar-button-danger-color</td><td><em>var(--van-gradient-red)</em></td><td>-</td></tr></tbody></table></div>`,17),d=[c],h={__name:"README.zh-CN",setup(o,{expose:s}){return s({frontmatter:{}}),(r,e)=>(a(),t("div",l,d))}};export{h as default};
