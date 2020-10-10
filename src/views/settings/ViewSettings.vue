<template>
  <div id="view-settings">
    <div class="d-flex w-100 justify-content-between">
    <h3>Edit Settings</h3>
    <router-link v-bind:to="{name: 'edit-settings'}" class="btn btn-primary"
        >Edit</router-link
      ></div>
    <p style="color: red;">
      NOTE:
      <span>If all fields are empty, reload the page to get data</span>
    </p>
    <form>
      <div class="row">
        <div class="col-12"><h1>Generate Informations</h1></div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Site Title:</label>
            <p>{{ title ? title : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Display Name:</label>
            <p>{{ displayName ? displayName : "N/A" }}</p>
          </div>
        </div>
        <div class="col-12 p-0">
          <div class="row m-0">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleFormControlInput1">Logo:</label>
                <p>{{ logo ? logo : "N/A" }}</p>
              </div>
            </div>
            <div class="col-6">
              <img :src="logo" alt="" height="100px" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><h1>Working Hour</h1></div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Weekdays:</label>
            <p>{{ working_hour.weekdays ? working_hour.weekdays : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Weekend:</label>
            <p>{{ working_hour.weekend ? working_hour.weekend : "N/A" }}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><h1>Contact</h1></div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Name:</label>
            <p>{{ contact.name ? contact.name : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Phone:</label>
            <p>{{ contact.phone ? contact.phone : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Email:</label>
            <p>{{ contact.email ? contact.email : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Zalo:</label>
            <p>{{ contact.zalo ? contact.zalo : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Facebook:</label>
            <p>{{ contact.facebook ? contact.facebook : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Youtube:</label>
            <p>{{ contact.youtube ? contact.youtube : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Fanpage:</label>
            <p>{{ contact.fanpage ? contact.fanpage : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Tiki:</label>
            <p>{{ contact.tiki ? contact.tiki : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Shopee:</label>
            <p>{{ contact.shopee ? contact.shopee : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Lazada:</label>
            <p>{{ contact.lazada ? contact.lazada : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Dealshaker:</label>
            <p>{{ contact.dealshaker ? contact.dealshaker : "N/A" }}</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form-group">
            <label for="exampleFormControlInput1">Website:</label>
            <p>{{ contact.website ? contact.website : "N/A" }}</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../../configs/firebaseInit";
export default {
  name: "view-settings",
  data() {
    return {
      title: null,
      logo: null,
      displayName: null,
      working_hour: {
        weekdays: null,
        weekend: null
      },
      contact: {
        name: null,
        phone: null,
        email: null,
        zalo: null,
        facebook: null,
        youtube: null,
        fanpage: null,
        tiki: null,
        shopee: null,
        lazada: null,
        dealshaker: null,
        website: null
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("settings")
      .where("id", "==", "settings")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.title = doc.data().title;
            vm.logo = doc.data().logo;
            vm.displayName = doc.data().displayName;
            vm.working_hour.weekdays = doc.data().working_hour
              ? doc.data().working_hour.weekdays
              : "";
            vm.working_hour.weekend = doc.data().working_hour
              ? doc.data().working_hour.weekend
              : "";
            vm.contact.name = doc.data().contact ? doc.data().contact.name : "";
            vm.contact.phone = doc.data().contact
              ? doc.data().contact.phone
              : "";
            vm.contact.email = doc.data().contact
              ? doc.data().contact.email
              : "";
            vm.contact.zalo = doc.data().contact ? doc.data().contact.zalo : "";
            vm.contact.facebook = doc.data().contact
              ? doc.data().contact.facebook
              : "";
            vm.contact.youtube = doc.data().contact
              ? doc.data().contact.youtube
              : "";
            vm.contact.fanpage = doc.data().contact
              ? doc.data().contact.fanpage
              : "";
            vm.contact.tiki = doc.data().contact ? doc.data().contact.tiki : "";
            vm.contact.shopee = doc.data().contact
              ? doc.data().contact.shopee
              : "";
            vm.contact.lazada = doc.data().contact
              ? doc.data().contact.lazada
              : "";
            vm.contact.dealshaker = doc.data().contact
              ? doc.data().contact.dealshaker
              : "";
            vm.contact.website = doc.data().contact
              ? doc.data().contact.website
              : "";
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
label {
  font-weight: 700;
}
</style>