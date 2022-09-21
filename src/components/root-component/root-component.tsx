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
      title: 'an event',
      id: 'first-id',
      start: '2022-09-15',
    },
  ];

  componentDidLoad() {
    this.calendarWrapperEl.init(
      this.events,
      (args, createElement) => {
        // console.log({ el: this.calendarWrapperEl });
        // console.log({ args });
        // const element = this.calendarWrapperEl
        // return {
        //   html: `<scm-content-chip><span slot="time">09:00 AM</span><span slot="text">THis is somethingdkljdklfjkdjfkldjkfld djsafjadk dasfkjdsakfkldsajfkld alkdjfjkl jdfkljd</span></scm-content-chip>`,
        // };

        return createElement(
          'scm-content-chip',
          {
            onClick: () => {
              alert('thhf');
            },
          },
          createElement('i', {}, args.event._def.title),
        );
      },
      all => {
        console.log({ all });
      },
    );
  }

  // pass down events easily
  // listen to different events like onClick, onDoubleClick

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
        <draggable-wrapper>
          <div>
            <scm-content-chip>
              <span slot="text">Event 143</span>
            </scm-content-chip>
          </div>
        </draggable-wrapper>

        <calendar-wrapper ref={el => (this.calendarWrapperEl = el)} />

        <draggable-wrapper>
          <div>
            <scm-content-chip>
              <span slot="text">Event 1</span>
            </scm-content-chip>
          </div>
        </draggable-wrapper>

        <draggable-wrapper>
          <div>
            <scm-content-chip>
              <span slot="text">Event 2</span>
            </scm-content-chip>
          </div>
        </draggable-wrapper>

        <draggable-wrapper>
          <scm-content-chip>
            <span slot="text">Event 3</span>
          </scm-content-chip>
        </draggable-wrapper>

        {/* <scm-content-chip>
          <span slot="time">09:00 AM</span>
          <div slot="img">
            <img src="" alt="some image...." />
          </div>
          <div slot="action-buttons">
            <scm-action-button>+</scm-action-button>
            <scm-action-button>-</scm-action-button>
          </div>
        </scm-content-chip> */}

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
