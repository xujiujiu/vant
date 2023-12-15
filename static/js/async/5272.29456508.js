/*! For license information please see 5272.29456508.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["5272"],{61328:function(t,s,d){"use strict";d.r(s),d.d(s,{default:function(){return e}});var n=d("89816"),a=d("35859"),e=(0,a.default)({},[["render",n.render]])},89816:function(t,s,d){"use strict";d.r(s);var n=d("52751");d.es(n,s)},52751:function(t,s,d){"use strict";d.r(s),d.d(s,{render:function(){return o}});var n=d("38613");let a={class:"van-doc-markdown-body"},e=[(0,n.createStaticVNode)('<h1>Coupon \u4F18\u60E0\u5238\u9009\u62E9\u5668</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u4F18\u60E0\u5238\u7684\u5151\u6362\u548C\u9009\u62E9\u3002</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">\u5F15\u5165</h3><p>\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u6765\u5168\u5C40\u6CE8\u518C\u7EC4\u4EF6\uFF0C\u66F4\u591A\u6CE8\u518C\u65B9\u5F0F\u8BF7\u53C2\u8003<a href="#/zh-CN/advanced-usage#zu-jian-zhu-ce" target="_blank">\u7EC4\u4EF6\u6CE8\u518C</a>\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-keyword">import</span> { <span class="hljs-title class_">CouponCell</span>, <span class="hljs-title class_">CouponList</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponCell</span>);\napp.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CouponList</span>);\n</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">\u4EE3\u7801\u6F14\u793A</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4F18\u60E0\u5238\u5355\u5143\u683C --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-cell</span>\n  <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>\n  <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;showList = true&quot;</span>\n/&gt;</span>\n<span class="hljs-comment">&lt;!-- \u4F18\u60E0\u5238\u5217\u8868 --&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">van-popup</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showList&quot;</span>\n  <span class="hljs-attr">round</span>\n  <span class="hljs-attr">position</span>=<span class="hljs-string">&quot;bottom&quot;</span>\n  <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;height: 90%; padding-top: 4px;&quot;</span>\n&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">van-coupon-list</span>\n    <span class="hljs-attr">:coupons</span>=<span class="hljs-string">&quot;coupons&quot;</span>\n    <span class="hljs-attr">:chosen-coupon</span>=<span class="hljs-string">&quot;chosenCoupon&quot;</span>\n    <span class="hljs-attr">:disabled-coupons</span>=<span class="hljs-string">&quot;disabledCoupons&quot;</span>\n    @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;onChange&quot;</span>\n    @<span class="hljs-attr">exchange</span>=<span class="hljs-string">&quot;onExchange&quot;</span>\n  /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">van-popup</span>&gt;</span>\n</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {\n    <span class="hljs-keyword">const</span> coupon = {\n      <span class="hljs-attr">available</span>: <span class="hljs-number">1</span>,\n      <span class="hljs-attr">condition</span>: <span class="hljs-string">&#39;\u65E0\u95E8\u69DB\\n\u6700\u591A\u4F18\u60E012\u5143&#39;</span>,\n      <span class="hljs-attr">reason</span>: <span class="hljs-string">&#39;&#39;</span>,\n      <span class="hljs-attr">value</span>: <span class="hljs-number">150</span>,\n      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u4F18\u60E0\u5238\u540D\u79F0&#39;</span>,\n      <span class="hljs-attr">startAt</span>: <span class="hljs-number">1489104000</span>,\n      <span class="hljs-attr">endAt</span>: <span class="hljs-number">1514592000</span>,\n      <span class="hljs-attr">valueDesc</span>: <span class="hljs-string">&#39;1.5&#39;</span>,\n      <span class="hljs-attr">unitDesc</span>: <span class="hljs-string">&#39;\u5143&#39;</span>,\n    };\n\n    <span class="hljs-keyword">const</span> coupons = <span class="hljs-title function_">ref</span>([coupon]);\n    <span class="hljs-keyword">const</span> showList = <span class="hljs-title function_">ref</span>(<span class="hljs-literal">false</span>);\n    <span class="hljs-keyword">const</span> chosenCoupon = <span class="hljs-title function_">ref</span>(-<span class="hljs-number">1</span>);\n\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onChange</span> = (<span class="hljs-params">index</span>) =&gt; {\n      showList.<span class="hljs-property">value</span> = <span class="hljs-literal">false</span>;\n      chosenCoupon.<span class="hljs-property">value</span> = index;\n    };\n    <span class="hljs-keyword">const</span> <span class="hljs-title function_">onExchange</span> = (<span class="hljs-params">code</span>) =&gt; {\n      coupons.<span class="hljs-property">value</span>.<span class="hljs-title function_">push</span>(coupon);\n    };\n\n    <span class="hljs-keyword">return</span> {\n      coupons,\n      showList,\n      onChange,\n      onExchange,\n      chosenCoupon,\n      <span class="hljs-attr">disabledCoupons</span>: [coupon],\n    };\n  },\n};\n</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="couponcell-props" tabindex="-1">CouponCell Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5355\u5143\u683C\u6807\u9898</td><td><em>string</em></td><td><code>\u4F18\u60E0\u5238</code></td></tr><tr><td>chosen-coupon</td><td>\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td><td><em>number | string</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td><td><em>Coupon[]</em></td><td><code>[]</code></td></tr><tr><td>editable</td><td>\u80FD\u5426\u5207\u6362\u4F18\u60E0\u5238</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u5185\u8FB9\u6846</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>currency</td><td>\u8D27\u5E01\u7B26\u53F7</td><td><em>string</em></td><td><code>\xa5</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-props" tabindex="-1">CouponList Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:code</td><td>\u5F53\u524D\u8F93\u5165\u7684\u5151\u6362\u7801</td><td><em>string</em></td><td>-</td></tr><tr><td>chosen-coupon</td><td>\u5F53\u524D\u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td><td><em>number</em></td><td><code>-1</code></td></tr><tr><td>coupons</td><td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td><td><em>CouponInfo[]</em></td><td><code>[]</code></td></tr><tr><td>disabled-coupons</td><td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868</td><td><em>CouponInfo[]</em></td><td><code>[]</code></td></tr><tr><td>enabled-title</td><td>\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898</td><td><em>string</em></td><td><code>\u53EF\u4F7F\u7528\u4F18\u60E0\u5238</code></td></tr><tr><td>disabled-title</td><td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u6807\u9898</td><td><em>string</em></td><td><code>\u4E0D\u53EF\u4F7F\u7528\u4F18\u60E0\u5238</code></td></tr><tr><td>exchange-button-text</td><td>\u5151\u6362\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u5151\u6362</code></td></tr><tr><td>exchange-button-loading</td><td>\u662F\u5426\u663E\u793A\u5151\u6362\u6309\u94AE\u52A0\u8F7D\u52A8\u753B</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-button-disabled</td><td>\u662F\u5426\u7981\u7528\u5151\u6362\u6309\u94AE</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>exchange-min-length</td><td>\u5151\u6362\u7801\u6700\u5C0F\u957F\u5EA6</td><td><em>number</em></td><td><code>1</code></td></tr><tr><td>displayed-coupon-index</td><td>\u6EDA\u52A8\u81F3\u7279\u5B9A\u4F18\u60E0\u5238\u4F4D\u7F6E</td><td><em>number</em></td><td>-</td></tr><tr><td>show-close-button</td><td>\u662F\u5426\u663E\u793A\u5217\u8868\u5E95\u90E8\u6309\u94AE</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>close-button-text</td><td>\u5217\u8868\u5E95\u90E8\u6309\u94AE\u6587\u5B57</td><td><em>string</em></td><td><code>\u4E0D\u4F7F\u7528\u4F18\u60E0</code></td></tr><tr><td>input-placeholder</td><td>\u8F93\u5165\u6846\u6587\u5B57\u63D0\u793A</td><td><em>string</em></td><td><code>\u8BF7\u8F93\u5165\u4F18\u60E0\u7801</code></td></tr><tr><td>show-exchange-bar</td><td>\u662F\u5426\u5C55\u793A\u5151\u6362\u680F</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>currency</td><td>\u8D27\u5E01\u7B26\u53F7</td><td><em>string</em></td><td><code>\xa5</code></td></tr><tr><td>empty-image</td><td>\u5217\u8868\u4E3A\u7A7A\u65F6\u7684\u5360\u4F4D\u56FE</td><td><em>string</em></td><td>-</td></tr><tr><td>show-count</td><td>\u662F\u5426\u5C55\u793A\u53EF\u7528 / \u4E0D\u53EF\u7528\u6570\u91CF</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-events" tabindex="-1">CouponList Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u4F18\u60E0\u5238\u5207\u6362\u56DE\u8C03</td><td>index, \u9009\u4E2D\u4F18\u60E0\u5238\u7684\u7D22\u5F15</td></tr><tr><td>exchange</td><td>\u5151\u6362\u4F18\u60E0\u5238\u56DE\u8C03</td><td>code, \u5151\u6362\u7801</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponlist-slots" tabindex="-1">CouponList Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>list-footer</td><td>\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8</td></tr><tr><td>disabled-list-footer</td><td>\u4E0D\u53EF\u7528\u4F18\u60E0\u5238\u5217\u8868\u5E95\u90E8</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="couponinfo-shu-ju-jie-gou" tabindex="-1">CouponInfo \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>id</td><td>\u4F18\u60E0\u5238 id</td><td><em>string</em></td></tr><tr><td>name</td><td>\u4F18\u60E0\u5238\u540D\u79F0</td><td><em>string</em></td></tr><tr><td>condition</td><td>\u6EE1\u51CF\u6761\u4EF6</td><td><em>string</em></td></tr><tr><td>startAt</td><td>\u5361\u6709\u6548\u5F00\u59CB\u65F6\u95F4 (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)</td><td><em>number</em></td></tr><tr><td>endAt</td><td>\u5361\u5931\u6548\u65E5\u671F (\u65F6\u95F4\u6233, \u5355\u4F4D\u79D2)</td><td><em>number</em></td></tr><tr><td>description</td><td>\u63CF\u8FF0\u4FE1\u606F\uFF0C\u4F18\u60E0\u5238\u53EF\u7528\u65F6\u5C55\u793A</td><td><em>string</em></td></tr><tr><td>reason</td><td>\u4E0D\u53EF\u7528\u539F\u56E0\uFF0C\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u65F6\u5C55\u793A</td><td><em>string</em></td></tr><tr><td>value</td><td>\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\uFF0C\u5355\u4F4D\u5206</td><td><em>number</em></td></tr><tr><td>valueDesc</td><td>\u6298\u6263\u5238\u4F18\u60E0\u91D1\u989D\u6587\u6848</td><td><em>string</em></td></tr><tr><td>unitDesc</td><td>\u5355\u4F4D\u6587\u6848</td><td><em>string</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49</h3><p>\u7EC4\u4EF6\u5BFC\u51FA\u4EE5\u4E0B\u7C7B\u578B\u5B9A\u4E49\uFF1A</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">CouponCellProps</span>, <span class="hljs-title class_">CouponListProps</span>, <span class="hljs-title class_">CouponInfo</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;\n</code></pre></div><h2 id="zhu-ti-ding-zhi" tabindex="-1">\u4E3B\u9898\u5B9A\u5236</h2><div class="van-doc-card"><h3 id="yang-shi-bian-liang" tabindex="-1">\u6837\u5F0F\u53D8\u91CF</h3><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E0B\u5217 CSS \u53D8\u91CF\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003 <a href="#/zh-CN/config-provider" target="_blank">ConfigProvider \u7EC4\u4EF6</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>--van-coupon-margin</td><td><em>0 var(--van-padding-sm) var(--van-padding-sm)</em></td><td>-</td></tr><tr><td>--van-coupon-content-height</td><td><em>84px</em></td><td>-</td></tr><tr><td>--van-coupon-content-padding</td><td><em>14px 0</em></td><td>-</td></tr><tr><td>--van-coupon-content-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr><tr><td>--van-coupon-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-coupon-active-background</td><td><em>var(--van-active-color)</em></td><td>-</td></tr><tr><td>--van-coupon-radius</td><td><em>var(--van-radius-lg)</em></td><td>-</td></tr><tr><td>--van-coupon-shadow</td><td><em>0 0 4px rgba(0, 0, 0, 0.1)</em></td><td>-</td></tr><tr><td>--van-coupon-head-width</td><td><em>96px</em></td><td>-</td></tr><tr><td>--van-coupon-amount-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-amount-font-size</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-coupon-currency-font-size</td><td><em>40%</em></td><td>-</td></tr><tr><td>--van-coupon-name-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-disabled-text-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-description-padding</td><td><em>var(--van-padding-xs) var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-description-border-color</td><td><em>var(--van-border-color)</em></td><td>-</td></tr><tr><td>--van-coupon-checkbox-color</td><td><em>var(--van-danger-color)</em></td><td>-</td></tr><tr><td>--van-coupon-list-background</td><td><em>var(--van-background)</em></td><td>-</td></tr><tr><td>--van-coupon-list-field-padding</td><td><em>5px 0 5px var(--van-padding-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-exchange-button-height</td><td><em>32px</em></td><td>-</td></tr><tr><td>--van-coupon-list-close-button-height</td><td><em>40px</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-color</td><td><em>var(--van-text-color-2)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-font-size</td><td><em>var(--van-font-size-md)</em></td><td>-</td></tr><tr><td>--van-coupon-list-empty-tip-line-height</td><td><em>var(--van-line-height-md)</em></td><td>-</td></tr><tr><td>--van-coupon-cell-selected-text-color</td><td><em>var(--van-text-color)</em></td><td>-</td></tr></tbody></table></div>',14)];function o(t,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",a,e)}}}]);