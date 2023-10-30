<template>
    <div class="overflow-x-auto overflow-hidden p-6 bg-white border-gray-200">
        <div class="min-w-full align-middle">
            <Link :href="route('posts.index')" :class="route().current('posts.index') ? 'bg-blue-500 text-white' : ''">Posts</Link>
            <Link :href="route('pages.about')" class="ml-2" :class="route().current('pages.about') ? 'bg-blue-500 text-white' : ''">About</Link>

            <slot />
        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/vue3';
export default {
    components: {
        Link
    }
}
</script>