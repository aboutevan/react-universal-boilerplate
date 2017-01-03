import React, { Component } from 'react';
// import scaleToWindow from 'utils/scaleToWindow.utils';

export default class HeroCanvas extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    // scripts called in componentDidMount will not execute
    // until after component is rendered. This means we can
    // use scripts meant for use in browser in our server-side
    // apps - the scripts won't be passed to our Node server and
    // result in undefined errors - not the greatest solution, but
    // all I could find at this time
    const PIXI = require('pixi.js');
    this.pixi = PIXI;

    // create renderer
    this.renderer = PIXI.autoDetectRenderer(document.body.clientWidth, window.innerHeight);

    // append it to component
    this.component.appendChild(this.renderer.view);
    // scaleToWindow(this.renderer.view);
    window.addEventListener('resize', () => {
      this.renderer.view.width = document.body.clientWidth;
      // this.renderer.view.height = document.body.clientHeight;
      // scaleToWindow(this.renderer.view);
    });
    this.stage = new PIXI.Container();
    this.pixiAddItemstoLoader();
    this.pixiLoadLoader();

    this.pixiRender();

    if (module.hot) {
      module.hot.dispose(() => {
        this.component.removeChild(this.renderer.view);
      });
    }
  }
  pixiAddItemstoLoader() {
    const PIXI = this.pixi;

    if (process.env.NODE_ENV === 'development') {
      PIXI.loader.reset();
    }
    PIXI.loader
      .add('../img/M.png');
  }
  pixiLoadLoader() {
    const PIXI = this.pixi;
    const staging = this.pixiStaging;
    // console.log(staging, 'from loadloader');
    PIXI.loader
      .load(staging.bind(this));
  }
  pixiStaging() {
    const PIXI = this.pixi;
    let i = 0;
    const texture = PIXI.loader.resources['../img/M.png'].texture;
    while (i < 10) {
      i += 1;
      const sprite = new PIXI.Sprite(texture);
      sprite.x = 64 + i;
      sprite.y = 135 + i;
      this.stage.addChild(sprite);
      // console.log(sprite);
    }
    const canvas = this.component.firstChild;
    console.log(canvas);
    // console.log(this.renderer.plugins);
    // this.renderer.plugins.interaction.onMouseOver(() => {
    //   console.log('im over');
    // });
  }
  pixiRender() {
    this.renderer.render(this.stage);
    this.frame = requestAnimationFrame(this.pixiRender.bind(this));
  }
  render() {
    return (
      <div
        className="hero-canvas"
        ref={(component) => { this.component = component; }}
      />
    );
  }
}
