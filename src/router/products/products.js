import Products_Create from "@/views/products/Products_Create.vue";
import Products_Edit from "@/views/products/Products_Edit.vue";
import Products_Index from "@/views/products/Products_Index.vue";
const route_products = [
    {
        path: "/products/create",
        component : Products_Create,
        name : "products_create",
        meta : {
            title :'محصولات',
            subtitle : 'ایجاد محصول جدید'
        }
    },
    {
        path: "/products/edit/:id",
        component : Products_Edit,
        name : "products_edit",
        meta : {
            title : 'محصولات',
            subtitle : 'ویرایش محصول'
        }
    },
    {
        path: "/products",
        component : Products_Index,
        name : "products_index",
        meta : {
            title : 'محصولات',
            subtitle: 'لیست محصولات'
        }
    }
]
export default route_products;