* What should be placed in core?
  * only put single instance properties in core
* What are some of the examples of core?
  |-- [+] footer
  |-- [+] guards
  |-- [+] http
  |-- [+] interceptors
  |-- [+] mocks
  |-- [+] services
  |-- [+] header
* We are used to appService which is provided forRoot (that means  singleton) but there are other services that we might might provide at a lower level
* For example, a HammerTouch Service can be provided at the component level so that we can config that view with a different set of touch definitions.
  * in this instance, the HammerInstance in that component will be different than the overrall hammer instance.

