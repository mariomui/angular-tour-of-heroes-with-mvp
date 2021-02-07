# What is the purpose of the app folder?

The app folder holds our app.
Each file should hold a specific purpose.

The mission statement of the app should be defined.

## Mission Statement

Focus on creating Presentation Slide App with examples of multiple patterns. 

## Purist

personlly, think it should be
modules
- slide1
  - components
    - slide1.container.ts (holds appState)
    - slide1.container.html
  - presentational
    - slide1.presenter.ts (basically a service)
  - slide1.module.ts
  - slide1-routing.module.ts (optional);
- slide2
Abstracted routes cause problems when you want to load modals as lazy loaded routes. Might be easier to just create via modal factory

## Based on convention

core
shared
features