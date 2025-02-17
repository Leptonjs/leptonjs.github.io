---
lang: en-US
title: Introduction
description: Introduction to LeptonJs
---

# LeptonJs
Welcome to the LeptonJs ! 

Have you ever felt that [Livewire](https://livewire.laravel.com/docs/quickstart) is so simple and flexible ? but at the same time Do you miss your frontend stacks, For instance you are so familiar 
Vue's DatePicker library now you don't know how to write a Similar Library in Livewire as well? If so, you're in the right place! LeptonJs is a library that brings together the flexibility of Laravel Livewire while also giving you access to your frontend, like Vue and React (coming soon in the roadmap).

## Let me show you the code

LeptonJs allows you to define a Component that directly binds your data to your frontend. For example a Simple Counter Component can be written as:
```php title="app\Lepton\Counter.php"
class Counter extends Component 
{
    public int $counter = 0;
   
    pulic int increment(){
       $this->counter++;
    } 
   
    public int decrement(){
       $this->counter--;
    }
   
    public function render() {
       return $this->view('Counter');
    }    
}
```

You can access all of the backend data by using `useWire` Composable in Vue. For example:
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

Right now Yes, But You don't have to!, You can manage your states inside your Frontend Component as long long you don't need to sync with the backend. For example above code can be write as:

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

And you don't need the backend function to increment and decrement the states as well, so we can safely remove it.

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

LetponJs allows you to define a Component that serves as full Page, to do show, Let's define our Page in Laravel's route as:

```php
use Illuminate\Support\Facades\Route;

Route::get('/', )
```
