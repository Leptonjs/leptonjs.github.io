<template><div><div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p>LeptonJs is still in its early development stage, so use it with caution.</p>
</div>
<h1 id="page-vs-partial" tabindex="-1"><a class="header-anchor" href="#page-vs-partial"><span>Page Vs Partial</span></a></h1>
<p>In LeptonJs, components can be used as either Pages or Partials.</p>
<ul>
<li>Pages are full components rendered for specific endpoints and must be registered via Laravel routes.</li>
<li>Partials are reusable components that can be injected into any Page without requiring a dedicated route.</li>
</ul>
<p>Both Pages and Partials are created and written in the same way. However, a Page must be registered as a route, whereas a Partial does not require registration.</p>
<h2 id="creating-a-page" tabindex="-1"><a class="header-anchor" href="#creating-a-page"><span>Creating a Page</span></a></h2>
<p>You can use Laravel Command to create both Page and Partial. All the backend components(page &amp; partial) are stored in <code v-pre>app/Lepton</code> folder, and the Frontend Components are lies inside of
<code v-pre>resources/js/Pages</code> directory. Creating a page generates both frontend and backend Components. The command is:</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#FFA657">php</span><span style="color:#A5D6FF"> artisan</span><span style="color:#A5D6FF"> make:lepton</span><span style="color:#A5D6FF"> UsersList</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><p>This command generates two files in your application. The first will be the Backend's component class: <code v-pre>app/Lepton/UserList.php</code></p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-php"><code><span class="line"><span class="line"><span style="color:#FF7B72">&#x3C;?</span><span style="color:#79C0FF">php</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">namespace</span><span style="color:#FFA657"> App\Lepton</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">use</span><span style="color:#79C0FF"> Lepton\Component</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">class</span><span style="color:#FFA657"> UserList</span><span style="color:#FF7B72"> extends</span><span style="color:#79C0FF"> Component</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">{</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">    public</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> render</span><span style="color:#E6EDF3">()</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">        return</span><span style="color:#79C0FF"> $this</span><span style="color:#FF7B72">-></span><span style="color:#D2A8FF">view</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'lepton.user-list'</span><span style="color:#E6EDF3">);</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The second will be your frontend component in your preferred stack(Vue/Inertia): <code v-pre>resources/js/lepton/UserList.vue</code></p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-vue"><code><span class="line"><span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    &#x3C;</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span></span>
<span class="line"><span class="line"><span style="color:#8B949E">        &#x3C;!-- TODO: add your template here --></span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    &#x3C;/</span><span style="color:#7EE787">div</span><span style="color:#E6EDF3">></span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">template</span><span style="color:#E6EDF3">></span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">&#x3C;</span><span style="color:#7EE787">script</span><span style="color:#79C0FF"> setup</span><span style="color:#E6EDF3">></span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">    import</span><span style="color:#E6EDF3"> { usePartial } </span><span style="color:#FF7B72">from</span><span style="color:#A5D6FF"> "@leptonjs/leptonjs"</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">    const</span><span style="color:#79C0FF"> partial</span><span style="color:#FF7B72"> =</span><span style="color:#D2A8FF"> usePartial</span><span style="color:#E6EDF3">()</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">&#x3C;/</span><span style="color:#7EE787">script</span><span style="color:#E6EDF3">></span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can organize your components into subdirectories using either namespace syntax or dot notation.</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-bash"><code><span class="line"><span class="line"><span style="color:#FFA657">php</span><span style="color:#A5D6FF"> artisan</span><span style="color:#A5D6FF"> make:lepton</span><span style="color:#A5D6FF"> Users</span><span style="color:#FF7B72">\\</span><span style="color:#A5D6FF">UserList</span></span></span>
<span class="line"><span class="line"><span style="color:#FFA657">php</span><span style="color:#A5D6FF"> artisan</span><span style="color:#A5D6FF"> make:lepton</span><span style="color:#A5D6FF"> users.user-list</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="setting-properties" tabindex="-1"><a class="header-anchor" href="#setting-properties"><span>Setting properties</span></a></h2>
<h2 id="sharing-additional-data-with-the-view" tabindex="-1"><a class="header-anchor" href="#sharing-additional-data-with-the-view"><span>Sharing additional data with the view</span></a></h2>
<h2 id="method-calling" tabindex="-1"><a class="header-anchor" href="#method-calling"><span>Method Calling</span></a></h2>
<h2 id="passing-data-into-components" tabindex="-1"><a class="header-anchor" href="#passing-data-into-components"><span>Passing data into components</span></a></h2>
<h2 id="accessing-route-parameters" tabindex="-1"><a class="header-anchor" href="#accessing-route-parameters"><span>Accessing route parameters</span></a></h2>
<p>You can access to the route parameters within your both frontend and backend components. For example, let's define a route to show a details of a user as:</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="routes/web.php"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-php"><code><span class="line"><span class="line"><span style="color:#FF7B72">use</span><span style="color:#79C0FF"> App\Lepton\UserShow</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF">Route</span><span style="color:#FF7B72">::</span><span style="color:#D2A8FF">get</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'users/{id}'</span><span style="color:#E6EDF3">, </span><span style="color:#79C0FF">UserShow</span><span style="color:#FF7B72">::class</span><span style="color:#E6EDF3">);</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>The route parameters in your backend component can be accessed via <code v-pre>mount</code> method, you can define a    <code v-pre>mount</code> method to access the route parameters.</p>
<div class="language-php line-numbers-mode" data-highlighter="prismjs" data-ext="php" data-title="php"><pre  class="shiki github-dark-default vp-code" style="background-color:#0d1117;color:#e6edf3" v-pre=" language-php"><code><span class="line"><span class="line"><span style="color:#FF7B72">&#x3C;?</span><span style="color:#79C0FF">php</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">namespace</span><span style="color:#FFA657"> App\Lepton</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">use</span><span style="color:#79C0FF"> App\Models\User</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">use</span><span style="color:#79C0FF"> Lepton\Component\Component</span><span style="color:#E6EDF3">;</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">class</span><span style="color:#FFA657"> UserShow</span><span style="color:#FF7B72"> extends</span><span style="color:#79C0FF"> Component</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">{</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">    public</span><span style="color:#79C0FF"> User</span><span style="color:#E6EDF3"> $user;</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    </span></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF">    pubic</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> mount</span><span style="color:#E6EDF3">($id)</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#79C0FF">        $this</span><span style="color:#FF7B72">-></span><span style="color:#E6EDF3">user </span><span style="color:#FF7B72">=</span><span style="color:#79C0FF"> User</span><span style="color:#FF7B72">::</span><span style="color:#D2A8FF">query</span><span style="color:#E6EDF3">()</span><span style="color:#FF7B72">-></span><span style="color:#D2A8FF">findOrFail</span><span style="color:#E6EDF3">($id)    </span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    </span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">    public</span><span style="color:#FF7B72"> function</span><span style="color:#D2A8FF"> render</span><span style="color:#E6EDF3">()</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    {</span></span></span>
<span class="line"><span class="line"><span style="color:#FF7B72">        return</span><span style="color:#79C0FF"> $this</span><span style="color:#FF7B72">-></span><span style="color:#D2A8FF">view</span><span style="color:#E6EDF3">(</span><span style="color:#A5D6FF">'Lepton/Users/UserShow'</span><span style="color:#E6EDF3">);</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E6EDF3">}</span></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


