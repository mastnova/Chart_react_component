import React, { PureComponent } from 'react';

class Axis extends PureComponent {

  render() {
    const pipsCount = this.props.pips.length;
    let axisClass, length, chunkSize;

    if(this.props.vertical) {
      axisClass = 'y-axis';
      const marginTop = 100;
      length = {height: this.props.length + marginTop};
      const height = this.props.length / (pipsCount - 1);
      chunkSize = {height};
    } else {
      axisClass = 'x-axis';
      length = {width: this.props.length};
      const width = this.props.length / pipsCount;
      chunkSize = {width};
    }

    return (
      <div className={axisClass} style={length}>
        {
          this.props.pips.map( (pip, i) => {
            const size = i === (pipsCount - 1) ? {} : chunkSize;
            return (
              <div className='axis-pip'
                key={i}
                style={size}>
                  {pip}
              </div>
            )
          })
        }
      </div>
    );
  }
}

Axis.propTypes = {
  length: React.PropTypes.number.isRequired,
  pips: React.PropTypes.array.isRequired,
  vertical: React.PropTypes.bool
}

Axis.defaultProps = {
  vertical: false
}

export default Axis;
