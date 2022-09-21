import { Component, h } from '@stencil/core';

@Component({
  tag: 'scm-content-chip',
  styleUrl: 'scm-content-chip.css',
  shadow: true,
})
export class ScmContentChip {
  render() {
    return (
      <div style={{ backgroundColor: 'cyan', width: '22px' }}>
        <div class="scm-content-chip__header">
          <div class="scm-content-chip__header__time">
            <slot name="time" />
          </div>
        </div>
        <div class="scm-content-chip__content">
          <div class="scm-content-chip__content__description">
            <slot name="description" />
          </div>
        </div>
      </div>
    );
  }
}
