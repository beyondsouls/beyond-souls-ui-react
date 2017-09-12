export const generateClassNames = ({ baseClass, className = "", modifier, state, custom }) => {
    const classNames = [baseClass];

    const addClass = (prefix, next) => classNames.push(`${prefix}${baseClass}${next}`);
    const addClasses = (prefix, nexts) => nexts.forEach(next => addClass(prefix, next));

    if (modifier && typeof modifier === "string") {
        addClass("", `${baseClass}--${modifier}`);
    }

    if (modifier && Array.isArray(modifier)) {
        addClasses("", ...modifier);
    }

    if (state && typeof state === "string") {
        addClass("state-", state);
    }

    if (state && Array.isArray(state)) {
        addClasses("state-", state);
    }

    if (custom) {
        addClass("", custom);
    }

    return (className || "") + classNames.join(" ");
};
