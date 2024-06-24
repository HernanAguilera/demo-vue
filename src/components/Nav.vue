<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">Home</router-link>
            </li>
        </ul>
        <ul>
            <li v-if="isAuthenticated()">
                <router-link to="/profile">Profile</router-link>
                <router-link to="/logout" @click="logout">Logout</router-link>
            </li>
            <li v-else>
                <router-link to="/login">Login</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Auth from '../utils/Auth.ts';

const logout = () => {
    Auth.logout();
}

const isAuthenticated = () => {
    return Auth.isAuthenticated();
}
</script>