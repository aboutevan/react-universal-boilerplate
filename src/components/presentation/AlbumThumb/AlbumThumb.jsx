import template from './AlbumThumb.template';

if (process.env.BROWSER) {
  require('./AlbumThumb.sass');
}

const AlbumThumb = template;

export default AlbumThumb;
