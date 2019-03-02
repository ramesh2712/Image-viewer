import React, { Component } from 'react';
import './Login.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Header from '../../common/header/Header';

class Login extends Component {
    constructor() {
        super();
        this.username = "upgrad"
        this.password = "upgrad"
        this.accessToken = "8661035776.d0fcd39.87fd934e04f84253aaf234d8bd4e4c65"
        this.state = {
            userNameRequired: 'dispNone',
            passwordRequired: 'dispNone',
            credentialValidation: 'dispNone',
            userName: "",
            password: "",
            loggedIn: false
        }
    }

    // This method is fired When user press Login Button .....

    loginClickedHandler = () => {
        // Check for empty fields...
        this.state.userName === "" ? this.setState({ userNameRequired: "dispBlock" }) : this.setState({ userNameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });
        // Check whether credentails are entered correct or not and do action based on result...
        if (this.state.userName !== "" && this.state.password !== "") {
            if (this.state.userName === this.username && this.state.password === this.password) {
                // Login successfully 
                this.setState({
                    credentialValidation: "dispNone"
                })
                // Store Access-Token in Session-Storage ...
                sessionStorage.setItem('access-token', this.accessToken);
                // Display Home Page ....
                this.props.history.push('/Home');
            }
            else {
                this.setState({
                    credentialValidation: "dispBlock"
                })
            }
        }
        else {
            this.setState({
                credentialValidation: "dispNone"
            })
        }
    }

    usernameChangeHandler = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    passwordChangeHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <Card className="cardStyle marginTop" >
                        <CardContent>
                            <Typography variant="headline" component="h1">
                                LOGIN
                            </Typography><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="username"> Username </InputLabel>
                                <Input id="username" type="text" username={this.state.userName} onChange={this.usernameChangeHandler} />
                                <FormHelperText className={this.state.userNameRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl> <br /><br />
                            <FormControl required className="formControl">
                                <InputLabel htmlFor="password"> Password </InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.passwordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                                <div className={this.state.credentialValidation + " marginTop"} >
                                    <span className="red">Incorrect username and/or password</span>
                                </div>
                            </FormControl> <br /><br />
                            <div className="marginTop btn-pointer">
                                <Button variant="contained" color="primary" onClick={this.loginClickedHandler}>LOGIN</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}
export default Login;
