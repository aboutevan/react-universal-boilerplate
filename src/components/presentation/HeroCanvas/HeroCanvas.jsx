import React, { Component } from 'react';
// import scaleToWindow from 'utils/scaleToWindow.utils';

export default class HeroCanvas extends Component {
  constructor(props) {
    super(props);

    // dispose of appended elements while hot reloading
    if (module.hot) {
      module.hot.dispose(() => {
        this.component.removeChild(this.renderer.view);
      });
    }
  }
  componentDidMount() {
    // scripts called in componentDidMount will not execute
    // until after component is rendered. This means we can
    // use scripts meant for use in browser in our server-side
    // apps - the scripts won't be passed to our Node server and
    // result in undefined errors - not the greatest solution
    const PIXI = require('pixi.js');

    PIXI.utils.skipHello(); // disable pixi banner in console
    this.pixi = PIXI;

    // create renderer
    this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    const canvas = this.renderer.view;
    // scaleToWindow(this.renderer.view);

    // append it to component
    this.component.appendChild(canvas);

    this.stage = new PIXI.Container();
    this.spriteContainer = new PIXI.Container();
    this.stage.addChild(this.spriteContainer);

    this.pixiAddItemstoLoader();
    this.pixiLoadLoader();

    this.pixiRender();

    // resize events
    window.addEventListener('resize', () => {
      this.renderer.resize(window.innerWidth, window.innerHeight);
      // scaleToWindow(this.renderer.view);
    });
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
    const canvasW = this.renderer.view.width;
    const canvasH = this.renderer.view.height;
    // let i = 0;
    const texture = PIXI.loader.resources['../img/M.png'].texture;
    const sprite = new PIXI.Sprite(texture);
    this.spriteContainer.addChild(sprite);
    sprite.x = canvasW * 0.1;
    sprite.y = canvasH * 0.5;
    sprite.scale.x = 0.5;
    sprite.scale.y = 0.5;
    // sprite.y = '64%';
    // while (i < 10) {
    //   i += 1;
    //   const sprite = new PIXI.Sprite(texture);
    //   sprite.x = 64 + i;
    //   sprite.y = 135 + i;
    //   this.stage.addChild(sprite);
    //   // console.log(sprite);
    // }
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
