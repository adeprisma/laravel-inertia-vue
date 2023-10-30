<template>
    <div class="font-sans text-gray-900 antialiased">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
            <div>
                <a href="/">
                    <!-- Logo Laravel -->
                    <svg viewBox="0 0 316 316" xmlns="http://www.w3.org/2000/svg" class="w-20 h-20">
                        <path d="M305.8,0C217.6,0,66.7,151.7,66.7,316c0,164.3,151.7,316,316,316c164.3,0,316-151.7,316-316C322.5,151.7,271.8,0,305.8,0"/>
                    </svg>
                </a>
            </div>

            <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <slot />
            </div>
        </div>
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