import { Component, h, Host } from "@stencil/core"

@Component({
  tag: 'default-div',
  scoped: false,
  shadow: false,
})
export class DefaultDiv {
  render() {
    return (
      <Host><div>default div</div></Host>
    )
  }
}
