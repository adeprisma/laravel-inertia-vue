<!-- resources/js/components/PostsDataTable.vue -->

<template>
    <Head title="New Post"/>
    <AppLayout>         
        <form @submit.prevent="form.post(route('posts.store'))">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input v-model="form.title" type="text" id="title" class="block mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md">
                <span v-if="errors.title" class="text-red-500">
                    {{ errors.title }}
                </span>
            </div>

            <div class="mt-4">
                <label for="content" class="block text-sm font-medium text-gray-700">
                    Content
                </label>
                <textarea v-model="form.content" id="content" class="block mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                <span v-if="errors.content" class="text-red-500">
                    {{ errors.content }}
                </span>
            </div>

            <div class="py-4">
                <button type="submit" :disabled="form.processing" class="inline-block px-4 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500">
                    Save
                </button>
                <Link :href="route('posts.index')" class="ml-2 inline-block px-4 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500">
                    Cancel
                </Link>
            </div>
        </form>
    </AppLayout>  
</template>

<script>
import AppLayout from '@/Layouts/App.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

export default {
    components: {
        AppLayout,
        Head,
        Link,
        useForm,
    },

    props: {
        errors: Object
    },

    setup() {
        const form = useForm({
            title: '',
            content: '',
        })

        return {
            form,
        }
    }
}
</script>
