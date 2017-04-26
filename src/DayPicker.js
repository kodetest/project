import React, { Component } from 'react';
import moment from 'moment';
import './DayPicker.css';

class DayPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment().locale('ru').format('MMMM'),
      days: [],
      startdate: 0,
      cntdays: 15,
      selectedDate: -1,
    };
  }
  componentDidMount() {
    this.getDays();
  }
  getDays() {
    const days = [];
    for (
      let i = this.state.startdate;
      i < this.state.startdate + this.state.cntdays;
      i++
    ) {
      days.push(i);
    }
    this.setState({
      days: days,
    });
  }
  onScroll() {
    const percent = this.div.scrollLeft /
      (this.div.scrollWidth - this.div.clientWidth);

    const month = moment()
      .locale('ru')
      .add(
        this.state.startdate + ~~(percent * 100 / this.state.cntdays * 2),
        'days'
      )
      .format('MMMM');

    if (percent === 1) {
      this.setState({ startdate: this.state.startdate + 1 });
      this.getDays();
      this.div.scrollLeft = (this.div.scrollWidth - this.div.clientWidth) /
        100 *
        80;
    } else if (percent === 0 && this.state.startdate >= 0) {
      this.setState({ startdate: this.state.startdate - 1 });
      this.getDays();
      this.div.scrollLeft = (this.div.scrollWidth - this.div.clientWidth) /
        100 *
        20;
    } else {
      this.setState({ month: month });
    }
  }
  onSelect(item) {
    this.setState({ selected: item });
    this.props.onSelect(moment().add(item, 'days').format('YYYY-MM-DD'));
  }

  render() {
    return (
      <div className="Daypicker">
        <span style={{ float: 'left' }}>{this.state.month}</span>
        <br />
        <div
          className="Daypicker-container"
          onScroll={this.onScroll.bind(this)}
          ref={div => {
            this.div = div;
          }}
        >

          {this.state.days.map((item, index) => (
            <div
              className={
                'Daypicker-item ' +
                  (item === this.state.selected ? 'selected' : '')
              }
              key={index}
              onClick={this.onSelect.bind(this, item)}
            >
              {moment().locale('ru').add(item, 'days').format('dd,\r\n DD')}
            </div>
          ))}
        </div>

      </div>
    );
  }
}

export default DayPicker;
