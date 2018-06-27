import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {
    WingBlank,
    WhiteSpace,
    NavBar,
    List,
    InputItem,
    Button
} from 'antd-mobile';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: '',
            disabled: false,
            loading: false
        };
        this.onChange = this
            .onChange
            .bind(this)
        this.login = this
            .login
            .bind(this)
    }
    onChange(val, key) {
        this.setState({key: val})
    }
    checkVal() {
        let {name, password} = this.state
        this.setState({
            disabled: name === '' || password === ""
        })
    }
    login() {}
    render() {
        let {loading, disabled} = this.state
        return (
            <div>
                <NavBar mode="dark">登录</NavBar>
                <WhiteSpace size="lg"/>
                <WingBlank>
                    <InputItem clear placeholder="请输入账号" onChange={this.onChange(value, 'name')}>账号</InputItem>
                </WingBlank>

                <WhiteSpace size="lg"/>
                <WingBlank>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange={this.onChange(value, 'password')}>密码</InputItem>
                </WingBlank>

                <WhiteSpace size="lg"/>
                <WingBlank>
                    <Button
                        type="primary"
                        disabled={disabled}
                        onClick={this.login}
                        loading={loading}>登录</Button>
                </WingBlank>
            </div>
        );
    }
}
export default Login