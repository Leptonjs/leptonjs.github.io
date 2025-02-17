import{_ as n,c as a,a as l,o as e}from"./app-C3DDf_6l.js";const p={};function o(t,s){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="leptonjs" tabindex="-1"><a class="header-anchor" href="#leptonjs"><span>LeptonJs</span></a></h1><p>Welcome to the LeptonJs !</p><p>Have you ever felt that <a href="https://livewire.laravel.com/docs/quickstart" target="_blank" rel="noopener noreferrer">Livewire</a> is so simple and flexible ? but at the same time Do you miss your frontend stacks, For instance you are so familiar Vue&#39;s DatePicker library now you don&#39;t know how to write a Similar Library in Livewire as well? If so, you&#39;re in the right place! LeptonJs is a library that brings together the flexibility of Laravel Livewire while also giving you access to your frontend, like Vue and React (coming soon in the roadmap).</p><h2 id="let-me-show-you-the-code" tabindex="-1"><a class="header-anchor" href="#let-me-show-you-the-code"><span>Let me show you the code</span></a></h2><p>LeptonJs allows you to define a Component that directly binds your data to your frontend. For example a Simple Counter Component can be written as:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="app\\Lepton\\Counter.php"><pre class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3;"><code><span class="line"><span class="line"><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Counter</span><span style="color:#FF7B72;"> extends</span><span style="color:#79C0FF;"> Component</span><span style="color:#E6EDF3;"> </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> int</span><span style="color:#E6EDF3;"> $counter </span><span style="color:#FF7B72;">=</span><span style="color:#79C0FF;"> 0</span><span style="color:#E6EDF3;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF;">    pulic</span><span style="color:#FF7B72;"> int</span><span style="color:#D2A8FF;"> increment</span><span style="color:#E6EDF3;">(){</span></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF;">       $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#E6EDF3;">counter</span><span style="color:#FF7B72;">++</span><span style="color:#E6EDF3;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    } </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> int</span><span style="color:#D2A8FF;"> decrement</span><span style="color:#E6EDF3;">(){</span></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF;">       $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#E6EDF3;">counter</span><span style="color:#FF7B72;">--</span><span style="color:#E6EDF3;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> function</span><span style="color:#D2A8FF;"> render</span><span style="color:#E6EDF3;">() {</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">       return</span><span style="color:#79C0FF;"> $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#D2A8FF;">view</span><span style="color:#E6EDF3;">(</span><span style="color:#A5D6FF;">&#39;Counter&#39;</span><span style="color:#E6EDF3;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    }    </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can access all of the backend data by using <code>useWire</code> Composable in Vue. For example:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="Pages/Counter.vue"><pre class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3;"><code><span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#E6EDF3;">&gt;{{wire.states.counter}}&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;wire.method(&#39;decrement&#39;)&quot;</span><span style="color:#E6EDF3;">&gt;Decrement&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;wire.method(&#39;increment&#39;)&quot;</span><span style="color:#E6EDF3;">&gt;Increment&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#79C0FF;"> setup</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    import</span><span style="color:#E6EDF3;"> {useWire} </span><span style="color:#FF7B72;">from</span><span style="color:#A5D6FF;"> &quot;@leptonjs/leptonjs&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    const</span><span style="color:#79C0FF;"> wire</span><span style="color:#FF7B72;"> =</span><span style="color:#D2A8FF;"> useWire</span><span style="color:#E6EDF3;">()</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#E6EDF3;">&gt;</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Wait what? are you performing the network request just to update the counter ?</p></blockquote><p>Right now Yes, But You don&#39;t have to!, You can manage your states inside your Frontend Component as long long you don&#39;t need to sync with the backend. For example above code can be write as:</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre class="shiki github-dark-default has-diff vp-code" style="background-color:#0d1117;color:#e6edf3;"><code><span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">div</span><span style="color:#E6EDF3;">&gt;{{wire.states.counter}}&lt;/</span><span style="color:#7EE787;">div</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line diff remove"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;wire.method(&#39;decrement&#39;)&quot;</span><span style="color:#E6EDF3;">&gt;Decrement&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt; </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;decrement&quot;</span><span style="color:#E6EDF3;">&gt;Decrement&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt; </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;wire.method(&#39;increment&#39;)&quot;</span><span style="color:#E6EDF3;">&gt;Increment&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt; </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">    &lt;</span><span style="color:#7EE787;">button</span><span style="color:#79C0FF;"> @click</span><span style="color:#E6EDF3;">=</span><span style="color:#A5D6FF;">&quot;increment&quot;</span><span style="color:#E6EDF3;">&gt;Increment&lt;/</span><span style="color:#7EE787;">button</span><span style="color:#E6EDF3;">&gt; </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#79C0FF;"> setup</span><span style="color:#E6EDF3;">&gt;</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    import</span><span style="color:#E6EDF3;"> {useWire} </span><span style="color:#FF7B72;">from</span><span style="color:#A5D6FF;"> &quot;@leptonjs/leptonjs&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    const</span><span style="color:#79C0FF;"> wire</span><span style="color:#FF7B72;"> =</span><span style="color:#D2A8FF;"> useWire</span><span style="color:#E6EDF3;">()</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#FF7B72;">    const</span><span style="color:#D2A8FF;"> increment</span><span style="color:#FF7B72;"> =</span><span style="color:#E6EDF3;"> ()</span><span style="color:#FF7B72;">=&gt;</span><span style="color:#E6EDF3;">{ </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">        wire.states.counter </span><span style="color:#FF7B72;">++</span><span style="color:#E6EDF3;">; </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">    } </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#FF7B72;">    const</span><span style="color:#D2A8FF;"> decrement</span><span style="color:#FF7B72;"> =</span><span style="color:#E6EDF3;"> ()</span><span style="color:#FF7B72;">=&gt;</span><span style="color:#E6EDF3;">{ </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">        wire.states.counter </span><span style="color:#FF7B72;">--</span><span style="color:#E6EDF3;">; </span></span></span>
<span class="line"><span class="line diff add"><span style="color:#E6EDF3;">    } </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#E6EDF3;">&gt;</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And you don&#39;t need the backend function to increment and decrement the states as well, so we can safely remove it.</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="app\\Lepton\\Counter.php"><pre class="shiki github-dark-default has-diff vp-code" style="background-color:#0d1117;color:#e6edf3;"><code><span class="line"><span class="line"><span style="color:#FF7B72;">class</span><span style="color:#FFA657;"> Counter</span><span style="color:#FF7B72;"> extends</span><span style="color:#79C0FF;"> Component</span><span style="color:#E6EDF3;"> </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> int</span><span style="color:#E6EDF3;"> $counter </span><span style="color:#FF7B72;">=</span><span style="color:#79C0FF;"> 0</span><span style="color:#E6EDF3;">;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#79C0FF;">    pulic</span><span style="color:#FF7B72;"> int</span><span style="color:#D2A8FF;"> increment</span><span style="color:#E6EDF3;">(){  </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#79C0FF;">       $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#E6EDF3;">counter</span><span style="color:#FF7B72;">++</span><span style="color:#E6EDF3;">;  </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#E6EDF3;">    }   </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> int</span><span style="color:#D2A8FF;"> decrement</span><span style="color:#E6EDF3;">(){  </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#79C0FF;">       $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#E6EDF3;">counter</span><span style="color:#FF7B72;">--</span><span style="color:#E6EDF3;">; </span></span></span>
<span class="line"><span class="line diff remove"><span style="color:#E6EDF3;">    } </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">   </span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">    public</span><span style="color:#FF7B72;"> function</span><span style="color:#D2A8FF;"> render</span><span style="color:#E6EDF3;">() {</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72;">       return</span><span style="color:#79C0FF;"> $this</span><span style="color:#FF7B72;">-&gt;</span><span style="color:#D2A8FF;">view</span><span style="color:#E6EDF3;">(</span><span style="color:#A5D6FF;">&#39;Counter&#39;</span><span style="color:#E6EDF3;">);</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LetponJs allows you to define a Component that serves as full Page, to do show, Let&#39;s define our Page in Laravel&#39;s route as:</p><div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3;"><code><span class="line"><span class="line"><span style="color:#FF7B72;">use</span><span style="color:#79C0FF;"> Illuminate\\Support\\Facades\\Route</span><span style="color:#E6EDF3;">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF;">Route</span><span style="color:#FF7B72;">::</span><span style="color:#D2A8FF;">get</span><span style="color:#E6EDF3;">(</span><span style="color:#A5D6FF;">&#39;/&#39;</span><span style="color:#E6EDF3;">, )</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,15)]))}const i=n(p,[["render",o],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/","title":"Introduction","lang":"en-US","frontmatter":{"lang":"en-US","title":"Introduction","description":"Introduction to LeptonJs"},"headers":[{"level":2,"title":"Let me show you the code","slug":"let-me-show-you-the-code","link":"#let-me-show-you-the-code","children":[]}],"git":{"updatedTime":1739827651000,"contributors":[{"name":"Bedram Tamang","username":"Bedram Tamang","email":"tmgbedu@gmail.com","commits":1,"url":"https://github.com/Bedram Tamang"}]},"filePathRelative":"README.md"}');export{i as comp,r as data};
