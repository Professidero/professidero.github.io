function includeElements()
{
  return new Promise(
    (resolve, reject) =>
    {
      // Appeler w3IncludeHTML
      w3IncludeHTML(
        function()
        {
          const remaining_includes_to_be_loaded = document.querySelectorAll('[w3-include-html]').length;
          if (remaining_includes_to_be_loaded === 0)
          {
            resolve();
          }
          else
          {
            reject(new Error('Error while loading HTML files'));
          }
        }
      );
    }
  );
}

function initializeMaterializeCollapsibleComponents()
{
  const elems = document.querySelectorAll('.collapsible');
  M.Collapsible.init(elems);
}

function initializeMaterializeSidenavComponents()
{
  const elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems);
}

function initializeMaterializeTabsComponents()
{
  const elems = document.querySelectorAll('.tabs');
  M.Tabs.init(elems);
}

function initializeMaterializeMaterialboxComponents()
{
  const elems = document.querySelectorAll('.materialboxed');
  M.Materialbox.init(elems);
}

function initializeMaterializeComponents()
{
  initializeMaterializeCollapsibleComponents();
  initializeMaterializeSidenavComponents();
  initializeMaterializeTabsComponents();
  initializeMaterializeMaterialboxComponents();
}

function initializeMaterializeComponentsAfterLoading()
{
  includeElements()
    .then(
      () =>
      {
        console.log('Content successfully loaded');
        initializeMaterializeComponents();
      }
    )
    .catch(
      error =>
      {
        console.error('Loading error :', error);
      }
    );
};
