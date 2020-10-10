<template>
  <div id="product-modify">
    <form @submit="onCancel">
      <div class="d-flex justify-content-between align-items-center">
        <h3>{{ titlePage }} Product</h3>
        <div class="d-flex">
          <router-link v-bind:to="{path: cancelURL}" class="btn">Cancel</router-link>
          <button class="btn btn-success" type="submit" @click="onSave">
            {{ titleBtn }}
          </button>
        </div>
      </div>
      <div class="card mt-3">
        <div class="card-header"><strong>Generate Information</strong></div>
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-md-6">
              <div role="group" class="form-group">
                <label for="uid-qvk4gvm5sa" class="">ID *</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  class="form-control"
                  v-model="id"
                  required
                  disabled
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div role="group" class="form-group">
                <label for="uid-qvk4gvm5sa" class="">Name *</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  class="form-control"
                  required
                  v-model="name"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div role="group" class="form-group">
                <label for="uid-qvk4gvm5sa" class="">Type *</label>
                <input
                  type="text"
                  placeholder="Enter product type"
                  class="form-control"
                  required
                  v-model="type"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <Modals
      :warningModal="modalShow"
      :message="modalMessage"
      :title="'Cancel'"
    />
  </div>
</template>

<script>
import Util from "../../util";
import Modals from "../modal/ModalConfirm";
import { db } from "../../configs/firebaseInit";

export default {
  name: "product-modify",
  components: {
    Modals,
  },
  data() {
    return {
      modalShow: false,
      modalMessage: "Your changes could not be saved if you choose to leave.",
      titlePage: null,
      titleBtn: null,
      cancelURL: null,
      modifyMode: null,
      validated: false,
      submitted: false,
      lastID: null,
      id: null,
      name: null,
      type: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    let count = 0;
    if (!to.params.id) {
      db.collection("products")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(() => {
            count++;
            next((vm) => {
              vm.modifyMode = "create";
              vm.titlePage = "Create";
              vm.titleBtn = "Create";
              vm.id = Util.generateID("product", count + 1);
              vm.cancelURL = "/products";
            });
          });
        });
    } else {
      db.collection("products")
        .where("id", "==", to.params.id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            next((vm) => {
              vm.modifyMode = "edit";
              vm.titlePage = "Edit";
              vm.titleBtn = "Save";
              vm.id = doc.data().id;
              vm.cancelURL = "/products/" + vm.id;
              vm.name = doc.data().name;
              vm.type = doc.data().type;
            });
          });
        });
    }
  },
  watch: { $route: "fetchDatam, getLastID" },
  methods: {
    fetchData() {
      db.collection("products")
        .where("id", "==", this.$route.params.id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.id = doc.data().id;
            this.name = doc.data().name;
            this.type = doc.data().type;
          });
        });
    },
    onCancel() {
      this.$router.push(this.cancelURL);
      // this.modalShow = true;
    },
    onSave() {
      this.submitted = true;
      if (this.id && this.name && this.type) {
        this.validated = true;
        if (this.submitted && this.validated) {
          switch (this.modifyMode) {
            case "create":
              {
                db.collection("products")
                  .add({
                    id: this.id,
                    name: this.name,
                    type: this.type,
                  })
                  .then(() => {
                    this.$router.push("/products/" + this.id);
                  });
              }
              break;
            case "edit":
              {
              }
              break;
          }
        }
      } else {
        this.submitted = true;
        this.validated = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  font-weight: 700;
}
</style>