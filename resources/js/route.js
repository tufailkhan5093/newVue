
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Home from './components/Home.vue';
import AddCategory from './components/AddCategory';
import Category from './components/Category';
 
// import router from 'vue-router'; 

// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
export const routes = [
    {
        name: 'signup',
        path: '/signup',
        component: Signup
     
    },
    {
        name: 'home',
        path: '/',
        // component: Home,
        get component() {
            if (localStorage.getItem("access_token")) {
                return Home;
            } else {
                return Login;
            }
        }
       
    },

    {
        name: 'addcategory',
        path: '/addcategory',
        // component: Home,
        get component() {
            if (localStorage.getItem("access_token")) {
                return AddCategory;
            } else {
                return Login;
            }
        }
       
    },

    {
        name: 'category',
        path: '/category',
        // component: Home,
        get component() {
            if (localStorage.getItem("access_token")) {
                return Category;
            } else {
                return Login;
            }
        }
       
    },

    {
        name: 'login',
        path: '/login',
        component: Login
        // get component() {
        //     if (localStorage.getItem("access_token")) {
        //         return Home;
               
        //         // return Home;
        //     } else {
        //         return Login;
        //     }
        // }
       
    },
    // {
    //     name: 'home',
    //     path: '/',
    //     get component() {
    //         if (localStorage.getItem("access_token")) {
    //             return Home;
    //         } else {
    //             return Login;
    //         }
    //     }
       
    // },
    // {
    //     name: 'create',
    //     path: '/create',
    //     get component() {
    //         if (localStorage.getItem("access_token")) {
    //             return CreateProduct;
    //         } else {
    //             return Login;
    //         }
    //     }
    // },
    // {
    //     name: 'allproducts',
    //     path: '/productlist',
    //     get component() {
    //         if (localStorage.getItem("access_token")) {
    //             return AllProduct;
    //         } else {
    //             return Login;
    //         }
    //     }
    // },
    // {
    //     name: 'edit',
    //     path: '/edit/:id',
    //     get component() {
    //         if (localStorage.getItem("access_token")) {
    //             return EditProduct;
    //         } else {
    //             return Login;
    //         }
    //     }
    // },
];