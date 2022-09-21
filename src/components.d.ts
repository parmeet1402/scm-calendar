/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CalendarWrapper {
        "handleDrop": (data: any) => void;
        "init": (events: any, cb: any, optionsOverride: any) => Promise<void>;
        "updateEvents": (events: any) => Promise<void>;
    }
    interface DraggableWrapper {
        "data"?: any;
        "getData": () => Promise<any>;
    }
    interface MyComponent {
        "addEvent": (event: any) => Promise<void>;
        "events": any[];
    }
    interface RootComponent {
    }
    interface ScmContentChip {
    }
    interface VueContentChip {
        "data": any;
    }
}
declare global {
    interface HTMLCalendarWrapperElement extends Components.CalendarWrapper, HTMLStencilElement {
    }
    var HTMLCalendarWrapperElement: {
        prototype: HTMLCalendarWrapperElement;
        new (): HTMLCalendarWrapperElement;
    };
    interface HTMLDraggableWrapperElement extends Components.DraggableWrapper, HTMLStencilElement {
    }
    var HTMLDraggableWrapperElement: {
        prototype: HTMLDraggableWrapperElement;
        new (): HTMLDraggableWrapperElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRootComponentElement extends Components.RootComponent, HTMLStencilElement {
    }
    var HTMLRootComponentElement: {
        prototype: HTMLRootComponentElement;
        new (): HTMLRootComponentElement;
    };
    interface HTMLScmContentChipElement extends Components.ScmContentChip, HTMLStencilElement {
    }
    var HTMLScmContentChipElement: {
        prototype: HTMLScmContentChipElement;
        new (): HTMLScmContentChipElement;
    };
    interface HTMLVueContentChipElement extends Components.VueContentChip, HTMLStencilElement {
    }
    var HTMLVueContentChipElement: {
        prototype: HTMLVueContentChipElement;
        new (): HTMLVueContentChipElement;
    };
    interface HTMLElementTagNameMap {
        "calendar-wrapper": HTMLCalendarWrapperElement;
        "draggable-wrapper": HTMLDraggableWrapperElement;
        "my-component": HTMLMyComponentElement;
        "root-component": HTMLRootComponentElement;
        "scm-content-chip": HTMLScmContentChipElement;
        "vue-content-chip": HTMLVueContentChipElement;
    }
}
declare namespace LocalJSX {
    interface CalendarWrapper {
        "handleDrop"?: (data: any) => void;
    }
    interface DraggableWrapper {
        "data"?: any;
    }
    interface MyComponent {
        "events"?: any[];
    }
    interface RootComponent {
    }
    interface ScmContentChip {
    }
    interface VueContentChip {
        "data"?: any;
    }
    interface IntrinsicElements {
        "calendar-wrapper": CalendarWrapper;
        "draggable-wrapper": DraggableWrapper;
        "my-component": MyComponent;
        "root-component": RootComponent;
        "scm-content-chip": ScmContentChip;
        "vue-content-chip": VueContentChip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "calendar-wrapper": LocalJSX.CalendarWrapper & JSXBase.HTMLAttributes<HTMLCalendarWrapperElement>;
            "draggable-wrapper": LocalJSX.DraggableWrapper & JSXBase.HTMLAttributes<HTMLDraggableWrapperElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "root-component": LocalJSX.RootComponent & JSXBase.HTMLAttributes<HTMLRootComponentElement>;
            "scm-content-chip": LocalJSX.ScmContentChip & JSXBase.HTMLAttributes<HTMLScmContentChipElement>;
            "vue-content-chip": LocalJSX.VueContentChip & JSXBase.HTMLAttributes<HTMLVueContentChipElement>;
        }
    }
}
