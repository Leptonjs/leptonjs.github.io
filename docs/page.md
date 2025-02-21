---
lang: en-US
title: Page
description: Page & Partial in LeptonJs
---

::: danger
LeptonJs is still in its early development stage, so use it with caution.
:::

# Page Vs Partial
In LeptonJs, components can be used as either Pages or Partials.
* Pages are full components rendered for specific endpoints and must be registered via Laravel routes.
* Partials are reusable components that can be injected into any Page without requiring a dedicated route.

Both Pages and Partials are created and written in the same way. However, a Page must be registered as a route, whereas a Partial does not require registration.

## Creating a Page
You can use Laravel Command to create both Page and Partial. All the backend components(page & partial) are stored in `app/Lepton` folder, and the Frontend Components are lies inside of 
`resources/js/Pages` directory. Creating a page generates both frontend and backend Components. The command is:
```shell
php artisan make:lepton UsersList
```
This command generates two files in your application. The first will be the Backend's component class: `app/Lepton/UserList.php`

```php
<?php

namespace App\Lepton;

use Lepton\Component;

class UserList extends Component
{
    public function render()
    {
        return $this->view('lepton.user-list');
    }
}
```
The second will be your frontend component in your preferred stack(Vue/Inertia): `resources/js/lepton/UserList.vue`

```vue
<template>
    <div>
        <!-- TODO: add your template here -->
    </div>
</template>
<script setup>
    import { usePartial } from "@leptonjs/leptonjs"
    const partial = usePartial()
</script>
```
You can organize your components into subdirectories using either namespace syntax or dot notation.
```shell
php artisan make:lepton Users\\UserList
php artisan make:lepton users.user-list
```

## Setting properties

## Sharing additional data with the view

## Method Calling

## Passing data into components

## Accessing route parameters
You can access to the route parameters within your both frontend and backend components. For example, let's define a route to show a details of a user as:
```php :title="routes/web.php"
use App\Lepton\UserShow;

Route::get('users/{id}', UserShow::class);
```

The route parameters in your backend component can be accessed via `mount` method, you can define a    `mount` method to access the route parameters.

```php
<?php

namespace App\Lepton;

use App\Models\User;
use Lepton\Component\Component;

class UserShow extends Component
{
    public User $user;
    
    pubic function mount($id)
    {
        $this->user = User::query()->findOrFail($id)    
    }
    
    public function render()
    {
        return $this->view('Lepton/Users/UserShow');
    }
}
```
