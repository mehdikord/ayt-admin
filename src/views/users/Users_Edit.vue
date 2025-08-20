<script>
import Global_validation_errors from "@/components/globals/Global_Validation_Errors.vue";

export default {
  name: "Users_Edit",
  components: {Global_validation_errors},
  data(){
    return {
      loading:true,
      edit_loading:false,
      errors : [],
      items : {
        name : null,
        phone : null,
        email : null,
        password: null
      }

    }
  },
  methods:{
    Get_Item(){
      this.Store_Users(this.$route.params.id).then(response=>{
        this.items = response.data.result
        this.loading = false;
      }).catch(error=>{
        this.Methods_Notify_Error_NotFound();
      })

    },
    Edit_Item(){
      this.edit_loading = true;
      this.Store_Users().Edit(this.items).then(response=>{
        this.loading = false;
        this.Methods_Notify_Updates()
      }).catch(error=>{
        if(error.response.status===422){
          this.Methods_Validation_Notify()
          this.errors=error.response.data

        }
      })

    }
  }


}
</script>

<template>
  <q-card flat>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input  :error="this.Methods_Validation_Check(errors,'name')" v-model="items.name" dense outlined type="text" label="نام کامل">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'name')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'phone')" v-model="items.phone" dense outlined type="number" label="شماره تماس">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'phone')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input  :error="this.Methods_Validation_Check(errors,'email')" v-model="items.email" dense outlined type="email" label="ایمیل">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'email')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'password')" v-model="items.password" dense outlined type="password" label="رمز عبور">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'password')" />
            </template>
          </q-input>
        </div>
      </div>
      <div class="q-pa-sm">
        <q-btn color="light-green-7" label="ویرایش آیتم" icon="mdi-pencil" @click="Edit_Item"  />
      </div>

    </q-card-section>
  </q-card>

</template>

<style scoped>

</style>