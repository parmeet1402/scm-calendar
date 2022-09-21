import { Component, h } from '@stencil/core';

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
        <b style={{ fontSize: '16px', color: 'green' }}>
          {/* <span>
            time:<slot name="time" />
          </span>
          &nbsp; */}
          <span>
            <slot name="text" />
          </span>
          <slot></slot>
        </b>
      </div>
    );
  }
}
