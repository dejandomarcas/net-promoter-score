(function() {
    'use strict';
    
    function Nps(name, opt) {
        this.name = name;
        this.opt = opt;
        this.id = '#nps';
        this.ind = qs('#vote');
        this.votes = qs('#votes');
		this.success = qs('.npsSuccess');
        this.question = qs('.npsQuestion');
        this.buttons = qsa('.npsButton');
        this.hide = qsa('.npsHide');
    }
    
    Nps.prototype.hideAll = function() {
        var h = this.hide;
        [].forEach.call(h, function(div) {
            hide(div);
        });
    };
    
    Nps.prototype.save = function(element, parent) {
        var that = parent;
        var v = qs('#' + element + ' p').innerHTML;
        that.setNPS(v);
        that.hideAll();
        show(that.success);
    };
    
    Nps.prototype.setNPS = function(score) {
        var cat = this.name,
            act = score, lab;
        
        if (score <= 6) {
            lab = 'Detractor';
        } else if (score == 7 || score == 8) {
            lab = 'Pasivo';
        } else if (score > 8) {
            lab = 'Promotor';
        }

        ga('send', 'event', cat, score, lab, {
            'nonInteraction': 1,
            'dimension1': score
        });
    };
    
    Nps.prototype.getNPS = function(el) {
        var that = this;
        if (el) {
            $on(el, 'click', function() {
                that.save(this.id, that);
            });
        }
    };
    
    Nps.prototype.init = function() {
        var that = this;
        var bt = that.buttons.length;
        
        hide(that.votes);
        hide(that.success);

        for (var i = 0; i <= bt; i++) {
            that.getNPS(qs(that.id + i));
        }

        $on(that.ind, 'click', function() {
            show(that.votes);
            hide(that.ind);
        });
    };
    
    var nps = new Nps('NPS', 'yes');
    
    function start() {
        nps.init();
    }
    
    $on(window, 'load', start);
    $on(window, 'hasChange', start);
    
})();