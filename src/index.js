import RouterService from './app/router-service';
import PaginaUmComponent from './app/components/pagina-um/pagina-um-component';
import PaginaDoisComponent from './app/components/pagina-dois/pagina-dois-component';
import PaginaTresComponent from './app/components/pagina-tres/pagina-tres-component';

new RouterService([
    {
        path: '#/pagina-um',
        component: PaginaUmComponent
    },
    {
        path: '#/pagina-dois',
        component: PaginaDoisComponent
    },
    {
        path: '#/pagina-tres',
        component: PaginaTresComponent
    }
]);