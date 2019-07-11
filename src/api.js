//https://jsonplaceholder.typicode.com/todos/1

const HOST = 'https://jsonplaceholder.typicode.com';

//eslint-disable-next-line import/prefer-default-export
export function getTicker(pair) {
  return fetch(`${ HOST }/todos/${ pair }`)
    .then((response) => response.json())
    .then(({ title }) => title);
}

/*fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });*/

// let myRequest = new Request('flowers.jpg');

/*fetch(myRequest)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('HTTP error, status = ' + response.status);
      }
      return response.blob();
    })
    .then(function(response) {
      let objectURL = URL.createObjectURL(response);
      myImage.src = objectURL;
    });*/

/*fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then((response) => {
    console.debug(response);
    // ...
  })
  .catch((error) => {
    console.error(error);
  });*/

//https://css-tricks.com/using-fetch/

/*fetch('https://api.github.com/users/chriscoyier/repos')
  .then((response) => response.json())
  .then((data) => {
    // Here's a list of repos!
    console.log(data);
  });*/

/*fetch('./api/some.json')
  .then(function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }

    // Examine the text in the response
    response.json().then(function(data) {
      console.log(data);
    });
  })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });*/
