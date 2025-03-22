# UCSC Rocket Team

Official webpage of the Rocket Team at the University of California, Santa Cruz.

## Previewing the Website

To preview the website locally before deploying, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository:
   ```sh
   git clone https://github.com/UCSCRocketry/site.git
   cd site
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```
5. Open your browser and go to `http://localhost:3000/` to view the website.

## Deploying to GitHub Pages

This website is deployed using GitHub Pages. To deploy the latest version:

1. Ensure all changes are committed and pushed to the `main` branch.
2. Run the deployment command:
   ```sh
   npm run deploy
   ```
3. The website will be updated at:
   ```
   https://UCSCRocketry.github.io/site/
   ```

## Additional Notes

- The `npm run deploy` command builds the project and pushes the output to the `gh-pages` branch.
- Ensure GitHub Pages is enabled in the repository settings under `Settings > Pages`.
- If the site does not update immediately, wait a few minutes and refresh.

For any issues, feel free to open an issue in the repository.
