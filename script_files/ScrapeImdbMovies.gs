function scrapeImdbMovies() {
  const response = UrlFetchApp.fetch('https://www.imdb.com/search/title/?title_type=feature&genres=action')
  response.getContentText()
  const html = response.getContentText();

  var $ = Cheerio.load(html);

   // Create or open the "Movies" Google Sheet
  var sheetName = "Movies";
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName);

  // Clear existing content in the sheet
  sheet.clear();

  // Set up headers
  var headers = ["Title", "Year", "Length", "Image", "Rating", "Link", "Description", "Votes"];
  sheet.appendRow(headers);

  // Find all movie elements
  var movieElements = $("div.lister-item");

  var movies = [];

  movieElements.each(function () {
    var title = $(this).find('.lister-item-header a').text().trim();
    var year = $(this).find('.lister-item-year').text().trim().replace('(', '').replace(')', '');
    var length = $(this).find('.runtime').text().trim();
    // var image = $(this).find('.lister-item-image img').attr('src');
    var rating = $(this).find('.ratings-bar .ratings-imdb-rating strong').text().trim();
    var link = "https://imdb.com" + $(this).find('.lister-item-header a').attr('href');
    var description = $(this).find('.lister-item-content p.text-muted').last().text().trim();
    var votes = $(this).find('[name="nv"]').data('value');
    
    // Fetch image from OMDB API
    var omdbApiResponse = UrlFetchApp.fetch('http://www.omdbapi.com/?apikey=< YOUR_OMDB_API_KEY >' + encodeURIComponent(title));
    var omdbData = JSON.parse(omdbApiResponse.getContentText());

    // Get the poster image URL from the OMDB data
    var image = omdbData.Poster || '';

    movies.push([title, year, length, image, rating, link, description, votes]);
  });
    // Append all movie details to the sheet in one operation for better performance
    sheet.getRange(2, 1, movies.length, movies[0].length).setValues(movies);
}