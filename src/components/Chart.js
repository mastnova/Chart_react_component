import React, { PureComponent } from 'react';
import Grid from './Grid';
import GraphPath from './GraphPath';
import Tooltip from './Tooltip';
import Projection from './Projection';

class Chart extends PureComponent {

  state = {
    cx: 0,
    cy: 0,
    visibility: 'hidden',
    tooltipReverse: false
  }

  xCoords = []

  createPoints() {
    this.info = {};
    let points = [];
    const days = 30;
    const data = this.props.data;
    const labelsCount = data.labels.length;
    const range = data.range[data.range.length - 1] - data.range[0];

    const stepY = this.props.height / range;
    const stepX = (this.props.width / labelsCount) / days;

    data.records.forEach((record, i) => {

      const x = ((record.date.month - 1) * days + (record.date.day - 1)) * stepX;
      const y = this.props.height - record.rate * stepY;

      this.info[x] = {...record, y}
      this.xCoords.push(x);

      points.push([x, y]);
    })
    return points;
  }

  onMouseMove(e) {
    const tolltipWidth = 110;
    let tooltipReverse = false;
    const mouseX = e.nativeEvent.offsetX;
    const x = this.xCoords.reduce( (prevX, x) => {
      if(mouseX <= x) {
        return (x - mouseX) > (mouseX - prevX) ? prevX : x;
      } else {
        return x;
      }
    }, 0);
    if((this.props.width - x) < tolltipWidth) {
      tooltipReverse = true;
    }
    this.setState({
      cx: x,
      cy: this.info[x].y,
      info: this.info[x],
      tooltipReverse
    });
  }

  onMouseEnter(e) {
    this.setState({visibility: 'visible'});
  }

  onMouseLeave(e) {
    this.setState({visibility: 'hidden'});
  }

  render() {
    const points = this.createPoints();
    const {height, width} = this.props;
    return (
      <div className='svg-wrapper'
        onMouseMove={this.onMouseMove.bind(this)}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}>
        <svg width={width} height={height}>
          <Grid
            height={height}
            width={width}
            linesCount={this.props.linesCount}
          />
          <GraphPath data={points}/>
          <Projection
            height={height}
            x={this.state.cx}
            y={this.state.cy}
            visibility={this.state.visibility}
          />
        </svg>
        <Tooltip
          data={this.state.info}
          left={this.state.cx}
          top={this.state.cy}
          reverse={this.state.tooltipReverse}
          visibility={this.state.visibility}
        />
      </div>
    );
  }
}

Chart.propTypes = {
   width: React.PropTypes.number.isRequired,
   height: React.PropTypes.number.isRequired,
   linesCount: React.PropTypes.number.isRequired,
   data: React.PropTypes.object.isRequired
}

export default Chart;
