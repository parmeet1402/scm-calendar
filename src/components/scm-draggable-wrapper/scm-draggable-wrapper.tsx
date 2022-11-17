import { Component, Host, h, Prop, Method } from '@stencil/core';
import { Calendar } from '@fullcalendar/core';
import { Draggable } from '@fullcalendar/interaction';

@Component({
  tag: 'draggable-wrapper',
  shadow: false,
})
export class DraggableWrapper {
  draggableWrapperEl!: any;
  @Prop() data?:any;

  constructor() {
    const preventTreeShaking = Calendar.name;
    console.log(preventTreeShaking);
  }

  @Method()
  async getData(){
    return this.data;
  }

  componentDidLoad() {
    new Draggable(this.draggableWrapperEl, {
      eventData: function () {
        // console.log(eventEl);
        return {
          // calendarEl
          // call method to add an event
          
        };
      },

    });
  }

  render() {
    return (
      <Host>
        <div class="draggable" ref={el => (this.draggableWrapperEl = el)}>
          <slot />
        </div>
      </Host>
    );
  }
}


/* 
       <div class="draggable" ref={el => (this.draggableWrapperEl = el)}>
          <slot />
        </div>


        \\\

        <custom-component ref={el => this.d => el} data={this.data}>
          <slot></slot>
        </custom-component>
        


        // Custom compenent would have 
        @Method()
        async getData(){
          return this.data;
        }
*/