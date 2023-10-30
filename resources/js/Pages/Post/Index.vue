<!-- resources/js/components/PostsDataTable.vue -->

<template>
    <Head title="Posts lists"/>
    <AppLayout>
        <Link :href="route('posts.create')" class="inline-block px-4 py-3 bg-indigo-600 text-white rounded hover:bg-indigo-500">
            New Post
        </Link>         
        <table class="mt-4 min-w-full divide-y divide-gray-200 border">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        No
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Title
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Content
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Creatad At
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="post in posts" :key="post.id">
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        {{ post.id }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {{ post.title }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {{ post.content }}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        {{ post.created_at }}
                    </td>
                </tr>
            </tbody>
        </table>
    </AppLayout>  
</template>

<script>
import AppLayout from '@/Layouts/App.vue';
import { Head, Link } from '@inertiajs/vue3';

export default {
    components: {
        AppLayout,
        Head,
        Link,
    },
    props: {
        posts: Array,
    }
}
</script>
