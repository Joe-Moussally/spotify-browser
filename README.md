> To get a local copy up and running follow these simple example steps.

### Prerequisites

- Download and install [Node.js](https://nodejs.org/en/)

- npm
  ```sh
  npm install npm@latest -g
  ```
- Get the client secret an client id by creating a developers account on Spotify, follow this [link](https://developer.spotify.com/documentation/web-api/tutorials/getting-started) on how to get started.

### Installation

1. Once you have the client id and secret, clone the repo
   ```sh
   git clone https://github.com/Joe-Moussally/spotify-browser.git
   ```
2. Navigate to the project folder and install dependencies
   ```sh
   cd spotify-browser
   npm install
   ```
3. Before running the project, make sure you include the client id and secret in a .env file following the .env.example file like so

   ```sh
   REACT_APP_SPOTIFY_CLIENT_ID="client_id_here"
   REACT_APP_SPOTIFY_CLIENT_SECRET="secret_id_here"
   ```

4. Run the start up command
   ```sh
   npm start
   ```
