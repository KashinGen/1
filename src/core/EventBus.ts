export class EventBus {
    private readonly listeners: Record<string, Array<(...args: unknown[]) => void>>;
  
    constructor() {
        this.listeners = {};
    }
  
    on(event: string, callback: (...args: unknown[]) => void) {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(callback);
        // console.log(this.listeners)
    }
  
    off(event: string, callback: () => void) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event] = this.listeners[event].filter(
            (listener) => listener !== callback,
        );
    }
  
    emit(event: string, ...args: unknown[]) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`);
        }
        this.listeners[event].forEach((listener) => {
            listener(...args);
        });
    }
}
