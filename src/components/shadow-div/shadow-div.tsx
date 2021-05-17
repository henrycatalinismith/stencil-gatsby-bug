import { Component, h, Host } from "@stencil/core"

@Component({
  tag: 'shadow-div',
  scoped: false,
  shadow: true,
})
export class ShadowDiv {
  render() {
    return (
      <Host><div>shadow div</div></Host>
    )
  }
}
