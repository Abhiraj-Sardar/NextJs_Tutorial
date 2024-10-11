# NextJs_Tutorial

Next.js is an open-source js framework that is built on top of react a popular javascript library for building user interfaces. It is designed to make it easier to create server-rendered React application with a focus on developer productivity, performance, and SEO. Next.Js provides a set of tools and conventions that simplify various aspects of building web applications.

# To Create Project

```
npx create-next-app@latest
```

# To run your project

```
npm run dev
```

- **app/page.js** is the heart of our application

# Create Routing in NextJs

for each and every route in nextjs we should create a separate folder and that folder should have a file named page.js

ex:- If we want to create a Route called ***/about*** then we should have this folder structure --

***/app/about/page.js***

Then the content inside page.js will be displayed on the /about route

- Note: you should have the name of the file as page.js inside the /about(always in small letters).

# Creating Nested Routes

for example you have nested routes, like localhost:3000/**about/users** then you should follow the following folder structure

```
 /app
  |
  |-/about
       |-page.js
       |-/users
           |-page.js

```

# Working with Links

Now, links are used in client-side Navigations.

- Point: It is a good approach to have a **/component** folder which will contain all the client-side components.

Now if you want to see your frontend component in webpage then import it at **/app/layout.js**

# useRouter() Hook

this hook more or less works same like **Links**. To use this you may need to import ***import { useRouter } from "next/router";***.

To understand how it works refer the code shared in the userouter directory.

# Ignoring Routes

In nextJs we can ignore a route and also get the content of its sub routes.

to ignore a particular route, one enclose that route with () parentesis.

for this the folder structure migh look like this--

```
/app
 |-/(Ignore)
      |-/Hello
           |-page.js
```
Now if we go to **localhost:3000/Hello/** we will get the content of /Hello/page.js without mentioning **localhost:3000/Ignore/Hello/** 

for the code, please consider the code of ***(Ignore)*** directory