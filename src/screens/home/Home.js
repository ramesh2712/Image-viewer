import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import search from '../../assets/search.svg';
<<<<<<< HEAD
import likesnum from '../../assets/likesnum.png';
import './Home.css';
import { withStyles } from '@material-ui/core/styles';


import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
=======
import './Home.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';

>>>>>>> homepage header done

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
<<<<<<< HEAD

    card: {
        maxWidth: 400,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 20,
        maxWidth: 100
    },
    gridListMain1: {
        display: "flex",
        transform: 'translateZ(0)',
        cursor: 'pointer',
        border: "1px solid rgba(0,0,0,.3)"

    },

    imgSize: {
        width: 250,
        height: 200

    },

    title: {
        color: theme.palette.primary.light,
    }
=======
>>>>>>> homepage header done
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
<<<<<<< HEAD
            dataPosts: [],
            inputValue: "",
            gridRequired : "dispBlock"
=======
            dataPosts: []
>>>>>>> homepage header done

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
<<<<<<< HEAD
                // console.log(that.state.dataPosts)
                //  console.log(that.state.dataPosts[1].images.low_resolution.url)
                console.log(that.state.dataPosts[1].caption.text)
                console.log(that.state.dataPosts[1].tags)
=======
                console.log(that.state.dataPosts)
                console.log(that.state.dataPosts[1].images.low_resolution.url)
>>>>>>> homepage header done
            }

        });
        xhrPosts.open("GET", this.props.baseUrl + "users/self/media/recent?access_token=8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65");
        xhrPosts.setRequestHeader("Cache-Control", "no-cache");
        xhrPosts.setRequestHeader("Content-Type", "application/json");
        xhrPosts.withCredentials = false;
        xhrPosts.send(dataPosts);

    }
<<<<<<< HEAD
=======
    render() {
        const { classes } = this.props;
>>>>>>> homepage header done

    searchCaption = (e) => {
        this.setState({ inputValue: e.target.value });
        this.setState({gridRequired:'dispNone'});



    }
    render() {
        const { classes } = this.props;
        return (

            <div className="app-header">
                <header className="app-header">
                    <img src={logo} alt="logo" />
<<<<<<< HEAD


                    <span className="white"><img src={search} />
                        <Input type="text" disableUnderline={true} placeholder="Search.." onChange={this.searchCaption} />
                        <IconButton className={classes.button} onClick={this.onClickProfileIcon}> <img className="profile-img" src={this.state.data.profile_picture} />
                        </IconButton>

                    </span>

=======
                    <span className="white"><img src={search} />
                        <Input type="text" disableUnderline={true} placeholder="Search.." />
                        <IconButton className={classes.button} onClick={this.onClickProfileIcon}> <img className="profile-img" src={this.state.data.profile_picture} />
                        </IconButton>
                    </span>
>>>>>>> homepage header done
                </header>
                <span className={this.state.menuLogo}>
                    <MenuList className={classes.menuPopup} disableUnderline="true">

                        <MenuItem disableUnderline="true">My account</MenuItem>
                        <Divider variant="middle" className={classes.dividerLine} />
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </span>
<<<<<<< HEAD

                <div className="gridListMain">
                    {this.state.inputValue === "" && 
                    <GridList cellHeight={600} cols={2} className={this.gridRequired} >
                        {this.state.dataPosts.map(posts => (
                            <GridListTile key={"grid" + posts.id}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                                <img src={posts.user.profile_picture} />
                                            </Avatar>
                                        }
                                        action={<img src={posts.profile_picture} />}
                                        title={posts.user.username}
                                        subheader={posts.created_time} />
                                    <CardContent>
                                        <Typography>
                                            <img className={classes.imgSize} src={posts.images.low_resolution.url} />
                                        </Typography>
                                        <Typography>
                                            {(posts.caption.text).slice(0, (posts.caption.text).indexOf("#"))}
                                        </Typography>
                                        <Typography className={classes.title}>
                                            {(posts.caption.text).slice((posts.caption.text).indexOf("#"))}
                                        </Typography>

                                        <Typography>
                                            {posts.likes.count + " Likes"}
                                        </Typography>
                                        <Typography><img src={likesnum} /></Typography>
                                        <Typography>{posts.comments.count}</Typography>
                                        <TextField
                                            id="releaseDateStart"
                                            label="Add Comment"
                                            type="text"
                                            defaultValue=""

                                        />
                                        <Button variant="contained" color="primary" className={classes.formControl}>
                                            add
                                    </Button>

                                    </CardContent>
                                </Card>

                            </GridListTile>
                        ))}
                    </GridList>
                    }

                </div>

=======
>>>>>>> homepage header done
            </div>






        )

    }
}

export default withStyles(styles)(Home);
