/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
	content: {
		value: {"name": "Resources List", 
		            children: [
		            	{"name": "Apps",
		                    children: [
		                        {"name": "Heart Anatomy App" }, 
                            	{"name": "Drawing App"}
		                    ]
		                },
		            	{"name": "Period 1 - History",
		            		children: [
				                {"name": "Lesson 1 - American Civil War",
				                    children: [
		                                {"name": "Cause of America Civil War" },
		                                {"name": "Union vs Confederacy"},
		                                {"name": "Biography of Abraham Lincoln"} 
				                    ]
		                        },
		                        {"name": "Lesson 2 - Roaring 20s and the Great Depression",
		                            children: [
		                                {"name": "Eighteenth Amendment, Prohibition" },
		                                {"name": "The Great Depression - 1929"},
		                                {"name": "Franklin D. Roosevelt"}
		                            ]
		                        }
		            		]
		       			},
		       			{"name": "Period 2 - English",
				        	children: [
				                {"name": "English Grammar"},
		                        {"name": "Spelling Test" }, 
		                    	{"name": "Essay Structure"}
		                    ]
                		}
                	]
     		   }
    		}
		    
	
});
