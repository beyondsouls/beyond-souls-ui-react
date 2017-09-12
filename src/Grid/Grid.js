import React from "react";
import { generateClassNames } from "../css";

export const Grid = ({ modifier, state, children }) => {
    const classes = generateClassNames({
        baseClass: "o-grid",
        modifier,
        state
    });

    return <div className={classes.join(" ")}>{children}</div>;
};

export const Row = ({ modifier, state, children }) => {
    const classes = generateClassNames({
        baseClass: "o-grid__row",
        modifier,
        state
    });

    return <div className={classes.join(" ")}>{children}</div>;
};

export const Col = ({ size = 12, modifier, state, children }) => {
    const classes = generateClassNames({
        baseClass: "o-grid__col",
        custom: `-${size}`,
        modifier,
        state
    });

    return <div className={classes.join(" ")}>{children}</div>;
};

export default Grid;
