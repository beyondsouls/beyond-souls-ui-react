import React from "react";
import { generateClassNames } from "../css";

export const List = ({ type, className, modifier, state, items, signature }) => {
    const classes = generateClassNames({
        baseClass: "a-list",
        className,
        modifier,
        state
    });

    let Tag = type || "ul";

    return (
        <Tag className={classes}>
            {items.map((item, index) => {
                return <li key={signature(item, index) || index}>{item}</li>;
            })}
        </Tag>
    );
};

export const LinkList = ({ type, className, modifier, state, items, signature }) => {
    const classes = generateClassNames({
        baseClass: "a-list",
        className,
        modifier,
        state
    });

    let Tag = type || "ul";

    return (
        <Tag className={classes}>
            {items.map((item, index) => {
                return (
                    <li key={signature(item, index) || index}>
                        <a href={item.link}>{item.text}</a>
                    </li>
                );
            })}
        </Tag>
    );
};

export default List;
