import template from './pagina-tres-component.html';

export default class PaginaTresComponent {
    constructor(container) {
        this.container = container;
    }

    render() {
        this.container.innerHTML = template();
    }
}