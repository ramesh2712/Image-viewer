import React, { Component } from 'react';
import Header from '../../common/header/Header';
import './profile.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Edit from '@material-ui/icons/Edit'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Modal, Typography } from '@material-ui/core';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin: '20px',
    },
    gridList: {
        width: 900,
        height: 500,
    }
});

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}
class Profile extends Component {

    constructor() {
        super()
        this.state = {
            profilePhoto: '',
            username: '',
            numberOfPosts: 0,
            numberOfFollowers: 0,
            numberOfFollowsBy: 0,
            fullname: '',
            dataPosts: [],
            modalIsOpen: false
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
                that.setState({
                    profilePhoto: object.profile_picture,
                    username: object.username,
                    fullname: object.full_name,
                    numberOfPosts: object.counts.media,
                    numberOfFollowers: object.counts.follows,
                    numberOfFollowsBy: object.counts.followed_by
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
                    dataPosts: JSON.parse(this.responseText).data
                })
                console.log(that.state.dataPosts);
            }
        });
        xhrPosts.open("GET", this.props.baseUrl + "users/self/media/recent?access_token=" + access_token);
        // xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.send(dataPosts);
    }

    openModalHandler = () => {
        console.log('modal is open')
        this.setState({ modalIsOpen: true })
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header profilePhoto={this.state.profilePhoto} isProfileScreen={true} />
                <div className="profile-header">
                    <div>
                        <img src={this.state.profilePhoto} alt={this.state.profilePhoto} className="img-user" />
                    </div>
                    <div className="post-info">
                        <div className="user-name">
                            <span>{this.state.username} </span> <br />
                        </div>
                        <div className="follow-info ">
                            <span className="margin-between">Posts: {this.state.numberOfPosts} </span>
                            <span className="margin-between">Follows: {this.state.numberOfFollowers} </span>
                            <span className="margin-between">Followed_by: {this.state.numberOfFollowsBy} </span> <br />
                        </div>
                        <div >
                            <span className="fullname-style">{this.state.fullname} </span>
                            <Fab color="secondary" aria-label="Edit" className={classes.fab}>
                                <Icon onClick={this.openModalHandler}>
                                    <Edit /></Icon>
                            </Fab>
                        </div>
                    </div>
                </div>
                <Modal ariaHideApp={false}
                                isOpen={this.state.modalIsOpen}
                                contentLabel="Login"
                                onRequestClose={this.closeModal}
                                style={customStyles}>
                            </Modal>
                
                <div className={classes.root}>
                    <GridList cellHeight={320} className={classes.gridList} cols={3}>
                        {
                            this.state.dataPosts.map(post => (
                                <GridListTile key={"image_" + post.id}>
                                    <img src={post.images.low_resolution.url} alt={post.link} />
                                </GridListTile>
                            ))
                        }
                    </GridList>
                </div>
            </div>
        )
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
