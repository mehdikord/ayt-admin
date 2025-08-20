<script>

import {Categories_Products_Store} from "@/stores/categories_products/categories_products.js";
import Global_validation_errors from "@/components/globals/Global_Validation_Errors.vue";

export default {
  name: "Categories_Products_Create",
  components: {Global_validation_errors},
  data(){
    return {
      loading: false,
      errors: [],
      items : {
        name : null,
        image : null
      }
    }
  },
  methods: {
    Create_Item(){
      this.loading = true;
      this.Categories_Products_Store().Create(this.items).then(res=>{
        this.loading=true;
        this.Methods_Notify_Create()
        this.$router.push({name:'categories_products_index'})
      }).catch(error=>{
        if(error.response.status === 422){
          this.Methods_Validation_Notify();
          this.errors=error.response.data

        }
      })
    }
  }
}
</script>

<template>
  <q-card class="q-mt-lg" flat>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'name')" v-model="items.name" dense outlined type="text" label="نام کامل">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'name')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-pa-sm">
          <q-file
              v-model="items.image"
              label="انتخاب فایل"
              multiple
              use-chips
              dense
              outlined
          />
        </div>

      </div>
      <div class="q-pa-sm">
        <q-btn color="light-green-7" label="افزودن آیتم جدید"  :loading="loading" icon="mdi-plus" @click="Create_Item"  />
      </div>

    </q-card-section>
  </q-card>


</template>

<style scoped>

</style>