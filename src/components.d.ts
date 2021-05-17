/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ScopedDiv {
    }
    interface ShadowDiv {
    }
}
declare global {
    interface HTMLScopedDivElement extends Components.ScopedDiv, HTMLStencilElement {
    }
    var HTMLScopedDivElement: {
        prototype: HTMLScopedDivElement;
        new (): HTMLScopedDivElement;
    };
    interface HTMLShadowDivElement extends Components.ShadowDiv, HTMLStencilElement {
    }
    var HTMLShadowDivElement: {
        prototype: HTMLShadowDivElement;
        new (): HTMLShadowDivElement;
    };
    interface HTMLElementTagNameMap {
        "scoped-div": HTMLScopedDivElement;
        "shadow-div": HTMLShadowDivElement;
    }
}
declare namespace LocalJSX {
    interface ScopedDiv {
    }
    interface ShadowDiv {
    }
    interface IntrinsicElements {
        "scoped-div": ScopedDiv;
        "shadow-div": ShadowDiv;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "scoped-div": LocalJSX.ScopedDiv & JSXBase.HTMLAttributes<HTMLScopedDivElement>;
            "shadow-div": LocalJSX.ShadowDiv & JSXBase.HTMLAttributes<HTMLShadowDivElement>;
        }
    }
}