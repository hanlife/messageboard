import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';

import List from '../../components/list/list'
import Write from '../../components/write/write'
import MyInfo from '../../components/myinfo/myinfo'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: false
        };
    }
    render() {
        return (
            <div
                style={this.state.fullScreen
                ? {
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0
                }
                : {
                    height: "100vh"
                }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}>
                    <TabBar.Item
                        title="列表"
                        key="List"
                        icon={< div className = "icon iconfont icon-liuyanban1" style = {{ width: '22px', height: '22px', fontSize:'20px'}}/>}
                        selectedIcon={< div className = "icon iconfont icon-liuyanban1" style = {{ width: '22px', height: '22px',fontSize:'20px'}}/>}
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                        this.setState({selectedTab: 'blueTab'});
                    }}>
                        <List></List>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={< div className = "icon iconfont icon-liuyanban" style = {{ width: '22px', height: '22px',fontSize:'20px'}}/>}
                        selectedIcon={< div className = "icon iconfont icon-liuyanban" style = {{ width: '22px', height: '22px',fontSize:'20px' }}/>}
                        title="留言"
                        key="Write"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                        this.setState({selectedTab: 'redTab'});
                    }}>
                        <Write></Write>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={< div className = "icon iconfont icon-guanli" style = {{ width: '22px', height: '22px',fontSize:'20px' }}/>}
                        selectedIcon={< div className = "icon iconfont icon-guanli" style = {{ width: '22px', height: '22px',fontSize:'20px' }}/>}
                        title="设置"
                        key="Myinfo"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                        this.setState({selectedTab: 'greenTab'});
                    }}>
                        <MyInfo></MyInfo>
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default Home