import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './profile.css'

class Profile extends Component {

    constructor(){
        super()
        this.state = {
            profilePhoto: ''
        }
    }
    componentWillMount() {
        let access_token = sessionStorage.getItem('access-token')
        console.log(access_token)
        if (access_token) {
            this.callApiToRetriveProfileDetail()
            this.callApiToRetriveUserMediaPostDetail()
        }
        else {
            this.props.history.push("/");
        }
    }
    callApiToRetriveProfileDetail() {
        let access_token = sessionStorage.getItem('access-token')
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var object = JSON.parse(this.responseText).data
                console.log(object.profile_picture)
                that.setState({
                    profilePhoto: object.profile_picture
                })
            }
        });

        xhr.open("GET", this.props.baseUrl + "users/self/?access_token=" + access_token);
        //  xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(data);
    }
    callApiToRetriveUserMediaPostDetail() {
        let access_token = sessionStorage.getItem('access-token')
        let dataPosts = null;
        let xhrPosts = new XMLHttpRequest();
        let that = this

        xhrPosts.addEventListener("readystatechange", function () {

            if (this.readyState === 4) {
                that.setState({
                    dataPosts: JSON.parse(this.responseText).data.image
                })
                console.log(that.state.dataPosts);
            }
        });
        xhrPosts.open("GET", this.props.baseUrl + "users/self/media/recent?access_token=" + access_token);
        // xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.send(dataPosts);
    }

    render() {
        return (
            <div>
                <Header profilePhoto={this.state.profilePhoto} isProfileScreen={true} />
            </div>
        )
    }
}
export default Profile;