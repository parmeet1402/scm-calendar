import { Component, Host, h } from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import { Draggable } from '@fullcalendar/interaction';

@Component({
  tag: 'draggable-wrapper',
  shadow: false,
})
export class DraggableWrapper {
  draggableWrapperEl!: any;

  constructor() {
    const preventTreeShaking = Calendar.name;
    console.log(preventTreeShaking);
  }

  componentDidLoad() {
    new Draggable(this.draggableWrapperEl, {
      eventData: function (eventEl) {
        console.log(eventEl);
        return {};
      },
    });
  }

  render() {
    return (
      <Host>
        <div class="draggable" ref={el => (this.draggableWrapperEl = el)}>
          <slot />
        </div>
      </Host>
    );
  }
}

/* Scenario and Edge cases to be coverered
- First Scenario: User dragging and dropping an event from sidebar to the calendar (ADDITION OF AN EVENT INTO THE CALENDAR)
- Second Scenario: User dragging and dropping an event from calendar to the sidebar (REMOVAL OF AN EVENT FROM THE CALENDAR)
- THIRD SCENARIO: User should be able to drag and drop the events from one date to another one
- EDGE CASE 1: What if the user tries to drag the event from the sidebar but doesnt't drop it in any calendar
- Edge Case 2: What if the user tries to drag the event from the calendar but doesn't drop it into the sidebar
- EDGE Case 3: What if the user tries to drag and drop from the sidebar into the past date
- EDGE Case 4: What if the user tries to drag and drop from one current date into the past date
- EDGE Case 5: Do not allow the user to drag and drop the past date events
*/

/* Input Requirements for a draggable wrapper to function
- slot component
- calendar should be initialized be before it 

*/
