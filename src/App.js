import React, { PureComponent } from 'react';
import Axis from './components/Axis';
import Chart from './components/Chart';
import './App.css';

class App extends PureComponent {

  render() {
    const {data, height, width} = this.props;
    const marginTop = 30;
    return (
      <div className='App'>
        <div className='chart-wrapper'
          style={{height: height + marginTop}}>
          <Axis
            length={height}
            pips={data.range}
            vertical={true}
          />
          <Chart
            width={width}
            height={height}
            linesCount={data.range.length}
            data={data}
          />
        </div>
        <Axis
          length={width}
          pips={data.labels}
        />
        <div className='chart-year'>
          {data.year}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: React.PropTypes.object.isRequired,
  height: React.PropTypes.number,
  width: React.PropTypes.number
}

App.defaultProps = {
  height: 300,
  width: 1300
}

export default App;
