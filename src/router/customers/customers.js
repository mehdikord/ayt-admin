import Customers_Create from "@/views/customers/Customers_Create.vue";
import Customers_Edit from "@/views/customers/Customers_Edit.vue";
import Customers_Index from "@/views/customers/Customers_Index.vue";

const route_customers = [

    {
        path: "/customers/create",
        name: "customers_create",
        component : Customers_Create,
        meta : {
            title : 'مشتریان',
            subtitle : ' ایجاد مشتریان'
        },
    },
    {
        path: "/customers/edit/:id",
        name: "customers_edit",
        component : Customers_Edit,
        meta : {
            title : 'مشتریان',
            subtitle : ' ویرایش مشتریان'
        },
    },
    {
        path : "/customers",
        name : "customers_index",
        component : Customers_Index,
        meta : {
            title : 'مشتریان',
            subtitle : ' لیست مشتریان'
        },
    }







]
export default route_customers