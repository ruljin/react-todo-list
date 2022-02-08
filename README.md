# React Todo List

## Table of contents

- [General info](#general-info)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## General info

This project is a todo list app. The application allows to create a list of the so-called todo's.
Input at the top is used to enter the name of the new todo. The buttons below it allow you to clear the content of the input or add a new todo based on the value entered into it. The add button is disabled as long as the input is empty. Additionally, when a new todo is added, the input is cleared.
The list of created todos is represented by cards containing the content of the given todo and two buttons.
The button with a trash can icon is used to remove a todo from the list. The button with the check icon allows you to mark the todo as done. This button is disabled for todos marked as done. Additionally, in order to distinguish between todo in progress and done todo, the latter differ in color when their status equals 'done'.

<img src="https://res.cloudinary.com/dox1tzpb0/image/upload/v1644339044/todo_l8esa0.jpg">

## Features

The main page contains a todo list app with:

- input for entering a new todo name,
- button for adding new todo from input value (disabled, when input is empty),
- button for clearing input value,
- clearing input value after adding new todo,
- list of created todo's displayed as cards with text and two buttons,
- button for setting todo as completed (disabled, when todo status is equal to 'done'),
- button for removing todo from the list,
- changing color of todo with status 'done'.

## Technologies

- HTML,
- CSS,
- JS,
- React.js.

## Setup

If you want to run the application on the local machine, follow these steps:

1. Clone down this repository
2. Install dependencies with the command: `npm install`
3. Start development server with the command: `npm start`

The application will be available at `localhost:3000` to view in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.
