# Explain what the major parts folder has

The view should contain all the pages/slides
If we are using the MV* structure, should we organize by functionality or by areas of responsiblity?

I feel like everythin should be in modules.
And that these page views are modules that can house seperate elements.

---

A lot of what viscira does resembles powerpoint slides.
There's a lot of customization between call flow etc.

The navigation service needs to see the entire routing map to make judgements.

With lazy loading trees, you are effectingely going down one level of the Router tree, and then coming back up every time.


The alternative is to have a flatter structure, an array of arrays. Since all the components are there for you to see, 
it will be easier to manipulate and require less angular routing knowledge.

https://bitbucket.org/viscira/jazde-x185436-cbv3/src/master/src/app/app-routing.module.ts

## Prototype

would it be easier to post process our router tree using e2e that will create a flattened structure for us to use.