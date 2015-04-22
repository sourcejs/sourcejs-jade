Jade support for SourceJS
===============

[SourceJS](http://sourcejs.com) middleware to support [Jade](http://jade-lang.com/) markup language (`*.jade`) instead of native `*.src`.

## Install

To install, run npm in `sourcejs/user` folder:

```
npm install sourcejs-jade --save
```

Then restart your SourceJS application, middleware will be loaded automatically.

## Usage

After installing middleware, instead of `index.src` pages, you can `index.jade` files with Jade markup.

index.jade

```
h1 Jade - node template engine

#container.col
    p.
        Jade is a terse and simple
        templating language with a
        strong focus on performance
        and powerful features.
```