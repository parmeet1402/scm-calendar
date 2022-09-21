import { Component, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'root-component',
  shadow: true,
})
export class RootComponent {
  calendarWrapperEl!: any;
  @State() events: any[] = [
    {
      title: 'Fist',
      id: 'first-id',
      start: '2022-09-05',
      // optional attributes goes here
      time: '09:00 AM',
      description: 'THis is some description which is present...',
      images: ['https://media-exp1.licdn.com/dms/image/C560BAQFqCEBmVvvSeA/company-logo_200_200/0/1656696462520?e=2147483647&v=beta&t=CnYx4B5I2APMnVqUu5MIEVWSU0jhf8DV9zpa2riOWTU'],
    },
    {
      title: 'Second',
      id: 'second-id',
      start: '2022-09-25',
      // optional attributes goes here
      time: '01:00 AM',
      description: 'THis is some description which is present...',
      images: ['https://media-exp1.licdn.com/dms/image/C560BAQFqCEBmVvvSeA/company-logo_200_200/0/1656696462520?e=2147483647&v=beta&t=CnYx4B5I2APMnVqUu5MIEVWSU0jhf8DV9zpa2riOWTU'],
    },
  ];

  // INFO: inital date and intial view can't be ovverridden using the object
  componentDidLoad() {
    this.calendarWrapperEl.init(
      this.events,
      (args, createElement) => {
        return createElement('vue-content-chip', {
          onClick: () => {
            alert(`You clicked the event, ${args.event._def.extendedProps.time}`);
          },
          data: args.event._def.extendedProps,
        });
      },
      {
        headerToolbar: {
          left: 'prev today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek',
        },
      },
    );
  }

  @Watch('events')
  handleEventsChange() {
    this.calendarWrapperEl.updateEvents(this.events);
  }

  render() {
    return <calendar-wrapper ref={el => (this.calendarWrapperEl = el)} />;
  }
}

/* 











*/

// addEvent(event) {
//   this.events = [...this.events, event];
// }
// {/*  <form
//   onSubmit={e => {
//     e.preventDefault();
//     const event = { title: this.inputVal, id: `${this.inputVal}-id`, start: '2022-09-10' };
//     this.addEvent(event);
//     this.inputVal = '';
//   }}
// >
//   <input
//     type="text"
//     value={this.inputVal}
//     onChange={(e: Event) => {
//       this.inputVal = (e.target as HTMLInputElement).value;
//     }}
//   />
//   <button type="submit">Submit</button>
// </form> */}
