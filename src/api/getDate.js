export const getDate = () => (
  fetch("https://countries.trevorblades.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ query: "{ continents { name countries { name languages { name } } } }" })
    })
      .then(res => res.json())
      .then(res => res.data.continents)
);
