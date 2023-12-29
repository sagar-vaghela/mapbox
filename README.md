# NextJS | API Integration | mapbox GL | taiwind CSS

This is a React Application with TypeScript based E-commerce app and configured with:

1. **Linters:** ESLint and Prettier.
2. **Folders:** `app`, `map`, `users`, `posts`, `assets`, `components`, `lib` and `features` (Folder Structure).
3. **Tailwind CSS:** configured Tailwind CSS for better styling.
4. **Redux-toolkit:** for state management.

## Project structure

The app has the following structure:

`app`, `map`, `users`, `posts`, `assets`, `icons`, `components`, `lib` and `features`

- `components`: Components that can be used accross the app.
- `map`: Contains mapbox map page.
- `users`: Contains users page.
- `posts`: Contains posts page and indevidual post page.
- `store`: Redux store which Contains single object with holind entire data of application.
- `icons`: Static SVG Icons.
- `lib`: Contains redux toolkit including reducers and store.
- `features`: Contains reducers that calls the APIs.

### Tasks : What I done.

1. Create NextJS Application based blogs app.
2. Used [Tailwind CSS](https://tailwindcss.com/) for design.
3. Used my own ideas for design.
4. App perform like below step:
   - Home Screen:
     - Display a list of user cards.
     - Click on a user card to navigate to the User's Posts screen.
   - User's Posts Screen:
     - Show a list of posts associated with the selected user.
     - Click on any post to go to the Post Detail Page.
   - Post Detail Page:
     - Display detailed information about the selected post.
     - All comments are listed below after the Post.
     - There is a comment form if you wish to comment on any post.
   - Map Page:
     - Can open map page by clicking 'map' from header
     - Integrate mapbox GL for map.
     - Added a marker, line and a polygon using geoJSON
5. Made app reponsive whenever i could.
6. Divide components to keep it simple. It can be improvised more.
7. Setup ESLint for Code standardization.
8. Setup Prettier for Code format.
9. WriteTechnical documentation on README.md file for better understading.

## Prerequisites

To set up the codebase and the required dependencies, simply run the following command.

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# production
$ npm run build && npm run start
```

### Notes

1. Used fetch for API call. we can also use [Axios](https://github.com/axios/axios).

### I Make sure below things for this app.

1. _Structure of the code:_ both in terms of the actual code and the organization of files/folders.
2. _Next patterns:_ efficient and well-structure code.
3. _Documentation:_ clear and well commented your code.
4. _Git processes:_ clear and well-structured your commits and commit messages are.
