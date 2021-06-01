import Home from "../containers/Home/Home";
import pageNotFound from "../containers/page-not-found/page-not-found";
import Products from "../containers/Products/Products";

export const routes = [
    {exact: true, path: '/', component: Home},
    {exact: true, path: '/products', component: Products},
    {exact: true, path: '*', component: pageNotFound}
]