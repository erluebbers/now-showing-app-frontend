The Now Showing App is a demonstration of full Crud with a Sinatra backend and React frontend. Using fake seed data, this site simulates an app for finding movies and theaters within Seattle.

CRUD actions include:
- Reporting a Theater as closed
- Adding a new movie that has been released at a particular theater
- deleting a movie that is no longer playing
- Listing available movies and theaters.

Component Hierarchy:

App
  |- Intro
  |- TheaterSelect
    |- TheaterList
      |- TheaterCard
  |- MovieSelect
    |- MovieList
      |- MovieCard