import React, { Component } from 'react';
import { List, PickerView, WhiteSpace,Button } from 'antd-mobile';
import { createForm } from 'rc-form';

const seasons = [
    [
      {
        label: '2013',
        value: '2013',
      },
      {
        label: '2014',
        value: '2014',
      },
    ],
    [
      {
        label: '春',
        value: '春',
      },
      {
        label: '夏',
        value: '夏',
      },
    ],
  ];
  

class App extends Component {
    state = {
        value: null,
      };
      onChange = (value) => {
        console.log(value);
        this.setState({
          value,
        });
      }
      onScrollChange = (value) => {
        console.log(value);
      }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <Button >default disabled</Button><WhiteSpace />
                <WhiteSpace />
                <div style={{textAlign:'ceneter'}}>滑动</div>
                <PickerView
                    onChange={this.onChange}
                    onScrollChange={this.onScrollChange}
                    value={this.state.value}
                    data={seasons}
                    cascade={false}
                />
        <WhiteSpace /><WhiteSpace />
            </div>
        );
    }
}

const shenzhou = createForm()(App);
export default shenzhou;
