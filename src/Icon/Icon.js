import React from "react";

export const Icon = ({ name }) => {
    if (!name) {
        return null;
    }

    return <i className={`a-icon a-icon--${name}`} speak="none" />;
};

export default Icon;
