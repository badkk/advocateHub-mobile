# Deploying Project

## install
#### Using `yarn` (**Recommend**)
run `yarn install`

#### Using `npm` 
run `npm install`

## Develop
run `yarn add global react`
run `yarn start` to run project on port 3000

## Deploy

- run `yarn build` or `npm run build`
- install `serve` using `npm install -g serve`(admin or sudo mode)
- run `serve -s build/` to publish the formal version!




# Project Libraries

Basically, this whole project based on 

- **react**
- data flow manager: [react-redux](https://github.com/reactjs/react-redux), [redux-thunk](https://github.com/gaearon/redux-thunk)
- router: [react-router](https://github.com/ReactTraining/react-router)
- component library: [material-ui](http://www.material-ui.com/) with some plugins
  - [material-ui-bottom-sheet](https://github.com/TeamWertarbyte/material-ui-bottom-sheet)
  - [material-ui-chip-input](https://github.com/TeamWertarbyte/material-ui-chip-input)
  - [material-ui-search-bar](https://github.com/TeamWertarbyte/material-ui-search-bar)
  - [react-css-transition-replace](https://github.com/marnusw/react-css-transition-replace)
  - [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views)
  - [react-tap-event-plugin](https://github.com/zilverline/react-tap-event-plugin)

And we integrate **social media** tools, like:

- twitter
- google maps
- linkedin

Above all of this, we use a social media integrated tool named [hellojs](https://github.com/MrSwitch/hello.js).

and the utility function library we using [underscore](https://github.com/jashkenas/underscore).

# Q&A

1. Project shows `cannt find 'react'` after `yarn install`

   > running `yarn add global react` or `npm install -g react`
