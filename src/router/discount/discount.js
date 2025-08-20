import Discount_Create from "@/views/discount/Discount_Create.vue";
import Discount_Index from "@/views/discount/Discount_Index.vue";
import Discount_Edit from "@/views/discount/Discount_Edit.vue";
import router from "@/router/index.js";
const route_discount = [
    {
        path: "/discount/create",
        component: Discount_Create,
        name : "discount_create",
        meta : {
            title : 'تخفیفات',
            subtitle : 'ایجاد تخفیف'
        }

    },
    {
        path: "/discount/",
        component: Discount_Index,
        name : "discount_index",
        meta : {
            title : 'تخفیفات',
            subtitle : 'لیست تخفیفات'
        }
    },
    {
        path : "/discount/edit/:id",
        component: Discount_Edit,
        name : "discount_edit",
        meta : {
            title : 'تخفیفات',
            subtitle : 'ویرایش تخفیفات'
        }
    }
]
export default route_discount