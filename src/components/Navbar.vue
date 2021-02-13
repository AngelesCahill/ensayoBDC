<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BDC</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" @click="$router.push({name: 'Home'})">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Personas</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Empresas</a>
                    </li>
                     <li class="nav-item">
                    <a class="nav-link" href="#">Pymes</a>
                    </li>
                     <li class="nav-item">
                    <a class="nav-link" href="#">Private Banking</a>
                    </li>
                     <li class="nav-item">
                    <a class="nav-link" href="#">LogIn</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Cerrar Sesión</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>