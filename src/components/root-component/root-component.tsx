import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'root-component',
  shadow: true,
})
export class RootComponent {
  @State() inputVal: string = '';

  // events can be added or removed in this component
  @State() events: any[] = [
    {
      title: 'first',
      id: 'first-id',
      start: '2022-08-01',
    },
    { title: 'second', id: 'second-id', start: '2022-08-15' },
    { title: 'third', id: 'third-id', start: '2022-08-12' },
  ];

  addEvent(event) {
    this.events = [...this.events, event];
  }

  render() {
    console.log({ events: this.events });
    return (
      <Host>
        <my-component events={this.events}>
          {this.events.map((event: any) => {
            return (
              <span slot={`chip-${event.id}`}>
                <b>-{event.title.slice(0, 1).toUpperCase()}-</b>
              </span>
            );
          })}
        </my-component>
        {/* <span>HEY FROM ROOT COMPONENRt</span>
        {this.events.map(i => (
          <h1>{i}</h1>
        ))} */}
        <form
          onSubmit={e => {
            e.preventDefault();
            const event = { title: this.inputVal, id: `${this.inputVal}-id`, start: '2022-08-10' };
            console.log({ event });
            this.addEvent(event);
            // this.events = [...this.events, this.inputVal];
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

/* 
 <my-component>
      <!-- <div slot="event" date='2022-09-15T00:00:00'"">
        THIS IS FIRST EVENT
      </div>
      <div slot="event" date='2022-09-15T00:00:00'>
        THIS IS SECOND EVENT
      </div>
      <div slot="event" date='2022-09-15T00:00:00'>
        THIS IS THIRD EVENT
      </div>
      <div slot="event" date='2022-09-15T00:00:00'>
        THIS IS THIRD EVENT
      </div> -->
     
      <div slot="event-123" id="123">
        <div>
          <h2>
            Event 1233434
          </h2>
        </div>
      </div>
      <div slot="event-456" id="456">
        <div>
          <h2>
            Event 1233434
          </h2>
        </div>
      </div>
      <div slot="event-987" id="987">
        <div>
          <h2>
            Event 1233434
          </h2>
        </div>
      </div>
    </my-component>

*/
