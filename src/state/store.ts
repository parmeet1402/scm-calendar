import { createStore } from '@stencil/store';

const { state } = createStore({
  calendarInstance: null,
});

export default state;



/* 
FIRST SCENARIO:
whatever data present for an event, we would use that to create an event object,
then we are supposed to update state of the event's in calendar



*/

/* 
<vue-page-container>
    <scm-calendar-wrapper>
    <draggable-wrapper>
        <scm-content-chip> 

        <
        
        <scm-content-chip/>
    </draggable-wrapper>



    </scm-calendar-wrapper>
    <scm-calendar-sidebar>
    <draggable-wrapper>
            <scm-content-chip />
        </draggable-wrapper>
    </scm-calendar-sidebar
</vue-page-container>
*/




/* Scenario and Edge cases to be covered
- First Scenario: User dragging and dropping an event from sidebar to the calendar (ADDITION OF AN EVENT INTO THE CALENDAR)
- Second Scenario: User dragging and dropping an event from calendar to the sidebar (REMOVAL OF AN EVENT FROM THE CALENDAR)
- THIRD SCENARIO: User should be able to drag and drop the events from one date to another one
- EDGE CASE 1: What if the user tries to drag the event from the sidebar but doesnt't drop it in any calendar
- Edge Case 2: What if the user tries to drag the event from the calendar but doesn't drop it into the sidebar
- EDGE Case 3: What if the user tries to drag and drop from the sidebar into the past date
- EDGE Case 4: What if the user tries to drag and drop from one current date into the past date
- EDGE Case 5: Do not allow the user to drag and drop the past date events
*/

/* Input Requirements for a draggable wrapper to function
- slot component
- calendar should be initialized be before it 
*/