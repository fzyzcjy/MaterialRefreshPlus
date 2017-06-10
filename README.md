# MaterialRefreshPlus

## What's MaterialRefreshPlus?

The function of Android's **swipe-to-refresh** used in your **web** app.

[Click here](https://turtlegood.github.io/MaterialRefreshPlus/demo/demo.html) to see the live demo! (Only available in mobile phones. You can use the Chrome developer mode to emulate it.)

## What's the advantages?

It is based on [MaterialRefresh](https://github.com/lightningtgc/material-refresh), but has many bug fixed and many optimizations. It is faster and fluenter. It is more like the native android swipe-to-refresh.

Some improvements: 

0. Add: more powerful `refresh` and `resolve`. If you call `refresh` n times, then call `resolve` n times to cancel the spinner.
0. Edt: when the user pull down and release it, it will fire the `refreshclick` event.
0. Fix: The content will "tremble" when you drag.
0. Fix: When you swipe up then down, the content will be moved too, which is not like the native android behavior.
0. Add: When swipe to the top of page and you are still swiping, it will be shown.
0. Opt: Use `transform` instead of `top` to speed up.
0. Opt: Make it smaller so it is the size of the android native one.

Much appreciation to he *MaterialRefresh* lib, which I base my work on.

## Author

Jingyi Chen, Fuzhou No.1 High School.