/*! Dory Mechanik v0.0.1 | (c) 2020 Dominika Adamska | MIT License | https://github.com/magiai/dobrymechanik */
'use stict';

function Route(name, htmlName, stepValue, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, stepValue, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    stepValue: undefined,
    default: undefined,
    constructor: function (name, htmlName, stepValue, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.stepValue = stepValue !== undefined ? stepValue : 0;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
};