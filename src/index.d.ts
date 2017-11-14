export class UIEventObserver {
    constructor();

    hasSubscriber(targetElement: any, domEventName: any): any;

    subscribe(target: any, eventName: any, handler: any): any;

    subscribeOnce(target: any, eventName: any, handler: any): any;

    unsubscribe(target: any, eventName: any, handler: any): void;

    unsubscribeAll(): void;

}

declare module default_ {
  export function hasSubscriber(targetElement: any, domEventName: any): any;

  export function subscribe(target: any, eventName: any, handler: any): any;

  export function subscribeOnce(target: any, eventName: any, handler: any): any;

  export function unsubscribe(target: any, eventName: any, handler: any): void;

  export function unsubscribeAll(): void;
}

export default default_;
