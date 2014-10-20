/**
 * @module ui/resource.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Resource
 * @extends Component
 */
exports.Resource = Component.specialize(/** @lends Resource# */ {
    constructor: {
        value: function Resource() {
            this.super();
        }
    }
});
