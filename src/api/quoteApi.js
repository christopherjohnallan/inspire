const getQuote = async () => {
  try {
    const responseQuote = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
    const quote = await responseQuote.json();
    let author = null;
    if (quote.quoteAuthor.length !== 0) {
      const responseWiki = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&exlimit=max&continue&pithumbsize=100&gsrsearch=hastemplate%3ABirth_date+${encodeURIComponent(quote.quoteAuthor)}&format=json`);
      const responseWikiJson = await responseWiki.json();
      author =
        responseWikiJson.query.pages === undefined
          ? null
          : responseWikiJson.query.pages[Object.keys(responseWikiJson.query.pages)[0]];
    }
    return {
      text: quote.quoteText,
      author:
        author === null
          ? { name: quote.quoteAuthor }
          : {
            name: quote.quoteAuthor,
            imageUri: author.thumbnail.source,
            url: `https://en.wikipedia.org/wiki/${quote.quoteAuthor}`,
            /* dateOfBirth: author.extract.substring(
              author.extract.indexOf('(') + 1,
              author.extract.indexOf('–') - 1,
            ),
            dateOfDeath: author.extract.substring(
              author.extract.indexOf('–') + 2,
              author.extract.indexOf(')'),
            ), */
          },
    };
  } catch (err) {
    console.log(`Error while getting quote: ${err}`);
    return getQuote();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getQuote };
