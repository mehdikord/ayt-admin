<script>
export default {
  name: "Users_Edit",
  data(){
    return {
      items : {
        name : null,
        phone : null,
        email : null,
        password: null
      }

    }
  }

}
</script>

<template>
  <div class="q-mt-md q-ml-md">
    <strong>مدیران</strong>
    <p>ویرایش مدیر</p>
  </div>
  <q-card class="q-mt-lg">
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model="items.name" dense outlined type="text" label="نام کامل">
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model="items.phone" dense outlined type="number" label="شماره تماس"></q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model="items.email" dense outlined type="email" label="ایمیل"></q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input v-model="items.password" dense outlined type="password" label="رمز عبور"></q-input>
        </div>
      </div>
      <div class="q-pa-sm">
        <q-btn style="background: #FF0080; color: white" label="ویرایش مدیر" icon="mdi-pencil" glossy />      </div>

    </q-card-section>
  </q-card>

</template>

<style scoped>

</style>