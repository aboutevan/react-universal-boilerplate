import template from './Layout.template';

if (process.env.BROWSER) {
  require('./Layout.sass');
}

const Layout = template;

export default Layout;
