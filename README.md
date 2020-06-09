# Artlist
 React on Rails full stack utilizing a RESTful JSON API. 

# PROJECT 4 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries](#libraries)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Component Estimates](#component-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**Artlist** is an online platform that allows striving artists to showcase and sell their original pieces in their own terms._


<br>

## MVP

_**Artlist** MVP_
- _Users can sign up and log in_
- _Users can browse products without logging in_
- _Products can be filtered by category_
- _Logged in users can add new products for sale_
- _Logged in users can edit and delete their own products_
- _Logged in users can see a list of their own products_
- _Users can email the artist directly if interested in purchasing the product_


<br>

### Goals

- _Implement all MVP features_
- _The app should be resposive for mobile, tablet and desktop_
- _Adhere to maintainable and scalable software development practices_


<br>

### Libraries


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Used to build the application front-end._ |
|   React Router   | _Used to manage component routes._         |
| Ruby on Rails    | _Used to create the JSON API back-end._    |


<br>

### Client (Front End)

#### Wireframes

- Mobile prototype: https://bit.ly/3gZ5Nm5

![](mobile.gif)

- Desktop prototype: https://bit.ly/2UdemQD

![](Desktop.gif)

- Tablet prototype: https://bit.ly/3dDUj5C

![](tablet.gif)




#### Component Tree

![](Diagram.png)

#### Component Hierarchy
 
``` structure

src
|__ assets/
      |__ icons
      |__ logo
      |__ mockups
|__ components/
      |__ Layout.js
      |__ Welcome.js
      |__ SignUp.js
      |__ LogIn.js
      |__ Home.js
      |__ Shared.js
              |__Product.js
              |__Category.js
      |__ Details.js
      |__ Artist.js
      |__ Create.js
      |__ Update.js
|__ services/
      |__ user.js
      |__ product.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Layout    | class      |   y   |   y   | _Contains all shared UI across all components._               |
|  Welcome     | functional |   n   |   n   | _The Welcome Page is the entry point with links for Sign Up, Log In, browse, and logo._ |
|   Sign Up    |   class    |   n   |   n   | _Contains a form that allows the user to create an account._      |
| Log In       | functional |   n   |   n   | _Contains a form that allows the user to log in._                 |
|    Home      | functional |   y   |   n   | _Displays a list of categories and products._ |
|    Details   | functional |   n   |   y   | _Provides all products information and link to artist’s page. Also provides a link to email the artist in case the user in interested in purchasing the piece._               |
|  Artist      | functional |   y   |   y   | _Displays all products posted by a specific artist._       |
|   Create     |   class    |   n   |   n   | _contains a form that allows user to post item for sale._      |
| Update       | functional |   y   |   y   | _Displays all products that belongs to the user with edit and delete capability._|
|  Product      | functional |   y   |   y   | _Displays product information._       |
|  Category      | functional |   y   |   y   | _Displays the categories that can be used as a filter._       |


#### Component Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Layout              |    M     |     4 hrs      |     0         |     TBD     |
| Welcome             |    M     |     2 hrs      |     0         |     TBD     |
| Sign Up             |    H     |     5 hrs      |     0         |     TBD     |
| Log In              |    H     |     4 hrs      |     0         |     TBD     |
| Home                |    H     |     14 hrs     |     0         |     TBD     |
| Details             |    H     |     3 hrs      |     0         |     TBD     |
| Product             |    H     |     3 hrs      |     0         |     TBD     |
| Category            |    H     |     8 hrs      |     0         |     TBD     |
| Create              |    H     |     4 hrs      |     0         |     TBD     |
| Update              |    H     |     5 hrs      |     0         |     TBD     |
| TOTAL               |          |     52 hrs     |     0         |     TBD     |



<br>

### Server (Back End)

#### ERD Model

![](BE.png)

<br>

***

## Post-MVP

- _Add Artist Profile with profile pic._
- _Implement a search feature based on price, search terms, tags, etc._
- _Add a third party purchasing so the transaction can be done within the site._




<!-- 
***
## Code Showcase 

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
-->
