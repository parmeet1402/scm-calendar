import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'vue-content-chip',
  styleUrl: 'vue-content-chip.css',
  shadow: true,
})
export class VueContentChip {
  @Prop() data: any;

  render() {
    return (
      <scm-content-chip>
        <span slot="time">{this.data.time}</span>
        <p slot="description">{this.data.description}</p>
        <img src={this.data.images[0]} alt={this.data.description} slot="img" />
      </scm-content-chip>
    );
  }
}
