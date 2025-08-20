import Options_Create from "@/views/options/Options_Create.vue";
import Options_Edit from "@/views/options/Options_Edit.vue";
import Options_Index from "@/views/options/Options_Index.vue";
import router from "@/router/index.js";
const route_options = [
    {
        path: "/options/create",
        component: Options_Create,
        name : "options_create",
        meta : {
            title : 'ویژگی ها',
            subtitle : 'ایجاد ویژگی جدید'
        }
    },
    {
        path : "/options",
        component : Options_Index,
        name : "options_index",
        meta : {
            title : 'ویژگی ها',
            subtitle : 'لیست ویژگی ها'
        }
    },
    {
        path : "/options/edit/:id",
        component : Options_Edit,
        name : "options_edit",
        meta : {
            title : 'ویژگی ها',
            subtitle : 'ویرایش ویژگی '
        }
    }
]
export default route_options