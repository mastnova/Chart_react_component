import React, { PureComponent } from 'react';


class Tooltip extends PureComponent {

  dateToText(date) {
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${date.day} ${months[date.month - 1]} ${date.year}`;
  }

  render() {
    const data = this.props.data;
    const date = this.dateToText(data.date);

    let delta = '';
    if(data.delta) {
      delta = <span className={data.delta < 0 ? 'negative-delta' : 'positive-delta'}>
                {data.delta.toLocaleString()}
              </span>
    }

    const tooltipClass = this.props.visibility === 'visible' ? 'tooltip' : 'tooltip hide'

    const margin = 5;
    const marginTop = 70;
    const reverseMargin = 135;
    const leftPositon = this.props.reverse ?
      this.props.left - reverseMargin
      : this.props.left + margin;

    return (
      <div className={tooltipClass}
        style={{
          left: leftPositon,
          top: this.props.top - marginTop
        }}>
        <div className='date'>
          {date}
        </div>
        <span className='rate'>
          {`$ ${data.rate.toLocaleString()}`}
        </span>
        {delta}
      </div>
    );
  }
}

Tooltip.defaultProps = {
    data: {
      date: {
        day: 1,
        month: 1,
        year: 1
      },
      rate: 0,
      delta: 0
    }
  }

export default Tooltip;
