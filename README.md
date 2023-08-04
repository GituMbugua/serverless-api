# IMDb Movie Scraper, API, and Website

This is a Google Apps Script project that scrapes movie data from the IMDb website and exposes an API endpoint using data from a Google Spreadsheet to retrieve the movie data in JSON format.

## Features

- The script scrapes movie data from the IMDb website, including movie titles, years, lengths, images, ratings, descriptions, and votes.
- It uses Cheerio to parse the HTML of the IMDb website.
- The movie data is then written to a Google Sheet named "Movies" with appropriate headers.
- The script integrates with the OMDB API to fetch movie poster images based on movie titles and updates the "Movies" Google Sheet with the image URLs.
- The Google Apps Script project also exposes an API endpoint that returns the movie data from the "Movies" Google Sheet in JSON format.

## How to Use

1. Clone or download this repository to your local machine.

2. Open your Google Apps Script project:
   - Go to https://script.google.com/
   - Click on the "New Project" button.
   - Copy and paste the contents of the `.gs` script files from this repository into separate script files in your project.

3. Replace `YOUR_OMDB_API_KEY` in the `scrapeImdbMovies()` function with your actual OMDB API key. You can obtain the API key from http://www.omdbapi.com/apikey.aspx.

4. Deploy the Google Apps Script project as a web app:
   - Click on the "Deploy" menu in your Google Apps Script project.
   - Select "New Deployment."
   - Choose "Web app" as the type of deployment.
   - Choose "Anyone, even anonymous" as the "Who has access" option.
   - Click "Deploy."

5. After deploying, you will get a URL for the API endpoint. Use this URL to access the movie data in JSON format.

6. To scrape IMDb movies and update the Google Sheet, run the `scrapeImdbMovies()` function from the Google Apps Script editor or set up a trigger to automatically run the function at a specific time interval.

## Dependencies

- Google Apps Script: The script runs on Google Apps Script, which provides the environment to run JavaScript-based scripts in Google Workspace (Google Sheets, Google Drive, etc.).
- Cheerio: The Cheerio library is used to parse the HTML of the IMDb website and extract movie data.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
