import React from 'react';
import "./tracking.css";

export default function Tracking() {
    return (
        <div class="wrapper">
            <ul class="StepProgress">
                <li class="StepProgress-item is-done"><strong>Post a contest</strong></li>
                <li class="StepProgress-item is-done"><strong>Award an entry</strong>
    Got more entries that you love? Buy more entries anytime! Just hover on your favorite entry and click the Buy button
  </li>
                <li class="StepProgress-item current"><strong>Post a contest</strong></li>
                <li class="StepProgress-item"><strong>Handover</strong></li>
                <li class="StepProgress-item"><strong>Provide feedback</strong></li>
            </ul>
        </div>
    )
}