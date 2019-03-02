import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import './Home.css';
import Input from '@material-ui/core/Input';



class Home extends Component {

    constructor() {
        super();
        this.state = {
            profilePhoto: "",
            posts: [],
            usernames: ""


        }
    }

    componentDidMount() {

        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {

            if (this.readyState === 4) {
                console.log(JSON.parse(this.responseText).data.username);
                that.setState({
                    profilePhoto: JSON.parse(this.responseText).data.profile_picture
                });
            }

        });

        xhr.open("GET", this.props.baseUrl + "users/self/?access_token=8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65");

        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.withCredentials = false;
        xhr.send(data);

    }
    render() {

        return (

            <div className="app-header">
                <header className="app-header">
                    <img src={logo} alt="logo" />

                    <span className="white">
                        <Input type="text" className="inputText" disableUnderline={true} placeholder="Search.." />

                    </span>
                    <span> <img className="profile-img" src={this.state.profilePhoto} /></span>

                </header>

            </div>
        )

    }
}
export default Home;