# Getting Started
**The fastest way to use this as a boilerplate:**

```
// Get the latest version
git clone --depth=1 https://github.com/Munsterberg/gemstone myAppName

// cd myAppName
cd myAppName

// Install dependencies
npm install

// Run application
node app.js
```

**The recommended way to use this boilerplate:**
```
// Get the latest version
git clone --depth=1 https://github.com/Munsterberg/gemstone myAppName

// cd myAppName
cd myAppName

// Install depenedencies
npm install

// Install gulp globally
npm install gulp -g

// Run project using gulp
gulp
```

This project was heavily influenced by the [Hackathon Starter](https://github.com/sahat/hackathon-starter)

You can also use nodemon if you prefer:

Simply 

```
npm install nodemon -g

nodemon app.js
```

## What is this?

This is a node.js application boilerplate that I use for my simple projects that require a quick setup. It follows MVC techniques and allows users to quickly start building node apps. If you have any questions please email me at jake@oshawadesign.com. I created this primarily for myself, so you will see changes quite often depending on my personal preferences, e.g. view engine changes.

## Features
- MVC Structure
- Simple user authentication/authorization using passport, passport-local, and passport-local-mongoose packages
- csrf protection using csurf
- Mongoose object modeling tool
- Examples in comments so you can learn on the way!