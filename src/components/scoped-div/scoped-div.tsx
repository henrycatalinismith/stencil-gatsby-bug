import { Component, h, Host } from "@stencil/core"

@Component({
  tag: 'scoped-div',
  scoped: true,
  shadow: false,
})
export class ScopedDiv {
  render() {
    return (
      <Host><div>scoped div</div></Host>
    )
  }
}
