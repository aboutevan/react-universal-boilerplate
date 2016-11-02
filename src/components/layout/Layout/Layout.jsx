import template from './Layout.template';

if (process.env.BROWSER) {
  require('../../../core/sass/all.core.sass');
}

const Layout = template;

export default Layout;
