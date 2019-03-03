import React, { Component } from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {

    onClickProfileIcon = (event) => {
        console.log(event)
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <span className="logo">  Image Viewer </span>
                    <div>
                        <IconButton onClick={this.onClickProfileIcon} className="btn-pointer">
                            <img className="profile-img" src={this.props.profilePhoto} alt={this.props.profilePhoto} />
                        </IconButton>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;