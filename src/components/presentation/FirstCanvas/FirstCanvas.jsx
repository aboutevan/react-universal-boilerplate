import React, { Component } from 'react';

export default class FirstCanvas extends Component {
  componentDidMount() {
    const PIXI = require('pixi.js');
    this.renderer = PIXI.autoDetectRenderer(250, 250);
    this.canvas.appendChild(this.renderer.view);
    this.stage = new PIXI.Container();
    const circle = new PIXI.Graphics();

    PIXI.loader
      .add('../img/M.png');

    const setup = () => {
      const sprite = new PIXI.Sprite(
        PIXI.loader.resources['../img/M.png'].texture
      );
      this.stage.addChild(sprite);
      this.renderer.render(this.stage);
    };

    PIXI.loader.load(setup);

    circle.beginFill(0x9966FF);
    circle.drawCircle(0, 0, 32);
    circle.endFill();
    circle.x = 64;
    circle.y = 130;
    this.stage.addChild(circle);
  }
  render() {
    return (
      <div
        className="first-canvas"
        ref={(canvas) => { this.canvas = canvas; }}
      />
    );
  }
}
