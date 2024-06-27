import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(RecaptchaV3Module),
  { provide: RECAPTCHA_V3_SITE_KEY, useValue: "6LfL1gIqAAAAAMrVXVPLVZ8DlDLK-3yQ8B1Luxhu" }]
};
