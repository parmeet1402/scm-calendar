import { Component, Prop, h, Element } from '@stencil/core';

// import { format } from '../../utils/utils';
// ----
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// document.addEventListener('DOMContentLoaded', function () {
// var calendarEl = document.getElementById('calendar');
// var calendar = new Calendar(calendarEl, {
// initialView: 'dayGridMonth',
// });
// calendar.render();
// });

// let calendar = new Calendar(document.querySelector('#calendar'), {
//   plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek',
//   },
// });

// calendar.render();

function hasSlot(element: HTMLElement, slotName: string): boolean {
  return element.querySelector<HTMLSlotElement>(`[slot="${slotName}"]`) !== null;
}

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  container!: HTMLDivElement;
  calendarContainerEl!: HTMLDivElement;

  // @Element() private element: HTMLElement;

  componentDidLoad() {
    console.log({ calendarContainerEl: this.calendarContainerEl }); // outputs HTMLElement <my-component ...

    const calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      initialView: 'dayGridMonth',
      initialDate: '2022-08-12',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],

      eventColor: '#f00',
      events: [
        {
          title: 'All Day Event',
          start: '2022-08-01',
          id: '123',
          // RElement: <slot name="event-123" />,
        },
      ],
      eventContent: args => {
        // console.log({ args });
        // console.log({ calend: this.container, parent: this.container.parentNode });
        // const parent = this.container.parentNode;
        // console.log({ parent });
        // const slotElements = parent.querySelector('slot');
        // hasSlot and then look 
        // console.log({ slotElements });
        // console.log({ slotElements });

        // querySelectorAll select all slots inside a wrapper
        // from that we could

        return {
          html: `<slot name="event"/>`,
        };
      },
    });
    calendar.render();
  }

  render() {
    return (
      <div ref={el => (this.container = el as HTMLDivElement)}>
        <div
          ref={el => (this.calendarContainerEl = el as HTMLDivElement)}
          // id="calendar"
          style={{
            height: '1200px',
            width: '1200px',
          }}
        />
      </div>
    );
  }
}
