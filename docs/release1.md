# Project 2 - Tunesday, a music platform

## Release 1
For release 1, the repository contains a web application for playing and displaying music. Users can view songs from different genres and artists, view their playlists in the side bar and create new playlists. We have implemented a search field where the users can search for songs when the database gets connected to the project.

### Key Features
- **Sidebar:** The playlists are displayed in the side bar, which can be hidden or visible
- **Sorting:** The songs can be sorted by artist and genre
- **Add playlist:** The user can add new playlists to the sidebar
- **Search bar:** In the search bar the users will be able to search for songs when we have connected the database in the further releases

### User stories
We selected the most essential user stories to focus on for release 1:
- As a user I want to browse songs from different genres and artists, so I can explore new music
- As a user I want to be able to view the essential information about a song, so I can learn more about the songs I like
- As i user I want an overview of my playlists, so I easily can find the list I want to listen to
- As i user I want to add new playlists, so I can listen to music for every mood
- As a user I want to be able to click on a playlist so I easily can view its content
- As a user I want a search bar so I can easily search for the songs i want to listen to

## Release 1 Project Structure
The core functionlity is implemented in the `src` folder, which contains the following structure:
- **assets:** Contains images of album covers for the songs.
- **components:** Core logic and styling for the different components displayed on the homepage.  
- **data:** Mock data for the songs in our app.
- **pages:** Contains the different pages except the main page in our app.

In the parent folder, we have files connecting main functionality to a main webpage which is run from the `main.tsx`
- [App.tsx](src/App.tsx) combines the different components onto the main webpage
- [App.css](src/App.css) styling for `App.tsx`
- [main.tsx](src/main.tsx) runs the app
- [index.css](src/index.css) styling for `main.tsx`


## For Further Releases
The user stories we want to focus on for further releases:
- As a developer I want to connect our app to a database with multiple songs, so our app can be more user friendly
- As a user I want to see some listening statistics, so I can get an overview of my listening
- As a user I want to search for songs so I easily can navigate through the apps music
- As a user I want to add songs to my playlists, so I can create playlists for every mood

## Development process
During our initial group meeting for Project 2, we brainstormed project ideas and decided to create a music platform. Later we discussed the desired features and layout for the webpage. In this release we focused on the frontend of the application. 

To structure our workflow, we set up a GitHub project with todos, issues, and milestones based on the features we aimed to implement. Tasks were divided among group members to facilitate parallel development.

We utilized Figma to plan the frontend, and used that as a guide for the development of the page. 


