# Trumpet Tech Test

This project has been created with [Next.js](https://nextjs.org), leveraging the app router. The app has been seperated with two additional folders, components and contexts.

Unit testing has been integrated within this project using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Application Structure:

`Components`: A singular directory housing individual building block components used to create the application. Each of these are accompanied with a unit test in their directories.

`Contexts`: This directory contains the `CreateOrViewWidgetContext`. This file utilises React's ContextAPI, where all the logic for creating and updating a widget is stored. This also has it's own individual unit test.

## Running the application

First, install the dependancies of the project using `npm install`. This should populate your `node_modules` and will allow the project to run.

After installation is successful - the project can be ran using `npm run dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser of choice to view the bundled application. A singular button should be visible prompting to add a widget.

### Running Unit Tests

A script is available to run all tests via your terminal of choice. After navigating to the root directory of this project, running `npm run test` in the command line will run the unit tests.

### Future considerations

If there was further time for this project, the following implementations would be considered:

1. Allowing for Drag and Drop between Widgets

Implementing the above would allow users to prioritise widgets quickly without manually having to change the text. This would be a more interactive element of the application which makes it easier to use for those creating widgets.

2. Expanding Widgets to have a type

The brief of this project was to include basic text widgets, however this could be limiting for users. Widgets could have various types of content within them such as images, videos or tables. A future consideration would be to consider widgets to have the ability to have various types of content which would include extending the `TWidget` to include a `type` attribute.

3. Animations

Upon a widget creation, this simply pops onto the page quite aburptly. I would choose to add some simple animation when a new widget appears on the window for aesthetic purposes.

4. Styling considerations when editing widget content

There is currently no visual indication that when the text content of the widget is being edited. This could be improved upon by some small styling elements added such as:

- Upon widget selection, exisiting content could change to be a different colour to show it is not being edited
- Border could be added in line with branding.

5. API Integration

There is the possibility to include a BE to store and update the widgets. The DB in this instance could be either SQL or noSQL and could leverage React's newer features such as `useSWR` to fetch data whilst prioriting cache first.

An alternative approach in updating a widget content could also include the usage of React's `useTransition` hook. This could provide some visual display on when the widget is being saved in the database. We also could consider if the page behaviour should include waiting before the save is complete before allowing another widget to be edited or not by using this hook.
