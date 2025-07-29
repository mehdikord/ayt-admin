import Users_Create from "@/views/users/Users_Create.vue";
import Users_Edit from "@/views/users/Users_Edit.vue";
import Users_Index from "@/views/users/Users_Index.vue";
import Users_Trash from "@/views/users/Users_Trash.vue";
const route_user = [

    {
        path : "/users",
        component : Users_Index,
        name : "users_index",
        meta : {
            title : 'مدیران',
            subtitle : 'لیست مدیران'
        },

    },
    {
        path : "/users/create",
        component : Users_Create,
        name : "users_create",
        meta : {
            title : 'مدیران',
            subtitle : 'ایجاد مدیر'
        },
    },
    {
        path : "/users/edit/:id",
        component : Users_Edit,
        name : "users_edit",
        meta : {
            title : 'مدیران',
            subtitle : 'ویرایش مدیر'
        },
    },
    {
        path : "/users/trash",
        component : Users_Trash,
        name : "users_trash"
    }




]
export default route_user