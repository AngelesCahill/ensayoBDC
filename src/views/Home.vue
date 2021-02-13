<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 col-md-3">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cuenta Corriente</li>
            <li class="list-group-item">Tarjeta de Crédito</li>
            <li class="list-group-item">Linea de Crédito</li>
            <li class="list-group-item">
              <a @click="$router.push({name: 'Transferencias'})">Transferencias</a>
            </li>
            <li class="list-group-item">Pago de Servicios</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-6 col-md-9 my-4">
        <h5 class="vitrina">vitrina</h5>
        <h2>{{info.usuario.nombre}} {{info.usuario.apellido}}</h2>
        <h5>{{info.usuario.mensaje}}</h5>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{info.cupos[0].nombre}}</h5>
              <p class="card-text mx-2">Utilizado: {{info.cupos[0].utilizado}}</p>
              <p class="card-text mx-2">Total: {{info.cupos[0].disponible}}</p>
            <a href="#" class="btn btn-primary d-block">Ver detalles</a>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{info.cupos[1].nombre}}</h5>
            <p class="card-text">Utilizado: {{info.cupos[1].utilizado}}</p>
            <p class="card-text">Total: {{info.cupos[1].disponible}}</p>
            <a href="#" class="btn btn-primary d-block">Ver detalles</a>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data(){
    return {
     info: null,
    }
  },
  mounted () {
    axios
      .get('/dashboard.json')
      .then(response => (this.info = response.data))
  },
}
</script>
<style>
.vitrina {
  background-color: #EAE9F5;
  height: 180px;
}
.card-text {
display: inline-block;
}
</style>
