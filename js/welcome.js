$(document).ready(
  function()
  {
    const container = document.getElementById('welcome');
    const url = 'welcome.html';
    fetch(url).then
    (
      response =>
      {
        if (!response.ok) {
          throw new Error(`Error loading ${url}`);
        }
        return response.text();
      }
    )
    .then
    (
      data =>
      {
        container.innerHTML += data;
      }
    )
    .catch
    (
      error =>
      {
        console.error('Error:', error);
        container.innerHTML += `<p>Error while loading welcome.</p>`;
      }
    );
  }
);
