import { Component, Prop, h, State } from '@stencil/core';
5;
import { Calendar } from '@fullcalendar/core';
import { format } from '../../utils/utils';
// ----
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  container!: HTMLDivElement;
  draggableEl!: HTMLDivElement;
  calendarContainerEl!: HTMLDivElement;

  calendar = null;

  @State() events: Array<{ title: string; id: string }> = [
    { title: 'Event 1', id: '1' },
    { title: 'Event 2', id: '2' },
    { title: 'Event 3', id: '3' },
    { title: 'Event 4', id: '4' },
    { title: 'Event 5', id: '5',  },
  ];

  componentDidLoad() {
    console.log({ calendarContainerEl: this.calendarContainerEl }); // outputs HTMLElement <my-component ...

    let nodes = null;
    if (this.calendarContainerEl.shadowRoot !== null) {
      nodes = this.calendarContainerEl?.shadowRoot.querySelectorAll('h1');
    }

    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      droppable: true,
      initialDate: '2022-09-12',
      initialView: 'dayGridMonth',
      drop: stuff => console.log(stuff),
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    });

    this.calendar.render();

    // new Draggable(this.draggableEl);

    new Draggable(this.draggableEl, {
      itemSelector: '.fc-event',
      eventData: function (eventEl) {

        return {
          title: eventEl.innerText,
          // id: id,
        };
      },
    });
  }


  render() {
    return (
      <div style={{ color: 'red' }} ref={el => (this.container = el as HTMLDivElement)}>
        <div
          id="external-events"
          style={{
            width: '80%',
            height: 'auto',
            padding: '10px',
            maxHeight: '-webkit-fill-available',
          }}
        >
          <p>
            <strong> Events</strong>
          </p>
          {this.events.map(event => (
            <div
              class="fc-event"
              ref={el => (this.draggableEl = el as HTMLDivElement)}
              // data-event=`{ title: ${event.title}, duration: "02:00" }`
              // title={event.title} data={event.id} key={event.id}
            >
              {event.title}
            </div>
          ))}
        </div>

        {/* <div style={{ color: 'red' }} data-event='{ "title": "my event", "duration": "02:00" }'>
          drag meeeee
        </div> */}

        <div
          ref={el => (this.calendarContainerEl = el as HTMLDivElement)}
          // id="calendar"
          style={{
            margin: '0 auto',
            height: '1000px',
            width: '1000px',
          }}
        ></div>
      </div>
    );
  }
}
