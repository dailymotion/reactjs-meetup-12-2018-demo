Get those bottlenecks out of my front yard!
=========================

Hello and welcome to the talk's demo code.

## Intro

This repository is a proof of concept that shows you how to show prioritized content with a React.JS application.

This project is a mockup of what we did on Dailymotion's website to improve video load time and first visit user
experience, especially for mobile devices.

The aim is to show that you can take advantage of React's server side rendering tools - even when you don't have a full
real-time Server Side Rendering stack ready - to improve the user's initial feeling when accessing your page.

## How to use this repository

On the `master` branch, you'll find unoptimized code, that loads a video on the page once the React application has been
fully loaded.

On the `optimized` branch, you'll find the optimized code, in which:

- The index.html is pre-filled with a partial version of the React application page, computed at build time
- A tiny critical script, which is embedded in the index.html, loads the video in the target DOM element, and then
loads the big React application, which then takes back control of the page

A [Pull Request](https://github.com/dailymotion/reactjs-meetup-12-2018-demo/pull/1) in which you'll be able to review
all the changes that need to be applied to the unoptimized version of the code is open.

### Testing on your computer

Once you've clone the repository, go inside its folder. You can then install dependencies:

```
$ yarn
```

**To see the unoptimized version**

Run the following commands:

```
$ git checkout master # if you aren't on master already
$ yarn build:static; yarn server:static
```

This launches a server on [localhost:3000](http://localhost:3000). If you open the page on Chrome, to see what it feels
like on mobile you can open the Dev Tools (Cmd+Option+I on macOS or F12 on Windows), go to the Network panel, and
throttle the page's bandwidth to Fast 3G.

**To see the optimized version**

Run the following commands:

```
$ git checkout optimized # if you aren't on optimized already
$ yarn build:static; yarn server:static
```

This launches a server on [localhost:3000](http://localhost:3000). If you open the page on Chrome, to see what it feels
like on mobile you can open the Dev Tools (Cmd+Option+I on macOS or F12 on Windows), go to the Network panel, and
throttle the page's bandwidth to Fast 3G.
