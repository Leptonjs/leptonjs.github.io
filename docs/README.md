---
lang: en-US
title: Introduction
description: Introduction to LeptonJs
---

::: warning
LeptonJs is still in its early development stage, so use it with caution.
:::

# LeptonJs
Welcome to the LeptonJs ! 

Have you ever felt that [Livewire](https://livewire.laravel.com/docs/quickstart) is so easy and flexible ? but at the same time Do you miss your frontend stacks, For instance, Vue's DatePicker 
library is familiar to you, but now you're unsure how to create a similar library in Livewire?? If so, you're in the right place! LeptonJs is a library that brings together the flexibility of Laravel Livewire while also giving you access to your frontend, like Vue and React (coming soon in the roadmap).

## Let me show you the code
First, we will define a Lepton Component like in Livewire, this component directly binds your data to your frontend like in Livewire, For example, a Simple Counter Component can be written as:
```php title="app\Lepton\Counter.php"
namespace App\Lepton;

use Lepton\Component\Component;

class Counter extends Component 
{
    public int $counter = 0;
   
    pulic function increment(){
       $this->counter++;
    } 
   
    public function decrement(){
       $this->counter--;
    }
   
    public function render() {
       return $this->view('Counter');
    }    
}
```

You can expose this component as a route. To do so, let's add a route:
```php title="routes\web.php"
use Illuminate\Support\Facades\Route;

Route::get('/', \App\Lepton\Counter::class);
```

You can access all the backend data by using `useWire` Composable in Vue. For example:
```vue title="Pages/Counter.vue"
<template>
    <div>{{wire.states.counter}}</div>
    
    <button @click="wire.method('decrement')">Decrement</button>
    <button @click="wire.method('increment')">Increment</button>
</template>
<script setup>
    import {useWire} from "@leptonjs/leptonjs"
    const wire = useWire()
</script>
```

> Wait what? are you performing the network request just to update the counter ?

Right now Yes, But You don't have to!, You can manage your states inside your Frontend Component as long long you don't need to sync with the backend. For example, the above code can be written as:

```vue
<template>
    <div>{{wire.states.counter}}</div>

    <button @click="wire.method('decrement')">Decrement</button> <!-- [!code --] -->
    <button @click="decrement">Decrement</button> <!-- [!code ++] -->
    <button @click="wire.method('increment')">Increment</button> <!-- [!code --] -->
    <button @click="increment">Increment</button> <!-- [!code ++] -->
</template>
<script setup>
    import {useWire} from "@leptonjs/leptonjs"
    const wire = useWire()
    
    const increment = ()=>{ // [!code ++]
        wire.states.counter ++; // [!code ++]
    } // [!code ++]
    
    const decrement = ()=>{ // [!code ++]
        wire.states.counter --; // [!code ++]
    } // [!code ++]
</script>
```

You also don't need the backend functions to increment and decrement the states, so we can safely remove them.

```php title="app\Lepton\Counter.php"
class Counter extends Component 
{
    public int $counter = 0;
   
    pulic int increment(){  // [!code --]
       $this->counter++;  // [!code --]
    }   // [!code --]
   
    public int decrement(){  // [!code --]
       $this->counter--; // [!code --]
    } // [!code --]
   
    public function render() {
       return $this->view('Counter');
    }
}
```

## Inertia Vs Lepton
[Inertia](https://inertiajs.com/) is an excellent choice for building monolithic applications. In fact, it inspired us to create LeptonJs. However, it lacks the flexibility of Livewire, with a major drawback being its inability to support component injection like Livewire. For example: You can inject your Livewire component inside your blade as:

```php
// Example taken from Livewire Documentation
<div>
    @foreach ($posts as $post)
        <livewire:post-item :$post :key="$post->id">
    @endforeach
</div>
```

But inertia lacks this feature—it requires injecting all the data initially. While it does support lazy data loading, we find that Partial Component Injection offers greater flexibility, reduces initial page load data, and makes components lighter.

Similarly, in LeptonJs, you can inject a component like this:
```vue
<template>
    <div>
        <LeptonPartial
            v-for="post in wire.props.posts"
            component="post-item"
            :key="key"
            :post="post"/>
    </div>
</template>
<script setup>
    import { LeptonPartial, useWire } from "@leptonjs/leptonjs"
    const wire = useWire()
</script>
```

## Final Thoughts
LeptonJs is a combination of InertiaJs and Livewire. We have integrated the most of the features of Livewire into LeptonJs, and, inspired by the inertiaJs to build such a dynamic frontend. With LeptonJs, your backend API calls become simple method calls, states are synced with your backend component, and you don't have to learn a new stack like Alpine to make your frontend interactive. You can continue using existing libraries, such as your favorite datepicker, that you've relied on for years.
