/**
 * @file   mofron-comp-sw/index.js
 * @author simpart
 */
const mf = require('mofron');


mf.comp.Switch = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
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
     * @note private method
     */
    beforeRender () {
        try {
            super.beforeRender();
            let chd = this.child();
            for (let cidx=0; cidx < chd.length ; cidx++) {
                if (0 == cidx) {
                    continue;
                }
                chd[cidx].visible(false);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * switching component
     * 
     * @param p1 (number) swithing to specipied index 
     * @param p1 (undefined) swithing to current index+1
     */
    swComp (idx) {
        try {
            let chd = this.child();
            if (0 === chd.length) {
                return;
            }
            if (undefined === idx) {
                idx = (chd.length === this.swIndex()+1) ? 0 : this.swIndex()+1;
            } else if ( (0 > idx) || (chd.length <= idx) ) {
                throw new Error('invalid index');
            }
            this.swIndex(idx);
            for (let cidx in chd) {
                chd[cidx].visible(
                    (cidx == idx) ? true : false
                );
            }
            /* execute switch event */
            let evt = this.switchEvent();
            for (let eidx in evt) {
                evt[eidx][0](this, this.swIndex(), evt[eidx][1]);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * current switching index getter
     * 
     * @return (number) current switching index
     */
    swIndex (prm) {
        try { return this.member('swIndex', 'number', prm, 0); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    switchEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
                /* getter */
                return (undefined === this.m_swhevt) ? null : this.m_swhevt;
            }
            /* setter */
            if ('function' !== typeof fnc) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_swhevt) {
                this.m_swhevt = [];
            }
            this.m_swhevt.push([fnc, prm]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.Switch;
/* end of file */
