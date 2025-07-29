import Customers_Create from "@/views/customers/Customers_Create.vue";
import Customers_Edit from "@/views/customers/Customers_Edit.vue";
import Customers_Index from "@/views/customers/Customers_Index.vue";

const route_customers = [

    {
        path: "/customers/create",
        name: "customers_create",
        component : Customers_Create,
    },
    {
        path: "/customers/edit/:id",
        name: "customers_edit",
        component : Customers_Edit,
    },
    {
        path : "/customers",
        name : "customers_index",
        component : Customers_Index,
    }







]
export default route_customers