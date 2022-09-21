import { Component, h, Method, State, Watch, Prop } from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import state from '../../state/store';

type Events = any[];

const DEFAULT_OPTIONS = {
  initialView: 'dayGridMonth',
  initialDate: '2022-09-12',
  plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
  // meltwater theme
};

@Component({
  tag: 'calendar-wrapper',
  styleUrl: 'calendar-wrapper.css',
  shadow: true,
})
export class CalendarWrapper {
  calendarContainerEl!: HTMLDivElement;
  eventContent = null;
  // calendar = null;

  @Prop() handleDrop = (data) => { data.event.innerHtml};

  @State() events: Events = [];
  @State() optionsAccumulator = {};
  @State() optionsOverride = {};

  // current events which are gonna be dropped into a date and time
  //

  componentDidLoad() {
    this.optionsAccumulator = {
      ...DEFAULT_OPTIONS,
      events: this.events,
      drop: (event)=>{
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

  // TODO: Method to updateOptions

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

  // @Method()
  // async

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
