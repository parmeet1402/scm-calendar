import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'vue-content-chip',
  styleUrl: 'vue-content-chip.css',
  shadow: true,
})
export class VueContentChip {
  @Prop() data: any;

  render() {
    return (
      <draggable-wrapper data={null}>
        <scm-content-chip>
          <span slot="time">{this.data.time}</span>
          <p slot="description">{this.data.description}</p>
          <img src={this.data.images[0]} alt={this.data.description} slot="img" />
        </scm-content-chip>
      </draggable-wrapper>
    );
  }
}

/*
  drop = evt => {

    // console.log(evt)
    // does event return data?
    evt.data
    // 

    <div id='draggable-el' data-event='{ "title": "my event", "duration": "02:00" }'>drag me</div>
    
    let newEvent = {
      start: evt.dateStr,
      title: evt.draggedEl.textContent,
    };

    this.updateEvents([...this.events, newEvent]);
  };


*/
