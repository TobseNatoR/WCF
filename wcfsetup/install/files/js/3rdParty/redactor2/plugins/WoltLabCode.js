$.Redactor.prototype.WoltLabCode = function() {
	"use strict";
	
	return {
		init: function() {
			require(['WoltLabSuite/Core/Ui/Redactor/Code'], (function (UiRedactorCode) {
				new UiRedactorCode(this);
			}).bind(this));
			
			var mpStart = this.code.start;
			this.code.start = (function (html) {
				mpStart.call(this, html);
				
				WCF.System.Event.fireEvent('com.woltlab.wcf.redactor2', 'codeStart_' + this.$element[0].id);
			}).bind(this);
		}
	};
};
