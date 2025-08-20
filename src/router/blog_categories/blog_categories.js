import Blog_Categories_Create from "@/views/blog_categories/Blog_Categories_Create.vue";
import Blog_Categories_Index from "@/views/blog_categories/Blog_Categories_Index.vue";
import Blog_Categories_Edit from "@/views/blog_categories/Blog_Categories_Edit.vue";
export const route_blog_categories = [
    {
        path : "/blog/categories",
        component : Blog_Categories_Index,
        name : "blog_categories_index",
        meta : {
            title : 'دسته بندی مقالات',
            subtitle : 'لیست دسته بندی'
        }
    },
    {
        path : "/blog/categories/create",
        component : Blog_Categories_Create,
        name : "blog_categories_create",
        meta : {
            title : 'دسته بندی مقالات',
            subtitle : 'ایجاد دسته بندی'
        }
    },
    {
        path : "/blog/categories/edit/:id",
        component : Blog_Categories_Edit,
        name : "blog_categories_edit",
        meta : {
            title : 'دسته بندی مقالات',
            subtitle : 'ویرایش دسته بندی'
        }
    }
]
export default route_blog_categories