import template from './pagina-dois-component.html';

export default class PaginaDoisComponent {
    constructor(container) {
        this.container = container;
    }

    render() {
        this.container.innerHTML = template();
    }
}