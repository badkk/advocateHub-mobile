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
- run `serve -s build/` to publish the formal version , we strongly suggest you to use [pm2](https://github.com/Unitech/pm2) as your process manager ~ 🤗


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

As for the styling work, the whole project are taking **CSS in JS** idea, take [aphrodite](https://github.com/Khan/aphrodite) as styling library.

Above all of this, we use a social media integrated tool named [hellojs](https://github.com/MrSwitch/hello.js).

And the utility function library we using [underscore](https://github.com/jashkenas/underscore).

And the testing part, we are using [airbnb enzyme](https://github.com/airbnb/enzyme), which is also the authority testing framework in React Community.



# Project Structure

The whole project consist with 5 parts: **container&redux, presenter, styles, utils and enzyme tests **.

- container&redux part

  This part mainly take the response of **actions, reducers & binding stuff**, this is the standard written about react-redux (contain redux-thunk) .

- presenter part

  This part's design according to [Dan Abramov's famous blog](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), almost 90% components here are defined by pure ES6 functions, some of them using React Component classes due to using local *small-scope* state.

- styles part

  This part based on **aphrodite** library, so basically we create styles by pages and we also defined the default theme, which can be used by all the components styles.

- utils part

  This part is normal as any other porject's utils. However, this part contains all the social media dealing process like googleMap, Twitter, Linkedin etc.

- enzyme tests part

  This part is about testing react shadow rendering, dom rendering and test case, which based on **enzyme**.



# Q&A

1. Project shows `cannt find 'react'` after `yarn install`

   > running `yarn add global react` or `npm install -g react`
