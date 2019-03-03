import React, { Component } from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginLeft: theme.spacing.unit * 2,
        float: 'right',
        width: 120,
        background: "#DFDFE0"
    }
});

/*
 <Link to={"/bookshow/" + this.props.id}>
                                <Button variant="contained" color="primary">
                                    Book Show
                                </Button>
                            </Link>*/

class Header extends Component {

    constructor() {
        super();
        this.state = {
            showMenuItem: 'dispNone',
        }
    }

    componentWillMount(){
        console.log(this.props.isProfileScreen)
    }
    onClickProfileIcon = () => {
        this.state.showMenuItem === 'dispNone' ? this.setState({ showMenuItem: 'dispBlock' }) : this.setState({ showMenuItem: 'dispNone' })
    }
    myAccountHandler = () => {
        this.state.showMenuItem === 'dispNone' ? this.setState({ showMenuItem: 'dispBlock' }) : this.setState({ showMenuItem: 'dispNone' })
    }
    logoutHandler = () => {
        this.state.showMenuItem === 'dispNone' ? this.setState({ showMenuItem: 'dispBlock' }) : this.setState({ showMenuItem: 'dispNone' })
        sessionStorage.clear();
    }
   
    render() {
        const { classes } = this.props;
        return (
            <div>
                <header className="app-header">
                    {
                        this.props.isProfileScreen === false &&
                         <span className="logo">  Image Viewer </span> 
                    }
                    {
                         this.props.isProfileScreen === true &&
                         <Link to="/home">
                             <span className="logo">  Image Viewer </span> 
                         </Link>   
                    }
                    {
                        this.props.profilePhoto &&
                        <div>
                            <IconButton onClick={this.onClickProfileIcon} className="btn-pointer">
                                <img className="profile-img" src={this.props.profilePhoto} alt={this.props.profilePhoto} />
                            </IconButton>
                        </div>
                    }
                    <div className={this.state.showMenuItem}>
                        <Paper className={classes.paper}>
                            <MenuList>
                                { this.props.isProfileScreen === false &&
                                 <Link to="/profile">
                                    <MenuItem onClick={this.myAccountHandler}>My account</MenuItem>
                                    <Divider variant='middle' light={true} />
                                </Link>
                                
                                }
                                <Link to="/">
                                    <MenuItem onClick={this.logoutHandler}>Logout</MenuItem>
                                </Link>
                            </MenuList>
                        </Paper>
                    </div>
                </header>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
