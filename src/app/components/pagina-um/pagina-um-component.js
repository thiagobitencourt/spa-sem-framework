import template from './pagina-um-component.html';

export default class PaginaUmComponent {
    constructor(container) {
        this.container = container;
    }

    render() {
        this.container.innerHTML = template({ date: new Date() });
    }
}