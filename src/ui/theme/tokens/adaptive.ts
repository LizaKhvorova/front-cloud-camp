export const breakpoints = {
    mobile: 600,
    tablet: 992,
    desktop: 1200,
};

export const adaptive = {
    minWidth: {
        mobile: `@media only screen and (min-width: ${breakpoints.mobile}px)`,
        tablet: `@media only screen and (min-width: ${breakpoints.tablet}px)`,
        desktop: `@media only screen and (min-width: ${breakpoints.desktop}px)`,
    },
    maxWidth: {
        mobile: `@media only screen and (max-width: ${
            breakpoints.mobile - 1
        }px)`,
        tablet: `@media only screen and (max-width: ${
            breakpoints.tablet - 1
        }px)`,
    },
};