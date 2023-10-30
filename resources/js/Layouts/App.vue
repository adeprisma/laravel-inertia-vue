<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <!-- Logo -->
                        <div class="shrink-0 flex items-center">
                            <a href="/">
                                <svg viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg"
                                    class="block h-10 w-auto fill-current text-gray-600">
                                    <path
                                        d="M158,0C93.8,0,44,49.8,44,114c0,34.8,16.6,65.7,43.3,87.5C138.8,195.3,118.2,206,96,206c-10.2,0-20.4-2.3-29.6-6.8" />
                                </svg>
                            </a>
                        </div>

                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <Link :href="route('posts.index')"
                                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                                :class="route().current('posts.index') ? 'font-bold border-b-2' : ''">Posts</Link>
                            <Link :href="route('pages.about')"
                                class="inline-flex items-center px-1 pt-1 text-sm font-medium"
                                :class="route().current('pages.about') ? 'font-bold border-b-2' : ''">About</Link>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <div>
                            <div>Hi, user</div>
                        </div>
                    </div>

                    <button type="button"
                        class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                        Log out
                    </button>
                </div>
            </div>
        </nav>

        <main>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6 bg-white border-b border-gray-200">
                            <slot />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { Link } from '@inertiajs/vue3';
export default {
    components: {
        Link
    }
}
</script>