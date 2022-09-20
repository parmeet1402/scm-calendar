import { Component, h, Method, State, Watch } from '@stencil/core';
import { Calendar, EventSourceInput, Identity } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';

type Events = any[];

@Component({
  tag: 'calendar-wrapper',
  styleUrl: 'calendar-wrapper.css',
  shadow: true,
})
export class CalendarWrapper {
  calendarContainerEl!: HTMLDivElement;
  eventContent = null;
  eventDidMount = null;
  calendar = null;

  @State() events: Events = [];

  componentDidLoad() {
    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      initialView: 'dayGridMonth',
      initialDate: '2022-09-12',
      droppable: true,
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
      events: this.events,
      ...(this.eventContent !== null && { eventContent: this.eventContent }),
      // eventDidMount: this.eventDidMount,
      // eventDidMount: cb => {
      //   console.log({ cb });
      // },
    });
    this.calendar.render();
  }

  @Watch('events')
  handleEventsChange() {
    this.calendar.setOption('events', this.events);
    this.calendar.setOption('eventContent', this.eventContent);
    this.calendar.setOption('eventDidMount', this.eventDidMount);
  }

  // Public Method for calling the populating and render method
  @Method()
  async init(events: any, cb, eventDidMountCallback) {
    // pass on the callback
    this.eventContent = cb;
    this.eventDidMount = eventDidMountCallback;
    // populate events
    this.events = events;
  }

  @Method()
  async updateEvents(events: any) {
    this.events = events;
  }

  @Method()
  async returnCalendar() {
    return this.calendar;
  }

  render() {
    return (
      <div
        ref={el => (this.calendarContainerEl = el as HTMLDivElement)}
        style={{
          height: '500px',
          width: '500px',
        }}
      />
    );
  }
}
