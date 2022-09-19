import { Component, Prop, h, Element, State, Method } from '@stencil/core';

// import { format } from '../../utils/utils';
// ----
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dayjs from 'dayjs';

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
  slotEl!: HTMLSlotElement;
  slotContainerEl!: HTMLDivElement;

  calendar = null;

  @Prop() events: any[] = [];

  // @Element() private element: HTMLElement;

  componentDidLoad() {
    console.log({ calendarContainerEl: this.calendarContainerEl }); // outputs HTMLElement <my-component ...
    console.log({ container: this.slotContainerEl, slot: this.slotEl });

    let nodes = null;
    if (this.calendarContainerEl.shadowRoot !== null) {
      nodes = this.calendarContainerEl?.shadowRoot.querySelectorAll('h1');
    }

    // TODO: find all the chips which are present inside the wrapper component
    console.log({ nodes, events: this.events });
    // TODO: Once we find the chips, then

    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      initialView: 'dayGridMonth',
      initialDate: '2022-08-12',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      dayCellContent: args => {
        // console.log({ args });
        const dt = dayjs(args.date).format('YYYY-MM-DD');
        // const date = `${args.date.getFullYear()}-${args.date.getMonth()}-${args.date.getDate()}`;
        // console.log({ dt });
        return {
          html: `<div><b>${args.dayNumberText}</b><slot name="chip-${dt}"/></div>
          `,
        };
      },
      events: this.events,
      eventContent: args => {
        return {
          html: `<span/>`,
        };
      },
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2022-08-01',
      //     id: '123',
      //   },
      // ],
      // eventContent: args => {
      //   console.log({ args });
      //   return {
      //     html: `<slot name="chip-${args.event._def.publicId}"/>`,
      //   };
      // },

      // eventColor: '#f00',
      // events: [
      //   {
      //     title: 'All Day Event',
      //     start: '2022-08-01',
      //     id: '123',
      //     // RElement: <slot name="event-123" />,
      //   },
      // ],
      // eventContent: args => {
      //   // console.log({ args });
      //   // console.log({ calend: this.container, parent: this.container.parentNode });
      //   // const parent = this.container.parentNode;
      //   // console.log({ parent });
      //   // const slotElements = parent.querySelector('slot');
      //   // hasSlot and then look
      //   // console.log({ slotElements });
      //   // console.log({ slotElements });

      //   // querySelectorAll select all slots inside a wrapper
      //   // from that we could

      //   return { 
      //     html: `<slot name="event"/>`,
      //   };
      // },
    });
    this.calendar.render();
  }

  @Method()
  async addEvent(event) {
    console.log('called from inside', { event });
    this.calendar.addEvent(event);
  }

  render() {
    return (
      <div style={{ color: 'red' }} ref={el => (this.container = el as HTMLDivElement)}>
        <div
          ref={el => (this.calendarContainerEl = el as HTMLDivElement)}
          // id="calendar"
          style={{
            height: '500px',
            width: '500px',
          }}
        ></div>
      </div>
    );
  }
}
