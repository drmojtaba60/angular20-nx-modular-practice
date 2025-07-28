import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { coreConfig } from '@my-ecommerce/core';

//bootstrapApplication(App, appConfig).catch((err) => console.error(err));


bootstrapApplication(App, {
  ...coreConfig,
  ...appConfig, // ترتیب خیلی مهم است
});