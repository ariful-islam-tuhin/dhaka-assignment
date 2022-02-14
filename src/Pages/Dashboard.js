import React from "react";

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Button, Col, Nav, Row } from "react-bootstrap";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import Login from "../Component/Login/Login";
import Home from "./Home";
import { List } from "@mui/material";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const { user, logout} = useAuth();

    let { path, url } = useRouteMatch();


    return (
        <div>

            <Row className="w-100 container">
                <Col xs={12} md={2}>

                    <div className="bg-light shadow">
                        <Nav className="dash-nav">

                            <List>
                                {['', '', ''].map((text, index) => (
                                    <ListItem  button key={text}>
                                        <ListItemIcon style={{ padding: "10px" }} Link as={Link} to="/" >
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText />
                                    </ListItem>
                                ))}
                            </List>
                            <List>
                                {['', '', ''].map((text, index) => (
                                    <ListItem button key={text}>
                                        <ListItemIcon style={{ padding: "10px" }} Link as={Link} to="#" >
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText />
                                    </ListItem>
                                ))}
                            </List>

                        </Nav>
                        {user?.email && <Button style={{ color: "white", backgroundColor: "#01896A", borderRadius: "50px", border: "1px solid black" }} onClick={logout}>Logout</Button>}
                    </div>


                </Col>
                <Col xs={12} md={10}>

                    <Switch>
                        <Route exact path={path}>
                            <div>
                                <h3>Welcome to Dashboard</h3>
                            </div>
                        </Route>

                        <Route path={`${path}/login`}>
                            <Login></Login>
                        </Route>

                        <Route path={`${path}/allforyou`}>
                            <Home></Home>
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;