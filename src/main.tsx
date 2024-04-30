// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';

window.addEventListener("DOMContentLoaded", async () => {

  try {
    const platform = Capacitor.getPlatform();
    console.log('platform:', platform);

    if (platform === 'web') {
      const sqlite = new SQLiteConnection(CapacitorSQLite);
      
      customElements.define('jeep-sqlite', JeepSqlite); // Create 'jeep-sqlite' Stencil Component
      const jeepSqlite = document.createElement('jeep-sqlite')

      document.body.appendChild(jeepSqlite);
      await customElements.whenDefined('jeep-sqlite')
      console.log('after customElements.whenDefined')
      
      await sqlite.initWebStore()
    }
    const container = document.getElementById('root');
    const root = createRoot(container!);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
  catch (e) {
    console.log('Error: ', e);
  }
})
