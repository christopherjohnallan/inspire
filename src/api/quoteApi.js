/* const getQuote = () =>
  fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
    // response object has shape {quoteText, quoteAuthor}
    .then(responseQuote => responseQuote.json())
    .then(responseQuoteJson =>
      (responseQuoteJson.quoteAuthor.length > 0
        ? fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&exlimit=max&continue&pithumbsize=100&gsrsearch=hastemplate%3ABirth_date+${encodeURIComponent(responseQuoteJson.quoteAuthor)}&format=json`)
          .then(responseWiki => responseWiki.json())
          .then((response) => {
            const res = response.query.pages[Object.keys(response.query.pages)[0]];
            return {
              text: responseQuoteJson.quoteText,
              author: {
                name: responseQuoteJson.quoteAuthor,
                imageUri: res.thumbnail.source,
                url: '',
                dateOfBirth: res.extract.substring(
                  res.extract.indexOf('(') + 1,
                  res.extract.indexOf('–') - 1,
                ),
                dateOfDeath: res.extract.substring(
                  res.extract.indexOf('–') + 2,
                  res.extract.indexOf(')'),
                ),
              },
            };
          })
        : { text: responseQuoteJson.quoteText, author: {} })); */

const getQuote = async () => {
  try {
    const responseQuote = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json');
    const quote = await responseQuote.json();
    const responseWiki = await fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&exlimit=max&continue&pithumbsize=100&gsrsearch=hastemplate%3ABirth_date+${encodeURIComponent(quote.quoteAuthor)}&format=json`);
    const responseWikiJson = await responseWiki.json();
    const author =
      responseWikiJson.query.pages === undefined
        ? null
        : responseWikiJson.query.pages[Object.keys(responseWikiJson.query.pages)[0]];
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

/* https://en.wikipedia.org/w/api.php?&
action=query
generator=search
gsrnamespace=0
gsrlimit=20
prop=pageimages|extracts
pilimit=max
exintro
exsentences=1
exlimit=max
continue
pithumbsize=100
gsrsearch=hastemplate::Birth_date+Albert Einstein
format=json */
