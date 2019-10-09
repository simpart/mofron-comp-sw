/**
 * @file mofron-comp-switch/index.js
 * @brief switching display components by 'switching' function.
 *        switching the display to a specified index number of the child component.
 *        switch in ascending order if it has no parameter.
 * @author simpart
 */
const mf = require('mofron');

mf.comp.Switch = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param (component) child component
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('Switch');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    /**
     * initialize switching
     *
     * @type private
     */
    beforeRender () {
        try {
            super.beforeRender();
	    this.switching(this.index(), false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switching component
     * 
     * @param (mixed) number: swithing to specipied index 
     *                undefined: switching to current index+1 if it has no parameter.
     * @param (boolean) undefined: switching with swtich event.
     *                  false: switching without switch event
     * @type function
     */
    switching (idx, eflg) {
        try {
            let chd = this.child();
            if (0 === chd.length) {
                return;
            }
            if (undefined === idx) {
                idx = (chd.length === this.index()+1) ? 0 : this.index()+1;
            } else if ( (0 > idx) || (chd.length <= idx) ) {
                throw new Error('invalid index');
            }
            this.index(idx);
            for (let cidx in chd) {
                chd[cidx].visible((cidx == idx) ? true : false);
            }

	    if (false !== eflg) {
                /* execute switch event */
                let evt = this.switchEvent();
                for (let eidx in evt) {
                    evt[eidx][0](this, this.index(), evt[eidx][1]);
                }
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * current switching index getter
     * 
     * @param (number) switching index number
     * @return (number) current switching index
     * @attention setter is private method.
     * @type function
     */
    index (prm) {
        try { return this.member('index', 'number', prm, 0); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switch event functions
     * 
     * @param (function) switch event function
     * @param (mixed) event parameter
     * @type parameter
     */
    switchEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
	        /* getter */
                return this.arrayMember("switchEvent");
	    }
	    /* setter */
	    if ('function' !== typeof fnc) {
	        throw new Error('invalid parameter');
	    }
	    this.arrayMember("switchEvent", "object", [fnc,prm]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * set height to child
     * 
     * @type private
     */
    height (prm,opt) {
        try {
	    return this.switchOpt("height", prm,opt);
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * set width to child
     * 
     * @type private
     */
    width (prm,opt) {
        try {
	    return this.switchOpt("width",prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set effect to child
     * 
     * @type private
     */
    effect (prm) {
        try {
            return this.switchOpt("effect", prm);
	} catch (e) {
	    console.error(e.stack);
	    throw e;
	}
    }
    
    /**
     * set event to chld
     * 
     * @type private
     */
    event (prm) {
        try {
            return this.switchOpt("event", prm);
        } catch (e) {
            console.error(e.stack);
	    throw e;
        }
    }
    
    /**
     * set main color to child
     * 
     * @type private
     */
    mainColor (prm,opt) {
        try {
            return this.switchOpt("mainColor",prm,opt);
	} catch (e) {
	    console.error(e.stack);  
	    throw e;
	}
    }
    
    /**
     * set base color to child
     * 
     * @type private
     */
    baseColor (prm,opt) {
        try {
            return this.switchOpt("baseColor",prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set accent color to child
     * 
     * @type private
     */
    accentColor (prm,opt) {
        try {
            return this.switchOpt("accentColor",prm,opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set option to child
     * 
     * @type private
     */
    switchOpt (key, p1,p2) {
        try {
            if (undefined === p1) {
                /* getter */
                return (0 === this.child().length) ? null : this.child()[0][key]();
            }
	    /* setter */
	    let chd = this.child();
	    for (let cidx in chd) {
                chd[cidx][key](p1,p2);
	    }
	} catch (e) {
            console.error(e.stack);
	    throw e;
	}
    }
}
module.exports = mf.comp.Switch;
/* end of file */
