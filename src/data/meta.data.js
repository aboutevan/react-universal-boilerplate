export default (path) => {

  const metas = [
    {
      path: '/',
      title: "title from index",
      description: "this description is coming from the index page"
    },
    {
      path: '/about',
      title: "title from about",
      description: "this description is coming from the about page"
    },
    {
      path: '/404',
      title: "Page Not Found",
      description: "Sorry, this page was not found."
    }
  ];


  const singleMeta = metas.filter(obj => {
    if (path === obj.path) {
      return obj;
    }
  });

  return singleMeta;

};