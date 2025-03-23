// Liste des fichiers de projets à charger
const projects = [
  'cpooa',
  'demonio',
  'pacmangdx',
  'petitsnains',
  'spacelink',
  'streamlauncher',
  'travellingsalesman',
  'wellsimulator'
];

const projects_url = 'projects'
const project_file_extension = 'html'

function insertProjects()
{
  projects.forEach
  (
    project =>
    {
      const project_url = `${projects_url}/${project}.${project_file_extension}`;
      const container = document.getElementById(project);
      fetch(project_url).then
      (
        response =>
        {
          if (!response.ok)
          {
            throw new Error(`Error loading ${project_url}`);
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
          container.innerHTML += `<p>Error while loading ${project}.</p>`;
        }
      );
    }
  );
}

// Charger les projets au démarrage de la page
window.onload = insertProjects;
