import Blog_Create from "@/views/blog/Blog_Create.vue";
import Blog_Edit from "@/views/blog/Blog_Edit.vue";
import Blog_Index from "@/views/blog/Blog_Index.vue";
export const route_blog = [
    {
        path: "/blog",
        name : 'blog_index',
        component : Blog_Index,
        meta : {
            title : 'مقاله',
            subtitle : 'لیست مقالات'
        }
    },
    {
        path: "/blog/create",
        name : 'blog_create',
        component : Blog_Create,
        meta : {
            title : 'مقاله',
            subtitle : 'ایجاد مقاله'
        }

    },
    {
        path: "/blog/edit/:id",
        name : 'blog_edit',
        component : Blog_Edit,
        meta : {
            title : 'مقاله',
            subtitle : 'ویرایش مقاله'
        }
    }
]
export default route_blog