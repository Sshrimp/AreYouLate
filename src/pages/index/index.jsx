import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Bmob from "hydrogen-js-sdk";
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

    // eslint-disable-next-line react/sort-comp
    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  rigister() {
    let params = {
      username: 'liuhaimin',
      password: 'liuhaimin',
      email: 'liuhaimin@bmob.cn',
      phone: '13711166567',
  }

  Bmob.User.register(params).then(res => {
    console.log(res)
  }).catch(err => {
   console.log(err)
  });
}

  render () {
    return (
      <View className='index'>
        <Button 
          onClick={this.rigister}
        >
          点我
        </Button>
      </View>
    )
  }
}

export default Index
