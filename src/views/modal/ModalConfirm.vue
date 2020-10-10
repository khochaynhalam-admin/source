<template>
  <div id="modal-confirm">
    <CModal color="warning" :show.sync="warningModal">
      {{ message }}
      {{ confirmModal }}
    </CModal>
  </div>
</template>

<script>
export default {
  name: "Modals",
  props: { warningModal: Boolean, message: String, title: String },
  data() {
    return {
      confirmModal: JSON.parse(this.warningModal),
    };
  },
};
</script>
