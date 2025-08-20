import Categories_Products_Create from "@/views/categories_products/Categories_Products_Create.vue";
import Categories_Products_Edit from "@/views/categories_products/Categories_Products_Edit.vue";
import Categories_Products_Index from "@/views/categories_products/Categories_Products_Index.vue";
const route_categories_products = [
    {
   path : "/products/categories/create",
        component : Categories_Products_Create,
        name : "categories_products_create",
        meta : {
            title : 'دسته بندی محصولات',
            subtitle : 'ایجاد دسته بندی'
        }

    },
    {
        path : "/products/categories/edit/:id",
        component : Categories_Products_Edit,
        name : "categories_products_edit",
        meta : {
            title : 'دسته بندی محصولات',
            subtitle : 'ویرایش دسته بندی'
        }
    },
    {
        path : "/products/categories",
        component : Categories_Products_Index,
        name : "categories_products_index",
        meta : {
            title : 'دسته بندی محصولات',
            subtitle : 'لیست دسته بندی'
        }
    }


]
export default route_categories_products