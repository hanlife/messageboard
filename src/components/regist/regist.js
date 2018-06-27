import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {WingBlank, WhiteSpace, NavBar, List, InputItem} from 'antd-mobile';

class Regist extends Component {
    render() {
        return (
            <div>
                <NavBar mode="dark">注册</NavBar>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <InputItem clear placeholder="请输入账号">账号</InputItem>
                </WingBlank>

                <WhiteSpace size="lg"/>
                <WingBlank>
                    <InputItem type="password" placeholder="请输入密码">密码</InputItem>
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <InputItem type="password" placeholder="请确认密码">确认密码</InputItem>
                </WingBlank>
                <WhiteSpace size="lg"/>
                <WingBlank></WingBlank>
            </div>
        );
    }
}
export default Regist