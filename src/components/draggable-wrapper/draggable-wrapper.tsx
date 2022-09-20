import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { Calendar, EventSourceInput, Identity } from '@fullcalendar/core';
import { Draggable } from '@fullcalendar/interaction';


@Component({
  tag: 'draggable-wrapper',
  shadow: true,
})
export class DraggableWrapper {
  calendarWrapperEl!: any;
  draggableWrapperEl!: any;

  @Prop() calendar;

  @Watch('calendar')
  LoadDraggable() {
    if (this.calendar) {
    console.log(this.calendar)

    // this.calendar
      // new Draggable(this.draggableWrapperEl);
    }
  }

  render() {
    return (
      <Host>
        <div ref={el => (this.calendarWrapperEl = el)}>
          <p ref={el => (this.draggableWrapperEl = el)}>Drag Me</p>
        </div>
      </Host>
    );
  }
}
