<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list  class="rounded-borders">
      <q-expansion-item
          icon="mdi-monitor-dashboard"
          label="داشبورد"
          hide-expand-icon>
        </q-expansion-item>


      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-account-group"  label="کاربران">
        <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-account-group-outline" label="مدیران">

          <q-expansion-item label="ایجاد مدیران" :content-inset-level="0.5"  hide-expand-icon :to="{name : 'users_create'}">

          </q-expansion-item>

          <q-expansion-item label="لیست مدیران" :content-inset-level="0.5" hide-expand-icon :to="{name : 'users_index'}">
          </q-expansion-item>

        </q-expansion-item>

        <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-account-heart" label="مشتریان">

          <q-expansion-item label="ایجاد مشتریان" :content-inset-level="0.5" hide-expand-icon :to="{ name : 'customers_create'}">

          </q-expansion-item>

          <q-expansion-item label="لیست مشتریان" :content-inset-level="0.5" hide-expand-icon :to="{name : 'customers_index'}">
          </q-expansion-item>

        </q-expansion-item>


      </q-expansion-item>





    </q-list>
  </div>
</template>
<script>

</script>

<style scoped>

</style>
