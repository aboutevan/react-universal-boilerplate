export default (c, bgColor) => {
  const backgroundColor = bgColor || '#9C3539';
  const canvas = c;
  let center;

  // 1. Scale the canvas to the correct size
  // Figure out the scale amount on each axis
  const scaleX = window.innerWidth / canvas.offsetWidth;
  const scaleY = window.innerHeight / canvas.offsetHeight;

  // Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
  const scale = Math.min(scaleX, scaleY);
  canvas.style.transformOrigin = '0 0';
  canvas.style.transform = `scale(${scale})`;
  console.log(scaleX);

  // 2. Center the canvas.
  // Decide whether to center the canvas vertically or horizontally.
  // Wide canvases should be centered vertically, and
  // square or tall canvases should be centered horizontally
  if (canvas.offsetWidth > canvas.offsetHeight) {
    console.log('width greater than height');
    if (canvas.offsetWidth * scale < document.body.clientWidth) {
      console.log('horizontally');
      center = 'horizontally';
    } else {
      console.log('vertically');
      center = 'vertically';
    }
  }
  if (canvas.offsetWidth < canvas.offsetHeight) {
    console.log('ehight greater than width');
    if (canvas.offsetHeight * scale < document.body.clientHeight) {
      center = 'vertically';
    } else {
      center = 'horizontally';
    }
  }

  // Center horizontally (for square or tall canvases)
  if (center === 'horizontally') {
    const margin = ((document.body.clientWidth - canvas.offsetWidth) * scale) / 2;
    canvas.style.marginTop = 0;
    canvas.style.marginBottom = 0;
    canvas.style.marginLeft = `${margin}px`;
    canvas.style.marginRight = `${margin}px`;
  }

  // Center vertically (for wide canvases)
  if (center === 'vertically') {
    const margin = ((document.body.clientHeight - canvas.offsetHeight) * scale) / 2;
    canvas.style.marginTop = `${margin}px`;
    canvas.style.marginBottom = `${margin}px`;
    canvas.style.marginLeft = 0;
    canvas.style.marginRight = 0;
  }

  // 3. Remove any padding from the canvas  and body and set the canvas
  // display style to 'block'
  canvas.style.paddingLeft = 0;
  canvas.style.paddingRight = 0;
  canvas.style.paddingTop = 0;
  canvas.style.paddingBottom = 0;
  canvas.style.display = 'block';

  // 4. Set the color of the HTML body background
  document.body.style.backgroundColor = backgroundColor;

  // Fix some quirkiness in scaling for Safari
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('safari') !== -1) {
    if (ua.indexOf('chrome') > -1) {
      // Chrome
    } else {
      // Safari
      // canvas.style.maxHeight = '100%';
      // canvas.style.minHeight = '100%';
    }
  }

  // 5. Return the `scale` value. This is important, because you'll nee this value
  // for correct hit testing between the pointer and sprites
  return scale;
};
