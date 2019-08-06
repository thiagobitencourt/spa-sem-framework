export default class RouterService {
    constructor(routes = [], selector = '#root') {
        this.routes = routes;
        this.container = document.querySelector(selector);
        this.initRouter();
    }

    initRouter() {
        window.addEventListener("hashchange", this.handleRouteChange.bind(this), false);
    }

    handleRouteChange({ newURL }) {
        const routePath = `#/${ newURL.split('#/')[1] }`;
        const Component = this.routes.find(route => route.path === routePath).component;
        new Component(this.container).render();
    }
}
