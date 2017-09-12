import React from "react";
import { Grid, Row, Col } from "../Grid";

export const Header = ({ id, logo, links }) => {
    return (
        <header className="m-header" id={id}>
            <Grid modifier="spread">
                <Row modifier={["layout", "onlyautofit"]}>
                    <Col className="m-header__brand" size={4}>
                        <img src={logo} />
                    </Col>
                    <nav className="m-header__navigation o-grid__col o-grid__col-8">
                        <ul className="a-list a-list--horizontal u-pull-right">
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Releases</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </Row>
            </Grid>
        </header>
    );
};
