import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import Home from '../home/Home'
import logo from '../../assets/logo.png';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});





class Login extends Component {
    constructor(){
        super();
        
        this.state={
            userNameRequired : 'dispNone',
            passwordRequired : 'dispNone',
            usernamePasswordRequired : 'dispNone',
            userName : "",
            password : ""
        }

        
    }

    loginClickHandler = () => {
        let loginUsername = "upgrad";
        let loginPassword = "upgrad";
        this.state.userName === "" ? this.setState ({userNameRequired : "dispBlock"}) : this.setState ({userNameRequired : "dispNone"});
        this.state.password === "" ? this.setState ({passwordRequired : "dispBlock"}) : this.setState ({passwordRequired : "dispNone"});
        
        if(this.state.userName === loginUsername && this.state.password === loginPassword) {
            ReactDOM.render(<Home />,  document.getElementById('root'));
        }else if(this.state.userName !== "" && this.state.password !== ""){
            this.setState({usernamePasswordRequired: "dispBlock"});
        }
    }

    usernameChangeHandler = (e) =>{
        this.setState({userName : e.target.value});
    }

    passwordChangeHandler = (e) => {
        this.setState({password : e.target.value})
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <header className="app-header">
                    <img src={logo} alt="logo" />
                </header>
                <div className="card-container">
                    <Card>
                        <CardContent>
                            <FormControl className={classes.formControl}>
                                <Typography className={classes.title} color="textSecondary">
                                    LOGIN
                                    </Typography>
                            </FormControl>
                            <FormControl required>
                                <InputLabel htmlFor="username"> Username </InputLabel>
                                <Input id="username" type="text" username = {this.state.userName} onChange = {this.usernameChangeHandler}/>
                                <FormHelperText className={this.state.userNameRequired}>
                                    <span className="red">Required</span>
                                </FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl required>
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange= {this.passwordChangeHandler}/>
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">Required</span>
                                </FormHelperText>

                                <FormHelperText className={this.state.usernamePasswordRequired}>
                                    <span className="red">Incorrect username and/or password</span>
                                </FormHelperText>
                            </FormControl>
                            <br/><br/>
                            <FormControl>
                                <Button variant="contained" color="primary" className="btn-pointer"  onClick={this.loginClickHandler}>LOGIN</Button>
                            </FormControl>
                        </CardContent>

                    </Card>
                </div>


            </div>

        )
    }

}

export default withStyles(styles)(Login);