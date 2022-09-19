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
  // @State() events: Identity<EventSourceInput>[] = [];
  @State() events: Events = [];

  componentDidLoad() {
    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, {
      initialView: 'dayGridMonth',
      initialDate: '2022-09-12',
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      events: this.events,
      // eventContent: this.eventContent,
      ...(this.eventContent !== null && { eventContent: args => this.eventContent(args) }),
    });
    this.calendar.render();
    // calendar.refetchEvents
  }

  @Watch('events')
  handleEventsChange() {
    this.calendar.setOption('events', this.events);
  }

  // TODO: Private Method for populating events
  // Inputs: eventArray
  populateEvents(events: Events) {
    this.events = events;
  }

  // TODO: Public Method for calling the populating and render method
  @Method()
  async init(events: any, cb) {
    this.eventContent = cb;
    // console.log({this.eventContent})
    // populate events
    this.events = events;
    // pass on the callback
  }

  @Method()
  async updateEvents(events: any) {
    this.events = events;
    console.log({ eventContent: this.eventContent });
  }

  render() {
    console.log({ events: this.events, eventContent: this.eventContent });
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
