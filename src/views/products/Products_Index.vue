<script>
export default {
  name: "Products_Index",
  data () {
    return {
      columns,
      rows,
      price_dialogs:[],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 10
        // rowsNumber: xx if getting data from a server
      },
    }
  }

}
const columns = [
  {
    name: 'desc',
    required: true,
    label: 'ID',
    align: 'left',
    field: row => row.name,
    sortable: true
  },
  { name: 'product_name', align: 'left', label: 'نام محصول', field: 'product_name', sortable: true },
  { name: 'price',align: 'left', label: 'قیمت دهی', field: 'price', sortable: true },
  { name: 'tools',align: 'left', label: 'عملیات', field: 'tools' },
]

const rows = [
  {
    name: '1',
    product_name: 'قهوه',
    price: 6.0,
    tools: 24,
  },
  {
    name: '2',
    product_name: 'نسکافه',
    price: 6.0,
    tools: 24,
  },
  {
    name: '3',
    product_name: 'نوشیدنی',
    price: 6.0,
    tools: 24,
  },
  {
    name: '4',
    product_name: 'شربت',
    price: 6.0,
    tools: 24,
  }

]


</script>

<template>
 <q-card flat>
   <q-card-section>
     <div >
       <q-table
           flat bordered
           title="لیست محصول"
           :rows="rows"
           :columns="columns"
           row-key="name"
           :pagination="initialPagination"
       >
         <template v-slot:body-cell-price="props">
           <q-td :props="props">
              <q-btn color="indigo-10" rounded push @click="price_dialogs[props.row.name]=true">مشاهده و ویرایش</q-btn>
           </q-td>
         </template>
         <template v-slot:body-cell-tools="props">
          <q-td :props="props">
            <q-btn :to="{name : 'products_edit',params:{id:props.row.id}}" rounded size="9px" title="ویرایش آیتم" color="light-blue-10" icon="mdi-pencil">

            </q-btn>

          </q-td>

         </template>
       </q-table>
     </div>


   </q-card-section>
 </q-card>

</template>

<style scoped>

</style>