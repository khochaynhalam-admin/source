<template>
  <div id="products">
    <div class="d-flex justify-content-between align-items-center">
      <h3>Products</h3>
      <router-link
        v-bind:to="{ name: 'product-modify' }"
        class="btn btn-success"
        >Create New Product</router-link
      >
    </div>
    <ul class="list-group my-3" v-if="products.length !== 0">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="product of products"
        v-bind:key="product.key"
      >
        <span>{{ product.name }}</span>
        <router-link
          v-bind:to="{ name: 'product-details', params: { id: product.id } }"
          class="d-flex align-items-center"
        >
          <img src="../../assets/icons/ic_eye.svg" alt="" />
        </router-link>
      </li>
    </ul>
    <div v-if="products.length === 0">Records not found</div>
  </div>
</template>

<script>
import { db } from "../../configs/firebaseInit";
export default {
  name: "products",
  data() {
    return {
      products: [],
    };
  },
  created() {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            key: doc.id,
            id: doc.data().id,
            name: doc.data().name,
          };
          this.products.push(data);
        });
      });
  },
};
</script>
<style lang="scss">
</style>