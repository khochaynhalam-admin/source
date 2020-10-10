<template>
  <div id="product-details">
    <div class="d-flex justify-content-between align-items-center">
      <h3>Product Detail</h3>
      <div class="d-flex">
        <button class="btn text-danger">Delete</button>
        <router-link v-bind:to="{path: 'id'+'/edit'}" class="btn btn-success">Edit Product</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-details",
  data() {
    return {};
  },
};
</script>
