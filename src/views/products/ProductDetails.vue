<template>
  <div id="product-details">
    <div class="d-flex justify-content-between align-items-center">
      <h3>Product Detail</h3>
      <div class="d-flex">
        <button class="btn text-danger" @click="deleteProduct">Delete</button>
        <router-link
          v-bind:to="{ path: '/products/' + id + '/edit' }"
          class="btn btn-success"
        >
          Edit Product
        </router-link>
      </div>
    </div>
    <ul class="list-group my-3">
      <li class="list-group-item">
        <div class="row">
          <span class="col-12 col-md-6 font-weight-bold">ID</span>
          <span class="col-12 col-md-6">{{ id }}</span>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <span class="col-12 col-md-6 font-weight-bold">Name</span>
          <span class="col-12 col-md-6">{{ name }}</span>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <span class="col-12 col-md-6 font-weight-bold">Type</span>
          <span class="col-12 col-md-6">{{ type }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "../../configs/firebaseInit";
export default {
  name: "product-details",
  data() {
    return {
      id: null,
      name: null,
      type: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("products")
      .where("id", "==", to.params.id)
      .get()
      .then((qureySnapshot) => {
        qureySnapshot.forEach((doc) => {
          next((vm) => {
            vm.id = doc.data().id;
            vm.name = doc.data().name;
            vm.type = doc.data().type;
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("products")
        .where("id", "==", this.$route.params.id)
        .get()
        .then((qureySnapshot) => {
          qureySnapshot.forEach((doc) => {
            this.id = doc.data().id;
            this.name = doc.data().name;
            this.type = doc.data().type;
          });
        });
    },
    deleteProduct() {
      db.collection("products")
        .where("id", "==", this.id)
        .get()
        .then((qureySnapshot) => {
          qureySnapshot.forEach((doc) => {
            doc.ref.delete();
            this.$router.push("/products");
          });
        });
    },
  },
};
</script>
