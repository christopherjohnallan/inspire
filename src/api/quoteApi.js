const getQuote = () =>
  /* fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
    method: 'get',
    dataType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json());
  // response object has shape {quoteText, quoteAuthor} */

  fetch('https://en.wikipedia.org/w/api.php?&origin=*&action=query&generator=search&gsrnamespace=0&gsrlimit=1&prop=pageimages|extracts&pilimit=max&exintro&exlimit=max&continue&pithumbsize=100&gsrsearch=hastemplate%3ABirth_date+Ralph%20Waldo%20Emerson&format=json')
    .then(response => response.json())
    .then((response) => {
      const res = response.query.pages[Object.keys(response.query.pages)[0]];
      return {
        image: res.thumbnail.source,
        dateOfBirth: res.extract.substring(
          res.extract.indexOf('(') + 1,
          res.extract.indexOf('–') - 1,
        ),
        dateOfDeath: res.extract.substring(res.extract.indexOf('–') + 2, res.extract.indexOf(')')),
      };
    });

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
