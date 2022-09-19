import { Component, Host, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'root-component',
  shadow: true,
})
export class RootComponent {
  calendarWrapperEl!: any;
  @State() inputVal: string = '';

  // events can be added or removed in this component
  @State() events: any[] = [
    {
      title: 'sdfdfdfdfd',
      id: 'first-id',
      start: '2022-09-15',
    },
  ];

  componentDidLoad() {
    this.calendarWrapperEl.init(this.events, args => {
      return {
        html: `<b>${args.event._def.title.slice(0, 2)}</b>`,
      };
    });
  }

  @Watch('events')
  handleEventsChange() {
    this.calendarWrapperEl.updateEvents(this.events);
  }

  addEvent(event) {
    this.events = [...this.events, event];
  }

  render() {
    return (
      <Host>
        <calendar-wrapper ref={el => (this.calendarWrapperEl = el)} />
        
        
        
        
        
        
        
        <form
          onSubmit={e => {
            e.preventDefault();
            const event = { title: this.inputVal, id: `${this.inputVal}-id`, start: '2022-09-10' };
            this.addEvent(event);
            this.inputVal = '';
          }}
        >
          <input
            type="text"
            value={this.inputVal}
            onChange={(e: Event) => {
              this.inputVal = (e.target as HTMLInputElement).value;
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </Host>
    );
  }
}
