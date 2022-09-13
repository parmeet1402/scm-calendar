import { Component, Prop, h } from '@stencil/core';
5;
import { format } from '../../utils/utils';
// ----
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

// document.addEventListener('DOMContentLoaded', function () {
// var calendarEl = document.getElementById('calendar');
// var calendar = new Calendar(calendarEl, {
// initialView: 'dayGridMonth',
// });
// calendar.render();
// });

// let calendar = new Calendar(document.querySelector('#calendar'), {
//   plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek',
//   },
// });

// calendar.render();

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  componentDidRender() {
    const calendarEl = document.querySelector('#calendar');
    console.log({ calendarEl });
    const calendar = new Calendar(calendarEl as HTMLElement, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,listWeek',
      },
    });
    calendar.render();
  }

  render() {
    return (
      <div
        id="calendar"
        style={{
          height: '500px',
          width: '500px',
        }}
      />
    );
  }
}
