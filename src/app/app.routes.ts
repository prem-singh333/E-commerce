import { Routes } from '@angular/router';
import { authGuard } from './views/component/services/auth.guard';

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
        path: "order", canActivate: [authGuard],
        loadComponent: () => import("./views/pages/order/order.component").then((c) => c.OrderComponent)
    },
    {
        path: "cart", canActivate: [authGuard],
        loadComponent: () => import("./views/pages/cart/cart.component").then((c) => c.CartComponent)
    },
    {
        path: "wishlist", canActivate: [authGuard],
        loadComponent: () => import("./views/pages/wishlist/wishlist.component").then((c) => c.WishlistComponent)
    },
    {
        path: "profile",
        loadComponent: () => import("./views/pages/account/account.component").then((c) => c.AccountComponent)
    },

    {
        path: "searchBar",
        loadComponent: () => import("./views/pages/searchbar/searchbar.component").then((m) => m.SearchbarComponent)
    },
    {
        path: "selling", loadComponent: () => import("./views/pages/add-product/add-product.component").then((m) => m.AddProductComponent)
    },
    {
        path: "sign-up", loadComponent: () => import("./views/pages/signup-form/signup-form.component").then((m) => m.SignupFormComponent)
    },
    {
        path: "login", loadComponent: () => import("./views/pages/login/login.component").then((m) => m.LoginComponent)
    }
];
