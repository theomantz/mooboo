# mooboo

[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

## 1. Overview
mooboo (abbr. mood board) is a fully function full stack clone of the popular
'inspiration' website Pinterest.

mooboo is built with a Rails backend and a React frontend, utilizing a loose
back to front api-style integration.


### Live Site: [Mooboo](mooboo.io)



## 2. Key Features

* User Authentication / Demo User:
    New users are created and assigned a password using the BCrypt gem utilizing 
    the blowfish hashing algorithm.

* Pin Index:
    One of the key features of the app is the 'masonry grid' style layout which is 
    a ubiquitous feature of Pinterest. 
    [Pin Index](app/assets/images/pin-index.png)

* Pins:
    Users have the ability to create pins, and save them to boards. Users can also
    delete pins that they have created
    [Pin Index](app/assets/images/pin-show.png)

* Boards:
    Users have the ability to create and edit boards and save pins to the created boards. Users can also delete remove pins from their created boards as well as delete the boards
    entirely.
    [Pin Index](app/assets/images/pin-show.png)

* Follows:
    Users can follow and unfollow one another.
