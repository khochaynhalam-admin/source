<template>
  <div id="products">
    <div class="d-flex justify-content-between align-items-center">
      <h3>Products</h3>
      <router-link v-bind:to="{name: 'product-modify'}" class="btn btn-success">Create New Product</router-link>
    </div>
    <ul class="list-group my-3">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>name</span>
        <router-link v-bind:to="{name: 'product-details', params: {id: 'id'}}"><img src="../../assets/icons/ic_eye.svg" alt=""></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'products',
  data() {
    return {};
  },
}
</script>
<style lang="scss">

</style>