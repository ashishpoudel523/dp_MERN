fetch("https://google.com")
  .then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkAayena) => console.log(networkAayena.messagee)
  )
  .then((jsonResponse) => {});
