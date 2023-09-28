import { v4 as uuidv4 } from 'uuid';
import Handlebars from 'handlebars';

import { EventBus } from './EventBus';

type Props = Record<string, unknown>;

class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render',
    };

    public id = uuidv4();

    protected props: Props;

    protected refs: Record<string, Block | HTMLElement> = {};

    public children: Record<string, Block>;

    private eventBus: () => EventBus;

    protected _element: HTMLElement | null = null;

    protected _meta: { props: Props };

    /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
    constructor(propsWithChildren: Props = {}) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(propsWithChildren);

        this._meta = {
            props,
        };

        this.children = children;
        this.props = this._makePropsProxy(props, this);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: Props) {
        const props: Props = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };
        Object.keys(events).forEach((eventName) => {
            this._element?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this.props as {
      events: Record<string, () => void>;
    };

        Object.keys(events).forEach((eventName) => {
            this._element?.removeEventListener(eventName, events[eventName]);
        });
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach((child) =>
            child.dispatchComponentDidMount(),
        );
    }

    private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: unknown, newProps: unknown) {
        return JSON.stringify(oldProps) === JSON.stringify(newProps) || true;
    }

    setProps = (nextProps: Props) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.compile(this.render(), this.props);
        this._removeEvents();
        const newElement = fragment.firstElementChild as HTMLElement;
        if (this._element) {
            this._element.replaceWith(newElement);
        }
        this._element = newElement;
        this._addEvents();
    }

    protected compile(template: string, context: unknown)  {
        const { children, html, refs } = compileTemplate(template, context);
        const htmlTemplateElement = document.createElement('template');
        htmlTemplateElement.innerHTML = html;

        const fragment = htmlTemplateElement.content;
        this.refs = Array.from(fragment.querySelectorAll('[ref]'))
            .reduce((list, element) => {
                const key = element.getAttribute('ref') as string;
                list[key] = element as HTMLElement;
                element.removeAttribute('ref');
                return list;
            }, refs);

        children?.forEach(({embed}: {embed(node: DocumentFragment): void}) => {
            embed(htmlTemplateElement.content);
        });
        return htmlTemplateElement.content;
    }

    protected render(): string {
        return '';
    }

    public getTemplate(): string {
        return '';
    }

    getContent() {
        return this._element;
    }

    _makePropsProxy(props: Props, self: Block) {

        return new Proxy(props, {
            get(target, prop: string) {
                const value = target[prop];
                return typeof value === 'function' ? value.bind(target) : value;
            },
            set(target, prop: string, value) {
                const oldTarget = { ...target };
                target[prop] = value;
                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error('Нет доступа');
            },
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
    this.getContent()!.style.display = 'block';
    }

    hide() {
    this.getContent()!.style.display = 'none';
    }
}

export default Block;

export const compileTemplate = (template: string, context: unknown) => {
    const data = {
        ...(context as object), 
        __children: [] as Array<{component: unknown, embed(node: DocumentFragment): void}>,
        __refs: {} as Record<string, Block | HTMLElement>,
    };
    const html = Handlebars.compile(template)(data);
    return { html, children: data.__children, refs: data.__refs };
};
