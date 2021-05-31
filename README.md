# test-task-1

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Tasks

### 1. `Bootstrap-vue` setup.

**Setup `bootstrap-vue` with the following requirements.**

1.1 `Bootstrap` and `Bootstrap-vue` core SCSS must be imported into the app's global SCSS stylesheet.

1.2 `Bootstrap` SCSS variables from the `bootstrap` source code (e.g. `$primary`, `$border-radius`, `$box-shadow`, etc...) must be accessible inside all vue components' `style` tags. They must be made available globally, **without** having to import them again and again inside each vue component.

1.3 The compiled `Bootstrap` CSS and `Bootstrap-vue` CSS must explicitly be excluded from the `Nuxt.js` app to prevent you from importing the code twice.

### 2. General Questions.

**Please answer the following questions.**

2.1 Your opinion: What sort of `build` mode fits better for a simple portfolio website (5 pages and a contact form). The content of the site will be managed in a CMS by the Website owner and programmatically be fetched by the `Nuxt.js` app.

**Options**

2.1.1: `SPA`

2.1.2: `Static`

2.1.3: `Dynamic`

Please choose an option here and explain **why** in your own words:

-------------------------YOUR ANSWER---------------------------

For a simple portfolio website, I would prefer to work with Dynamic build mode. This is because it utilizes content management for customization and creation. Comparing it with static websites, those are entirely founded on HTML and CSS; on the other hand, SPA’s can be an option for it, but because of the use case, a dynamic website can fit better. 

Taking into consideration the need to manage it from a CMS, it’s important to be able to handle any change of information and fetching contact form data.


2.2 What are the benefits of `SSR`?

Please explain in your own words:

-------------------------YOUR ANSWER---------------------------

Server-Side Rendering allows programmers to improve user experience. The website or web pages are rendered from the server instead of rendering from the browser, which means that the content is fetched from the server instead of the client-side, improving fetching data time. Also, the website loads quickly because the browser fetches content from the server before rendering it for the user.

### 3. Identify and fix bad code.

**Find issues with the following code and refactor the whole file to write the cleanest and most maintainable code you can write.**

File location: `@/pages/index.vue`.

**Hint 1.** this file is setup with a non-existing api endpoint. You don't need to be able to render or start this route, you only need to edit the file without testing the functionality for this task. **It's ok**, to accept the non-working api and the resulting errors for this task.

**Hint 2.** You don't have to get tired by looking for typos in the code. Typos don't matter for this task.

**Hint 3.** Inside this file you will find some mistakes, lots and lots of unclean code and many lines ob obsolete code. If, in the end the file looks entirely different than it does now, you're probably moving into the right direction.

**Hint 4.** Don't be shy or afraid to make fundamental changes to this file.

### 4. Architecture.

**Take a look at the code file architecture for the PAGE SECTION COMPONENTS and find a better file and folder structure to keep the app as readable and maintainable as if it was an extremely large scale app.**

What would be the very best place and the best way to store section components of a page?

4.1 Please rename the `page section component` files if you find a better naming convention.

4.2 Please relocate the `page section component` files if you find a better place for them to live.

Optimized file architecture is based on naming conventions. Avoiding single word components like Header.vue or Footer.vue, choose prefixing them with its function.
**Reusable globally registered UI components**
AppPrefixedName.vue / BasePrefixedName.vue
AppHeader.vue
**Single-instance components where only one can be active at the same time**
ThePrefixedName.vue
TheSidebar.vue


### 5. Shared Page Data

Where is the best place and what is the best time to request shared page data (e.g. `Navbar`, `Footer`, `Social Media Icons`, `Contact Details`, etc...) from the server in a `Nuxt.js` app? Let's say you have an api endpoint to get all shared data. Something like `/api/shared`. From this endpoint you want to get all shared data, that you need to reuse in many components all over again. You want to use it in the navbar, in the footer and sometimes in single components, so you want to call it only once. Where do you call it?

Please write an answer below, or (**even better**) demonstrate it, right in the code. Please tell us a few words about your decision.

**Taking into consideration an API endpoint that calls shared data, I call it from a plugin that contains an async function that will dispatch a function in which the data is fetched. This plugin can then be called wherever it’s needed.**