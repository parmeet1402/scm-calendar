import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'scm-content-chip',
  styleUrl: 'scm-content-chip.css',
  shadow: true,
})
export class ScmContentChip {
  // eventId should be accepted as prop
  // data should be passed

  render() {
    return (
      <div>
        <b style={{ fontSize: '12px', color: 'green' }}>
          <span>
            time: <slot name="time" />
          </span>
          <span>
            text: <slot name="text" />
          </span>
          <slot></slot>
        </b>
      </div>
    );
  }
}
