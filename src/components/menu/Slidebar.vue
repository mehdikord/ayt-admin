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
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-cart" label="محصولات">

        <q-expansion-item label="ایجاد محصولات" :content-inset-level="0.5"  hide-expand-icon :to="{name : 'products_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست محصولات" :content-inset-level="0.5" hide-expand-icon :to="{name : 'products_index'}">
        </q-expansion-item>

      </q-expansion-item>
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-clipboard-text-multiple" label="دسته بندی محصولات">

        <q-expansion-item label="ایجاد دسته بندی" :content-inset-level="0.5"  hide-expand-icon :to="{name : 'categories_products_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست دسته بندی" :content-inset-level="0.5" hide-expand-icon :to="{name : 'categories_products_index'}">
        </q-expansion-item>

      </q-expansion-item>
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-view-grid-plus-outline" label="ویژگی ها">

        <q-expansion-item label="ایجاد ویژگی" :content-inset-level="0.5"  hide-expand-icon  :to="{name : 'options_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست ویژگی" :content-inset-level="0.5" hide-expand-icon :to="{name : 'options_index'}">
        </q-expansion-item>

      </q-expansion-item>
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-cart-percent" label="تخفیفات">

        <q-expansion-item label="ایجاد تخفیف" :content-inset-level="0.5"  hide-expand-icon  :to="{name : 'discount_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست تخفیف" :content-inset-level="0.5" hide-expand-icon :to="{name : 'discount_index'}">
        </q-expansion-item>

      </q-expansion-item>
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-post" label="مقالات">

        <q-expansion-item label="ایجاد مقاله" :content-inset-level="0.5"  hide-expand-icon  :to="{name : 'blog_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست مقاله" :content-inset-level="0.5" hide-expand-icon :to="{name : 'blog_index'}">
        </q-expansion-item>

      </q-expansion-item>
      <q-expansion-item expand-separator :content-inset-level="0.5" icon="mdi-pencil-box-multiple" label="دسته بندی مقالات">

        <q-expansion-item label="ایجاد دسته بندی مقاله" :content-inset-level="0.5"  hide-expand-icon  :to="{name : 'blog_categories_create'}">

        </q-expansion-item>

        <q-expansion-item label="لیست دسته بندی مقاله" :content-inset-level="0.5" hide-expand-icon :to="{name : 'blog_categories_index'}">
        </q-expansion-item>

      </q-expansion-item>







    </q-list>
  </div>
</template>
<script>

</script>

<style scoped>


</style>
