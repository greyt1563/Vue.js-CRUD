<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"><router-link to="/binding">Binding</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"><router-link to="/table">About</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active"><router-link to="/form">Contact Form</router-link></a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> -->
                    <!-- <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> -->
                </ul>
                <div class="d-flex" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item" v-if="!user">
                            <router-link class="nav-link btn btn-outline-success" to="/register">Register</router-link>
                        </li>
                        <li class="nav-item" v-if="!user">
                            <router-link class="nav-link btn btn-outline-success" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item" v-if="user">
                            <a class="nav-link btn btn-outline-success" href="" @click.prevent="logout">Logout</a>
                        </li>
                    </ul>
                    
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            user: "",
        };
    },
    mounted() {
        if (localStorage.activeUser) {
            let activeUser = localStorage.activeUser;
            this.user = JSON.parse(activeUser);
        }
    },
    methods: {
        logout() {
            localStorage.removeItem("activeUser");
            this.$router.push("/login");
            window.location.reload();
        },
    },
}
</script>

<style scoped></style>