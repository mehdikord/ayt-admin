<script>
import Global_validation_errors from "@/components/globals/Global_Validation_Errors.vue";
import Template_Title from "@/components/menu/Template_Title.vue";
import {Store_Users} from "@/stores/users/users.js";

export default {
  name: "Users_Create",
  components: {Template_Title, Global_validation_errors},
  data(){
    return {
      loading : false,
      errors:[],
      items : {
        name : null,
        phone : null,
        email : null,
        password: null
      },

    }
  },
  methods : {
    Create_Item(){
      this.loading = true;
      Store_Users().Create(this.items).then(res=>{
        this.loading = false;
        this.Methods_Notify_Create();
        this.$router.push({name:'users_index'});
      }).catch(error=>{
        if(error.response.status === 422){
        this.Methods_Validation_Notify()
        this.errors=error.response.data
        }
        this.loading=false;
      })

    },

  }
}
</script>

<template>
  <q-separator/>
  <q-card class="q-mt-lg" flat>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'name')" v-model="items.name" dense outlined type="text" label="نام کامل">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'name')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'phone')" v-model="items.phone" dense outlined type="number" label="شماره تماس">
            <template v-slot:error>
              <global_validation_errors :error="this.Methods_Validation_Errors(errors,'phone')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'email')" v-model="items.email" dense outlined type="email" label="ایمیل">
            <global_validation_errors :error="this.Methods_Validation_Errors(errors,'email')"/>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'password')" v-model="items.password" dense outlined type="password" label="رمز عبور">
            <template v-slot:error>
              <global_validation_errors :error="this.Methods_Validation_Errors(errors,'password')"/>
            </template>
          </q-input>
        </div>
        </div>
        <div class="q-pa-sm">
          <q-btn color="light-green-7" label="افزودن آیتم جدید"  icon="mdi-plus" @click="Create_Item" />
        </div>

    </q-card-section>
  </q-card>

</template>

<style scoped>

</style>