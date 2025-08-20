<script >
import Global_validation_errors from "@/components/globals/Global_Validation_Errors.vue";

export default {
  name: "Discount_Create",
  components: {Global_validation_errors},
  data(){
    return {
      errors : [],
      users : [],
      items : {
        name : null,
        discount_percent : null,
        user_id : null
      }
    }
  }
}
</script>

<template>
  <q-card class="q-mt-lg" flat>
    <q-card-section>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'name')" v-model="items.name" dense outlined type="text" label="عنوان تخفیف">
            <template v-slot:error>
              <global_validation_errors :errors="this.Methods_Validation_Errors(errors,'name')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 q-pa-sm">
          <q-input :error="this.Methods_Validation_Check(errors,'discount_percent')" v-model="items.discount_percent" dense outlined type="number" label="درصد تخفیف">
            <template v-slot:error>
              <global_validation_errors :error="this.Methods_Validation_Errors(errors,'discount_percent')" />
            </template>
          </q-input>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 q-pa-sm">
          <q-select
              outlined
              transition-show="flip-up"
              transition-hide="flip-down"
              v-model="items.user_id"
              label="انتخاب کاربر شامل تخفیف"
              :options="users"
              @filter=""
              emit-value
              map-options
              use-input
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-red">
                  گزینه ای یافت نشد
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section>
                  <q-item-label>{{ scope.opt.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:error>

            </template>
          </q-select>

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