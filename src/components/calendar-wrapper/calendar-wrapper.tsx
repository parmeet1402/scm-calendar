import { Component, h, Method, State, Watch, Prop } from '@stencil/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import state from '../../state/store';

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

  @Prop() handleDrop = data => {
    data.event.innerHtml;
  };

  @State() events: Events = [];
  @State() optionsAccumulator: CalendarOptions = {};
  @State() optionsOverride: CalendarOptions = {};

  // current events which are gonna be dropped into a date and time
  //

  componentDidLoad() {
    this.optionsAccumulator = {
      ...DEFAULT_OPTIONS,
      events: this.events,
      drop: event => {
        // event.element
        // TODO: get the data for the event
        // select the element
        // then we call getData on the element

        // TODO: push the added event object
        // optional thing:
        // this.events = [...this.events, event]
        this.handleDrop(event);

      },
      
      ...(this.eventContent !== null && { eventContent: this.eventContent }),
      ...this.optionsOverride,
    };
    state.calendarInstance = new Calendar(this.calendarContainerEl as HTMLDivElement, DEFAULT_OPTIONS);
    state.calendarInstance.render();
  }

  @Watch('events')
  handleEventsChange() {
    state.calendarInstance.setOption('events', this.events);
    state.calendarInstance.setOption('eventContent', this.eventContent);
  }

  @Watch('optionsOverride')
  handleOptionChange(newOptionsOverride) {
    this.optionsAccumulator = { ...this.optionsAccumulator, ...newOptionsOverride };
    state.calendarInstance.resetOptions(this.optionsAccumulator);
    state.calendarInstance.render();
  }

  @Method()
  async updateConfig(optionsOverride) {
    this.optionsOverride = { ...this.optionsOverride, ...optionsOverride };
  }

  @Method()
  async updateEvents(events: any, renderCallback = null) {
    console.log({ events });
    this.events = events;
    console.log({ renderCallback });
    if (renderCallback !== null) {
      this.eventContent = renderCallback;
      state.calendarInstance.setOption('eventContent', this.eventContent);
    }
  }

  // @Method()
  // async

  render() {
    console.log({ eventsFromCalendarWrapper: this.events });
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
