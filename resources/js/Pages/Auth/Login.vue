<template>
    <head title="Log in"/>
    <AuthLayout>
        <h2>Login Form</h2>
    </AuthLayout>
</template>

<script>
import AuthLayout from '@/Layouts/Auth.vue';
import { Head } from '@inertiajs/vue3';

export default {
    components: {
        AuthLayout,
        Head,
    }
}
</script>