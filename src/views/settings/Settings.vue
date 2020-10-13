<template>
  <div id="edit-settings">
    <h3>Edit Settings</h3>
    <p style="color: red">
      NOTE:
      <span>If all fields are empty, reload the page to get data</span>
    </p>
    <form @submit="saveSettings">
      <div class="row">
        <div class="col-12"><h1>Generate Informations</h1></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Site Title:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Site Title"
              v-model="title"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Display Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Display Name"
              v-model="displayName"
            />
          </div>
        </div>
        <div class="col-12 p-0">
          <div class="row m-0">
            <div class="col-12 col-md-6">
              <div class="form-group">
                <label>Logo:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Logo"
                  v-model="logo"
                />
              </div>
            </div>
            <div class="col-12 col-md-6">
              <img :src="logo" alt="" height="100px" />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><h1>Working Hour</h1></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Weekdays:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Working hour Weekdays"
              v-model="working_hour.weekdays"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Weekend:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Working hour Weekend"
              v-model="working_hour.weekend"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12"><h1>Contact</h1></div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Name"
              v-model="contact.name"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Phone:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Phone"
              v-model="contact.phone"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Email:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Email"
              v-model="contact.email"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Zalo:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Zalo"
              v-model="contact.zalo"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Facebook:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Facebook"
              v-model="contact.facebook"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Youtube:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Youtube"
              v-model="contact.youtube"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Fanpage:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Fanpage"
              v-model="contact.fanpage"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Tiki:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Tiki"
              v-model="contact.tiki"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Shopee:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Shopee"
              v-model="contact.shopee"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Lazada:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Lazada"
              v-model="contact.lazada"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Dealshaker:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Dealshaker"
              v-model="contact.dealshaker"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Website:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Contact Website"
              v-model="contact.website"
            />
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-12">
          <h1>Header</h1>
          <span>This is the settings for the header</span>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label>Hottest products(1-5):</label>
            <input
              type="number"
              class="form-control"
              min="1"
              max="5"
              placeholder="The number of hostest products"
              v-model="numberHottestProducts"
            />
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <div class="card">
              <div class="card-header">Hottest products list</div>
              <div class="card-body">
                <table class="w-100 table table-responsive-sm table-striped">
                  <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Orders</th>
                  </thead>
                  <tbody>
                    <tr v-for="item of slideList" v-bind:key="item.key">
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.type }}</td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.orders }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row">
        <div class="col-12">
          <h1>About</h1>
        </div>
        <div
          class="row w-100 m-0 about-item"
          v-for="(item, index) in about"
          v-bind:key="item.id"
        >
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label>About keyword {{ index + 1 }}:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter the about keyword"
                v-model="item.keyword"
              />
              <button
                class="btn btn--delete-item p-0 font-weight-bold d-flex align-items-center mt-2"
                type="button"
                @click="deleteAboutItem(index)"
              >
                <img src="../../assets/icons/ic_delete.svg" alt="" />
                Delete this item
              </button>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-group">
              <label> About description {{ index + 1 }}: </label>
              <textarea
                type="text"
                class="form-control"
                placeholder="Enter the about description"
                v-model="item.description"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-12">
          <button
            type="button"
            class="btn font-weight-bold d-flex align-items-center p-0"
            @click="addMoreAbout"
          >
            <img src="../../assets/icons/ic_plus.svg" alt="" /> Add more
          </button>
        </div>
      </div>
      <div class="d-flex my-5 mx-0">
        <router-link v-bind:to="{ name: 'view-settings' }" class="btn"
          >Cancel</router-link
        >
        <button
          type="submit"
          class="btn btn-success"
          :disabled="
            !title &&
            !displayName &&
            !logo &&
            !working_hour.weekdays &&
            !working_hour.weekend &&
            !contact.name &&
            !contact.phone &&
            !contact.email &&
            !contact.zalo &&
            !contact.facebook &&
            !contact.youtube &&
            !contact.fanpage &&
            !contact.tiki &&
            !contact.shopee &&
            !contact.lazada &&
            !contact.dealshaker &&
            !contact.website &&
            !about.keyword &&
            !about.description
          "
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from "../../configs/firebaseInit";
export default {
  name: "edit-settings",
  data() {
    return {
      title: null,
      logo: null,
      displayName: null,
      working_hour: {
        weekdays: null,
        weekend: null,
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
        website: null,
      },
      numberHottestProducts: 1,
      slideList: [],
      about: [
        {
          id: 0,
          keyword: "",
          description: "",
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("settings")
      .where("id", "==", "settings")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            vm.title = doc.data().title ? doc.data().title : "";
            vm.logo = doc.data().logo ? doc.data().logo : "";
            vm.displayName = doc.data().displayName
              ? doc.data().displayName
              : "";
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
            vm.numberHottestProducts = doc.data().numberHottestProducts
              ? doc.data().numberHottestProducts
              : 1;
            vm.about = doc.data().about ? doc.data().about : [];
          });
        });
      });
  },
  methods: {
    saveSettings() {
      db.collection("settings")
        .where("id", "==", "settings")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref
              .update({
                title: this.title,
                logo: this.logo,
                displayName: this.displayName,
                working_hour: {
                  weekdays: this.working_hour.weekdays,
                  weekend: this.working_hour.weekend,
                },
                contact: {
                  name: this.contact.name,
                  phone: this.contact.phone,
                  email: this.contact.email,
                  zalo: this.contact.zalo,
                  facebook: this.contact.facebook,
                  youtube: this.contact.youtube,
                  fanpage: this.contact.fanpage,
                  tiki: this.contact.tiki,
                  shopee: this.contact.shopee,
                  lazada: this.contact.lazada,
                  dealshaker: this.contact.dealshaker,
                  website: this.contact.website,
                },
                numberHottestProducts: this.numberHottestProducts,
                about: this.about,
              })
              .then(() => {
                this.$router.push("/settings");
              });
          });
        });
    },
    addMoreAbout() {
      this.about.push({
        keyword: "",
        description: "",
      });
    },
    deleteAboutItem(itemIndex) {
      this.about.splice(itemIndex, 1);
    },
  },
};
</script>

<style lang="scss">
label {
  font-weight: 700;
}
</style>