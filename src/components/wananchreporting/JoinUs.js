import React from 'react';
import { Button } from 'primereact/button';

export default function JoinUs() {
  return (
    <div className="wananchireporting-become-one-container">
      <div className="surface-0 text-700 text-center">
        <div className="text-blue-600 font-bold mb-3">
          <i className="pi pi-discord"></i>&nbsp;WANANCHI REPORTING
        </div>
        <div className="text-900 font-bold text-5xl mb-3">
          Join Our Design Community
        </div>
        <div className="text-700 text-2xl mb-5">
          Seen something happening ? Be our eyes and ears across the country.
          With one tap.
        </div>
        <Button
          label="Join Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </div>
    </div>
  );
}
