function fetchSimpsonsQuotesJSON() {
    // Feel free to download this HTML and edit it, to use another Pokemon ID
    const url = `https://simpsons-quotes-api.herokuapp.com/quotes/`;
    axios.get(url)
        .then(function (response) {
            return response.data; // response.data instead of response.json() with fetch
        })
        .then(function (simpsons) {
            console.log('data decoded from JSON:', simpsons);

            // Build a block of HTML
            const simpsonsHtml =
                `<p><strong>${simpsons[0].character}</strong></p>
                <img src=${simpsons[0].image}/>
        <p><strong>${simpsons[0].quote}</strong></p>`
            document.querySelector('#simpsons-quotes').innerHTML = simpsonsHtml;
        });
}

fetchSimpsonsQuotesJSON();