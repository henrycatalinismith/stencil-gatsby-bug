import { Component, h, Host } from "@stencil/core"

@Component({
  tag: 'example-div',
  scoped: true,
  shadow: false,
})
export class ExampleDiv {
  render() {
    return (
      <Host><div>example div</div></Host>
    )
  }
}
