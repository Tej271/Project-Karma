import React from "react";
import { PanelGroup, Panel } from "rsuite";

function WorkingPanel() {
  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="Select Plan" defaultExpanded>
          Choose suitable plan with desired services and suits you best.
        </Panel>
        <Panel header="Customize">
          If You want personalised package offers then select services you wish
          to opt for and then book your slot.
        </Panel>
        <Panel header="Estimate and Pay">
          In this section you'll exposed to the budget of your selected package
          or custom pacakge which would take you to the payment section and book
          your event date.
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default WorkingPanel;
