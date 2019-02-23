import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';




const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
        position: "fixed",
        right: 10,
        top: 0,
        width: 25
    },

    dividerLine: {
        width: 80,
        align: "center"
    },

    menuPopup: {
        background: "#D3D3D3",
        width: 120,
        borderRadius: 10,
        textAlign: "center",
        position: "absolute",
        right: 10,
        borderBottom: "1px solid white"
    },
    input: {
        display: 'none',
    },
});
class Home extends Component {

    constructor() {
        super();
        this.state = {
            profilePhoto: "",
            posts: [],
            usernames: "",
            menuLogo: "dispNone",
            data: [],
            dataPosts: []

        }
    }

    onClickProfileIcon = () => {
        this.state.menuLogo === 'dispNone' ? this.setState({ menuLogo: 'dispBlock' }) : this.setState({ menuLogo: 'dispNone' })
    }

    componentWillMount() {
        let data = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {

                that.setState({
                    data: JSON.parse(this.responseText).data
                });
            }
        });

        xhr.open("GET", this.props.baseUrl + "users/self/?access_token=8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.withCredentials = false;
        xhr.send(data);

        let dataPosts = null;
        let xhrPosts = new XMLHttpRequest();


        xhrPosts.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var myObject = JSON.parse(this.responseText);
                // console.log(myObject);
                var data = myObject.data;
                //console.log(data);

                that.setState({
                    dataPosts: data
                });
                console.log(that.state.dataPosts)
                console.log(that.state.dataPosts[1].images.low_resolution.url)
            }

        });
        xhrPosts.open("GET", this.props.baseUrl + "users/self/media/recent?access_token=8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65");
        xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.setRequestHeader("Content-Type", "application/json");
        xhrPosts.withCredentials = false;
        xhrPosts.send(dataPosts);

    }
    render() {
        const { classes } = this.props;
        return (

            <div className="app-header">
                <header className="app-header">
                    <img src={logo} alt="logo" />


                    <span className="white"><img src={search} />
                        <Input type="text" disableUnderline={true} placeholder="Search.." />
                        <IconButton className={classes.button} onClick={this.onClickProfileIcon}> <img className="profile-img" src={this.state.data.profile_picture} />
                        </IconButton>

                    </span>


                </header>
                <span className={this.state.menuLogo}>
                    <MenuList className={classes.menuPopup} disableUnderline="true">

                        <MenuItem disableUnderline="true">My account</MenuItem>
                        <Divider variant="middle" className={classes.dividerLine} />
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </span>


            </div>
        )

    }
}

export default withStyles(styles)(Home);
