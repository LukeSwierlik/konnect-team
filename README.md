# Welcome
Goal: make this vue app as close to this mock https://www.figma.com/file/zeaWiePnc3OCe34I4oZbzN/Service-Card-List?node-id=0%3A1 as possible

The styling should be responsive and look good different browser window sizes.
You may use the component doc to help style your components: https://kongponents.netlify.app/components/card.html

## Get started by running


```shell
yarn install --ignore-optional
yarn serve
```

or

```shell
npm install --no-optional
npm run serve
```


#### Start Dev Server in Separate Terminal
```shell
yarn server
```

or

```shell
npm run server
```
## Compiles and minifies for production
```shell
yarn build
```

or

```shell
npm run build
```
## Run your unit tests
In order to run unit or e2e tests you must first run install without the ignore optional flag.

```
yarn test:unit
```

or

```shell
npm run test:unit
```

## Run your end-to-end tests
```
yarn test:e2e
```

or

```shell
npm run test:e2e
```

## Lints and fixes files
```
yarn lint
```

or

```shell
npm run lint
```

# FAQ
1. Why do I use Vuex for state management?
    - I used Vuex because I prefer this state management. Additionally, I wanted to show that I know this library and I know how to use this library.
2. Why do I use other components with Kongponents like a KEmptyState and KSkeleton?
    - I wanted to provide UX support for handling all states like Loading when user is waiting for data, Empty State when there is no data or Error State when something went wrong. I found it best to use ready-made components, especially since they are ready in the Kongponents library. Additionally, I was able to fix a bug in KSkeleton.
3. What flow did I use for communication between components?
    - I used flow Smart-Dumb Component, where a Smart component is a container that gets data from the Store, and Dumb Components are components that have no logic, they only present the data.
4. Why didn't you use some famous CSS architecture like BEM or Atomic Design?
   - I tried to match the style names to what are used in Kongponents.
5. Why didn't you use it in the "first-mobile" style?
   - I used the "first-desktop" style because it was not marked in the requirements to use "first-mobile".
