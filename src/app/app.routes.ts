import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "products",
        pathMatch: "full"
    },

    {
        path: "products",
        loadComponent: () => import("./views/pages/home-page/home-page.component").then((c) => c.HomePageComponent)
    },

    {
        path: "products/:id",
        loadComponent: () => import("./views/pages/show-product/show-product.component").then((c) => c.ShowProductComponent)
    },

    {
        path: "category",
        loadComponent: () => import("./views/pages/categories/categories.component").then((c) => c.CategoriesComponent)
    },

    {
        path: "order",
        loadComponent: () => import("./views/pages/order/order.component").then((c) => c.OrderComponent)
    },
    {
        path: "cart",
        loadComponent: () => import("./views/pages/cart/cart.component").then((c) => c.CartComponent)
    },
    {
        path: "wishlist",
        loadComponent: () => import("./views/pages/wishlist/wishlist.component").then((c) => c.WishlistComponent)
    },
    {
        path: "profile",
        loadComponent: () => import("./views/pages/account/account.component").then((c) => c.AccountComponent)
    },
];
