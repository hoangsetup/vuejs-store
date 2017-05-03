<template>
    <nav class="navbar navbar-full navbar-light navbar-jw">
        <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" alt="Vue logo"/> Store
        </a>
        <div class="nav navbar-nav">
            <router-link
                to="home"
                class="nav-item nav-link"
                active-class="active"
                exact
            >
                Home
            </router-link>
            <router-link
                to="manage-products"
                class="nav-item nav-link"
                active-class="active"
                exact
            >
                Manage Products
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>
