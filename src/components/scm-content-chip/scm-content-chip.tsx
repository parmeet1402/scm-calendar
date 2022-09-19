import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'scm-content-chip',
  styleUrl: 'scm-content-chip.css',
  shadow: true,
})
export class ScmContentChip {
  // INputs
  @Prop() type: string = 'chip';
  @Prop() dateTime: string = '';

  // accepts slot-name
  // accepts date-time

  // Output
  // scrape out date
  // scrape out time
  // pass down the slot="" and the date-time

  componentDidLoad() {
    if (this.type === 'chip') {
    }
  }

  render() {
    console.log({ type: this.type, dateTime: this.dateTime });
    const date = '2022-09-15';
    const chipName = `chip-${date}`;
    console.log({ chipName });
    return <Host>{this.type === 'chip' ? <div slot={chipName}>{/* <slot></slot> */}</div> : null}</Host>;
  }
}
