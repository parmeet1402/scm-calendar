import { Component, h, Method, State, Watch } from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

type Events = any[];

const DEFAULT_OPTIONS = {
  initialView: 'dayGridMonth',
  initialDate: '2022-09-12',
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
};

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
  @State() optionsAccumulator = {};
  @State() optionsOverride = {};

  componentDidLoad() {
    this.optionsAccumulator = {
      ...DEFAULT_OPTIONS,
      events: this.events,
      ...(this.eventContent !== null && { eventContent: this.eventContent }),
      ...this.optionsOverride,
    };
    console.log('options in componentdidload', this.optionsAccumulator);
    this.calendar = new Calendar(this.calendarContainerEl as HTMLDivElement, this.optionsAccumulator);
    this.calendar.render();
  }

  @Watch('events')
  handleEventsChange() {
    this.calendar.setOption('events', this.events);
    this.calendar.setOption('eventContent', this.eventContent);
  }

  @Watch('optionsOverride')
  handleOptionChange(newVal) {
    this.optionsAccumulator = { ...this.optionsAccumulator, ...newVal };
    this.calendar.resetOptions(this.optionsAccumulator);
    this.calendar.render();
  }

  // Public Method for calling the populating and render method
  @Method()
  async init(events: any, cb, optionsOverride) {
    // pass on the callback
    this.eventContent = cb;
    // populate events
    this.events = events;

    // override options
    this.optionsOverride = optionsOverride;
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
          maxWidth: '1100px',
          margin: '0 auto',
          width: '500px',
        }}
      />
    );
  }
}
