<template>
   <div>
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
        <div class="col-sm-12 col-md-9">
            <form>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </form>
        </div>
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Transferencias',
    data () {
        return {
            datos: null
        }
    },
    mounted () {
    axios
      .get('env_transf_req.json')
      .then(response => (this.datos = response.data))
  }, 
}
</script>

<style>

</style>