<script>
import Global_validation_errors from "@/components/globals/Global_Validation_Errors.vue";

export default {
  name: "Options_Edit",
  components: {Global_validation_errors},
  data(){
    return {
      loading : true,
      edit_loading : false,
      errors:[],
      items:{
        name : null,
        description : null
      }
    }
  },
  methods:{
    Get_Item(){
      this.Options_Store().Show(this.$route.params.id).then(response=>{
        this.items=response.data.result
        this.loading=false;
      }).catch(error=>{
        this.Methods_Notify_Error_NotFound()
      })

    },
    Edit_Item(){
      this.edit_loading = true;
      this.Options_Store().Edit(this.items).then(response=>{
        this.edit_loading = false;
        this.Methods_Notify_Updates();
      }).catch(error=>{
        this.Methods_Notify_Error_NotFound()
        this.errors=error.response.data;
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
          <q-input :error="this.Methods_Validation_Check(errors,'description')" outlined v-model="items.description"  type="textarea" rows="4" label="توضیحات">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'description')" />
            </template>
          </q-input>
        </div>

      </div>
      <div class="q-pa-sm">
        <q-btn color="light-green-7" label="ویرایش آیتم"  :loading="loading" icon="mdi-pencil" @click="Edit_Item"  />
      </div>

    </q-card-section>
  </q-card>

</template>

<style scoped>

</style>