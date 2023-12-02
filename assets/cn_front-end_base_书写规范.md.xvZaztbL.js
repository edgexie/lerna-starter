import{_ as s,o as i,c as a,R as n}from"./chunks/framework.vJJ2qGQR.js";const g=JSON.parse('{"title":"JavaScript 代码书写规范（from ChatGPT）","description":"","frontmatter":{},"headers":[],"relativePath":"cn/front-end/base/书写规范.md","filePath":"cn/front-end/base/书写规范.md","lastUpdated":1701504451000}'),l={name:"cn/front-end/base/书写规范.md"},e=n(`<h1 id="javascript-代码书写规范-from-chatgpt" tabindex="-1">JavaScript 代码书写规范（from ChatGPT） <a class="header-anchor" href="#javascript-代码书写规范-from-chatgpt" aria-label="Permalink to &quot;JavaScript 代码书写规范（from ChatGPT）&quot;">​</a></h1><p>JavaScript 代码规范指的是一套关于如何编写、组织和格式化 JavaScript 代码的一致性规则和指南。这些规范旨在提高代码的可读性、可维护性，并降低团队协作时的摩擦。以下是一些遵循 JavaScript 代码规范的重要意义：</p><ol><li><p><strong>可读性和可维护性</strong>：规范化的代码更容易阅读和理解，使开发者能够快速找到他们需要的信息。这也使得在以后维护和修改代码变得更为容易。</p></li><li><p><strong>减少错误和漏洞</strong>：一致的代码风格可以降低由于书写错误或者混乱的代码结构导致的错误的可能性。同时，规范也可以提供一些避免常见编码错误的建议。</p></li><li><p><strong>团队合作</strong>：在团队中使用统一的代码规范可以减少开发者之间的歧义和摩擦。每个人都知道在哪里可以找到特定功能或模块的代码，也知道如何与之交互。</p></li><li><p><strong>版本控制</strong>：规范的代码更容易与版本控制系统（如 Git）结合使用。在代码合并和比较时，格式一致的代码可以减少合并冲突的可能性。</p></li><li><p><strong>提高代码质量</strong>：规范可以强制执行最佳实践，使得代码更为健壮、高效和可靠。</p></li><li><p><strong>可扩展性</strong>：符合规范的代码更容易进行扩展，因为开发者可以更容易地理解和修改代码。</p></li><li><p><strong>代码审查</strong>：在进行代码审查时，规范化的代码可以让审查过程更为高效。审查人员可以更专注于逻辑和功能，而不必担心代码的格式和风格。</p></li></ol><p>总的来说，JavaScript 代码规范的主要目的是提升代码的质量、可维护性和可读性，从而为团队合作和软件项目的长期维护奠定坚实的基础。</p><h2 id="变量名" tabindex="-1">变量名 <a class="header-anchor" href="#变量名" aria-label="Permalink to &quot;变量名&quot;">​</a></h2><p>变量名推荐使用驼峰法来命名(camelCase):</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> firstName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;John&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lastName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Doe&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> price</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 19.9</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fullPrice </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> price </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tax</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="空格与运算符" tabindex="-1">空格与运算符 <a class="header-anchor" href="#空格与运算符" aria-label="Permalink to &quot;空格与运算符&quot;">​</a></h2><p>通常运算符 ( = + - * / ) 前后需要添加空格:</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Volvo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Saab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Fiat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="代码缩进" tabindex="-1">代码缩进 <a class="header-anchor" href="#代码缩进" aria-label="Permalink to &quot;代码缩进&quot;">​</a></h2><p>通常使用 2 个空格符号来缩进代码块：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> toCelsius</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fahrenheit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (fahrenheit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="语句规则" tabindex="-1">语句规则 <a class="header-anchor" href="#语句规则" aria-label="Permalink to &quot;语句规则&quot;">​</a></h2><blockquote><p>通常可使用<code>prettier</code>插件来自动格式化</p></blockquote><p>一条语句<strong>不要</strong>以分号作为结束符。</p><p>将左花括号放在第一行的结尾。<br> 左花括号前添加一空格。<br> 将右花括号独立放在一行。<br> 不要以分号结束一个复杂的声明。<br> 字符串使用单引号。<br> 对象最后一条数据后加<code>逗号</code>。 每行代码字符小于 80。</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> values </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Volvo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Saab&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Fiat&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  firstName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;John&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastName: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Doe&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  eyeColor: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;blue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h2><ul><li>变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ lowerCamelCase）</li><li>全局变量为大写 (UPPERCASE )</li><li>常量 (如 PI) 为大写 (UPPERCASE )</li></ul><h2 id="文件命名" tabindex="-1">文件命名 <a class="header-anchor" href="#文件命名" aria-label="Permalink to &quot;文件命名&quot;">​</a></h2><ul><li>一般文件以烤串命名（kebab case）</li><li>Vue 组件以大写驼峰命名</li></ul>`,22),p=[e];function t(h,k,r,d,E,c){return i(),a("div",null,p)}const y=s(l,[["render",t]]);export{g as __pageData,y as default};
