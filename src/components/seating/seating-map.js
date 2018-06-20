  import React, { Component } from 'react';

export default class SeatingMap extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.renderPlan = this.renderPlan.bind(this);
  }

  renderSeat(ctx, x, y, colour) {
    ctx.fillStyle = colour;
    ctx.strokeStyle = colour;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x,y,4,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  renderShape(ctx, x, y, w, h, colour) {
    x -= w / 2;
    y -= h / 2;
    ctx.strokeStyle = colour;
    ctx.rect(x, y, w, h);
    ctx.stroke();
  }

  renderText(ctx, x, y, text, size, colour) {
    y += size / 2;
    ctx.fillStyle = colour;
    ctx.font = size + "px Arial";
    ctx.textAlign="center";
    ctx.fillText(text, x, y);
  }

  renderPlan(context, seatingData) {
    let ctx = context;
    let seats = seatingData.seats;
    for (let seat in seats) {
      let x = seats[seat].x;
      let y = seats[seat].y;
      this.renderSeat(ctx, x, y, '#ccc');
    }

    seatingData['text-elements'].forEach(text => {
      let x = text.x
      let y = text.y
      let content = text.content;
      let size = text.size;
      this.renderText(ctx, x, y, content, size, '#444');
    });

    seatingData.shapes.forEach(shape => {
      let x = shape.x
      let y = shape.y
      let w = shape.width;
      let h = shape.height;
      this.renderShape(ctx, x, y, w, h, '#444');
    });
  }

  componentDidMount() {
    if (this.props.seatingData) {
      let context = this.canvas.current.getContext('2d');
      this.renderPlan(context, this.props.seatingData);
    }
  }

  render() {
    if (this.props.seatingData) {
      var width = this.props.seatingData.width;
      var height = this.props.seatingData.height;
    }
    return (
      <div className="seating-map">
        <canvas width={width ? width : 500} height={height ? height : 500} ref={this.canvas}></canvas>
      </div>
    );
  }
}
