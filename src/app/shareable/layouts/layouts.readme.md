# Layouts

While it is more performant to have the static layouts such as headers
and footers be outside in the app component html so that they render once.

It is also nice to have a layout component box for the padding.
* case 1:
  * proofhq wants to add an additional line of content that makes the box for our content too small too house it. we want to show all the text. It would be a matter of swapping out to a new layout with a bigger content box... say 95vw instead of 90vw.

* case2:
  * in the case of revance where some content would scroll all the way to the bottom because it had too much information, we would swap content layouts depending. 