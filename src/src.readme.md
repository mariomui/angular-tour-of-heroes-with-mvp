# MVC vs MVP

What pattern are we using for the structure of this app? Before we answer that, we should see what is available and see which pattern is most 
suitable for Angular and for viscira.

## What is MVC

Model, view, controller.
Model handles application state. In our world, it would be class such as our AppService which updates our state and then notifies our controllers that the state has been updated.
Our controller is our component.ts, it reacts to the data change and tells the view. In our case, a bound property causes reactivity in the html.
Our app.html is our view. It can also communicate back to the controller via input boxes, and onclick functions. This update and notification always reports back to the controller.

In any case, what it really means, is that the component ts has bound properties that is the back and forth communication to the view or the data model.

What we call interfaces dont really belong in models, they are more like data definition.

What is actually storing, updating and communicting the data is our appService.

https://bitbucket.org/viscira/gskva-x195709-pharma/src/master/src/app/services/app-config.service.ts

has the power to update State but is also the mechanism that notifies the controller that state has been updated.

https://bitbucket.org/viscira/gskva-x195709-pharma/src/master/src/app/services/app-config.ts houses the definition of the data.

If we had to look at it wholistically, our data is tightly coupled without our data controlling logic.
We are using a appConfig method to update appConfig.

What might be better is if we used an inbetween driver. So that when we say updateHeight, this driver will drive toward our appConfigService
and call the function that appConfigServices uses. newConfig.height = height, etc etc.

We can probably then call a similar driver and pass in the same data to update another Store such as ngrx. Or localstorage.

But this also brings another problem of hydration. We'd need to initialize the values of our behavioral subject from localstorge. 

The contruction of services happens early and at a high level. We've always had trouble waiting for localstorage to hydrate and then using it. 

Another service would have to be created to listen in and check if all the variables in our appConfig have been safely initialized. 

So the controller knows about the model and the view.
The service(model) and the view (html) are strangers
Our current pattern is MVC

* https://stackoverflow.com/questions/2056/what-are-mvp-and-mvc-and-what-is-the-difference
  * this article shows you all the details of what ppl on the web think it means
* https://www.oracle.com/technical-resources/articles/javase/mvc.html
  * this article shows you how enterprise thinks of what mvc means and the history of the evolution of mvc.
* https://www.youtube.com/watch?v=w4Jm64wXE-4&ab_channel=NickWergeles
  * video that confirms all the deductions/articles/conclusions i've arrived to.

* ## What is MVP

  * > The concept is the same.
    > Model, view, presentation.
    > The only thing different is the term Presenter.
    > The references below explain how MVP is done in Angular. It's main benefit is that its easier to test. Let me explain why and how. Then I would go directly to the github to see how Mr. Aarhus redid Tour of Heroes using an MVP pattern.

  * **Container Components**
    * We call them container components because they contain all the state needed for the child components in their view
      * https://indepth.dev/posts/1050/container-components-with-angular
    * Additionally, they exclusively contain child components in their view — no presentational content. The template of a container component is made up entirely of child components and data bindings.
    * They should be entirely modular. I can reuse them in another setting.

  * This is a Controller but it knows a lot. I'll split it up and let you see how it knows too much.
  * examples:
    ```js
    export class S0Component implements OnInit, OnDestroy {

      public selectedPatient;
      public inputComplete;
      public presenterInfo = [];
      public slideComponents;
      public locale = environment.contentful.locale;

      private subscriptions = new Subscription;


      constructor(private route: ActivatedRoute, private _appConfigService: AppConfigService, private navigationService: NavigationService) {

    // we are hydrating in the constructor. That's a data thing. It has nothing to do with our presentation.
        this.subscriptions.add(
        this.route.data.subscribe(
          data => {
            if (!_(data).isEmpty()) {
              this.slideComponents = data.content.fields.slideComponent[this.locale];
              console.log(this.slideComponents);
            }
          }
        )
        );

        this.subscriptions.add(
          _appConfigService.appConfig.subscribe(
            appConfig => {
              this.presenterInfo = appConfig.presenterInfo;
              this.selectedPatient = appConfig.selectedProfile;
              this.validateSelections();
            }
          )
        );

      }

      ngOnInit() { }

      ngOnDestroy() {
        this.subscriptions.unsubscribe();
      }

      selectProfile(selection) {
        this.selectedPatient = selection;
        let appConfig = this._appConfigService.appConfig.value;
        appConfig.selectedProfile = selection;
        this._appConfigService.appConfig.next(appConfig);
        this.validateSelections();
      }

      updatePresenterInfo() {
        let appConfig = this._appConfigService.appConfig.value;
        appConfig.presenterInfo = this.presenterInfo;
        this._appConfigService.appConfig.next(appConfig);
        this.validateSelections();
      }
      validateSelections() {
        this.inputComplete = this.presenterInfo[0] && this.presenterInfo[1] && this.selectedPatient ? true : false;
      }
    }
    ```

    * How to rewrite it so there is no subscribing?
      * subscribing means i'm updating my presentational data state. My bounded properties `slideComponents` is being updated.

    ```js
    export class S0Component implements OnInit, OnDestroy {


      public inputComplete;
      public locale = environment.contentful.locale;
      public slideComponents = this.route.data.pipe((data) => data.content.fields.slideComponent[this.locale]};

      private subscriptions = new Subscription;


      constructor(private route: ActivatedRoute) {
      }
    }
    ```

  * This container now only has original state;
  * The view itself is in charge of updating its current app state. 
  * The async pipe will return the latest from the observable and cleanup itself once the view is unmounted.
  * This removes the State from our controller.

  * example
    ```html
    <SOComponent [slideComponents]=slideComponents | async> </SOComponent>
    ```
  * **Presentational components** are literally the user interface of our Angular application. They serve two purposes:
    * Present application state to the user
    * Change application state triggered by user interaction
    * use minimal presentational logic in template model, and component model. (VC)
  
* MVP references
  * https://www.youtube.com/watch?v=D_ytOCPQrI0&ab_channel=AngularAarhus
    * lecture of mvp structure
  * https://indepth.dev/posts/1070/model-view-presenter-with-angular
  * https://github.com/LayZeeDK/ngx-tour-of-heroes-mvp/tree/develop/src/app/heroes
    * real world code of mvp structure
  * https://davembush.github.io/model-view-presenter-angular-and-testing/
    * why mvp is good for testing


## Overview

What is app organizing?

We either organize by features.
* shared components
* shared models
  
Or we orgnize by layers which is
* these things belong in data
* these things belong in presenting.

What does that actually mean?
* We can seperate our viewmodel controller into TWO for better soc.
* This way onpush can be applied to the purely presentational component which can speed up the app.
* lower level
  * hereos.component 
    * splitting into parts
      * heroes.component
      * heroes.presenter
      * heroes.container
        * 