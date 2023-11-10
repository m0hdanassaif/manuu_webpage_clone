import React from "react";

const section_three = () => {
  return (
    <div className="notification">

    {/* First box */}
      <div className="box_notif">
        <div className="upside_head"><p>News | Events</p></div>

        <div className="animated_notification"></div>

        <div className="downside_view">View All</div>
      </div>

     {/* Second box */}
     <div className="box_notif">
        <div className="upside_head"><p>Notices | Circulars | Orders | Jobs | Tenders</p></div>

        <div className="animated_notification"></div>

        <div className="downside_view">View All</div>
      </div>  

      {/* Third box */}
      <div className="box_notif">
        <div className="upside_head upside_head_s"><p>Admission | Examination | Academic Calendars</p></div>

        <div className="animated_notification"></div>

        <div className="downside_view">View All</div>
      </div> 

      
    </div>
  );
};

export default section_three;
