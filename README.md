# T08-Project-2
This project was developed by my team and I for the course IT2810 Web Development. You can read more about the application and process below.

# Project 2 - Tunesday, a music platform
[Open in Virtual Machine](http://it2810-08.idi.ntnu.no/project2)

## Group information
- **Group No:** 8
- **Participants:** Ailin Anjadatter Tinglum, Cecilia Lie, Live Stamnes Dyrland, Nhung Pham

## Technology Stack
The project is built with:

- TypeScript
- CSS
- React
- Vite
- Node v.24.6.X+
- npm v11.+.

## Overview
This repository contains a web application for playing and displaying music. Users can view songs from different genres and artists, view their playlists in the side bar and create new playlists. We have implemented a search field where the users can search for songs they like. The users can add songs to their playlists.

## Project Structure
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

## Use of AI
We utilized AI-based tools, including Claude Sonnet 4 and ChatGPT, to enhance our efficiency and accuracy while implementing complex features. AI assistance was particularly beneficial during the initial stages of the project for exploring recommended approaches.

## How to Run the Project
To run the project locally, follow these steps:

1. Navigate to the `Prosjekt-2` folder:

   ```bash
   cd Prosjekt-2
   ```

2. Install the necessary packages:

   ```bash
   npm install
   npm install @tanstack/react-query
   npm install @tanstack/react-query-devtools
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
