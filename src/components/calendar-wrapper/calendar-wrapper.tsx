import { Component, h, Method, State, Watch } from '@stencil/core';
import { Calendar, EventSourceInput, Identity } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

type Events = any[];

@Component({
  tag: 'calendar-wrapper',
  styleUrl: 'calendar-wrapper.css',
  shadow: true,
})
export class CalendarWrapper {
  calendarContainerEl!: HTMLDivElement;
  eventContent = null;
  calendar = null;
  @State() events: Events = [];

  componentDidLoad() {
    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      initialView: 'dayGridMonth',
      initialDate: '2022-09-12',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      events: this.events,
      ...(this.eventContent !== null && { eventContent: args => this.eventContent(args) }),
    });
    this.calendar.render();
  }

  @Watch('events')
  handleEventsChange() {
    this.calendar.setOption('events', this.events);
    this.calendar.setOption('eventContent', this.eventContent);
  }

  // Private Method for populating events
  populateEvents(events: Events) {
    this.events = events;
  }

  // Public Method for calling the populating and render method
  @Method()
  async init(events: any, cb) {
    // pass on the callback
    this.eventContent = cb;
    // populate events
    this.events = events;
  }

  @Method()
  async updateEvents(events: any) {
    this.events = events;
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
