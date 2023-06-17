var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Route, Link } from 'react-router-dom';
export const NavLinkComponent = (_a) => {
    var { to, children, className, activeClassName, exact } = _a, rest = __rest(_a, ["to", "children", "className", "activeClassName", "exact"]);
    const path = typeof to === 'object' ? to.pathname : to;
    return (React.createElement(React.Fragment, null,
        React.createElement(Route, { exact: exact, 
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            path: path, 
            // eslint-disable-next-line react/no-children-prop
            children: ({ match }) => {
                const isActive = !!match;
                return (React.createElement(Link
                // eslint-disable-next-line react/jsx-props-no-spreading
                , Object.assign({}, rest, { className: isActive
                        ? [className, activeClassName].filter((i) => i).join(' ')
                        : className, to: to }), typeof children === 'function' ? children(isActive) : children));
            } })));
};
