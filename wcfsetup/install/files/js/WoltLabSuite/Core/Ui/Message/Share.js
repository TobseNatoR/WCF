/**
 * Provides buttons to share a page through multiple social community sites.
 *
 * @author	Marcel Werk
 * @copyright	2001-2016 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @module	WoltLabSuite/Core/Ui/Message/Share
 */
define(['EventHandler'], function(EventHandler) {
	"use strict";
	
	/**
	 * @exports	WoltLabSuite/Core/Ui/Message/Share
	 */
	return {
		_pageDescription: '',
		_pageUrl: '',
		
		init: function() {
			var container = elBySel('.messageShareButtons');
			var providers = {
				facebook: {
					link: elBySel('.jsShareFacebook', container),
					share: (function() { this._share('facebook', 'https://www.facebook.com/sharer.php?u={pageURL}&t={text}', true); }).bind(this)
				},
				google: {
					link: elBySel('.jsShareGoogle', container),
					share: (function() { this._share('google', 'https://plus.google.com/share?url={pageURL}', false); }).bind(this)
				},
				reddit: {
					link: elBySel('.jsShareReddit', container),
					share: (function() { this._share('reddit', 'https://ssl.reddit.com/submit?url={pageURL}', false); }).bind(this)
				},
				twitter: {
					link: elBySel('.jsShareTwitter', container),
					share: (function() { this._share('twitter', 'https://twitter.com/share?url={pageURL}&text={text}', false); }).bind(this)
				},
				linkedIn: {
					link: elBySel('.jsShareLinkedIn', container),
					share: (function() { this._share('linkedIn', 'https://www.linkedin.com/cws/share?url={pageURL}', false); }).bind(this)
				},
				pinterest: {
					link: elBySel('.jsSharePinterest', container),
					share: (function() { this._share('pinterest', 'https://www.pinterest.com/pin/create/link/?url={pageURL}&description={text}', false); }).bind(this)
				},
				xing: {
					link: elBySel('.jsShareXing', container),
					share: (function() { this._share('xing', 'https://www.xing.com/social_plugins/share?url={pageURL}', false); }).bind(this)
				},
				whatsApp: {
					link: elBySel('.jsShareWhatsApp', container),
					share: (function() {
						window.location.href = 'whatsapp://send?text=' + this._pageDescription + '%20' + this._pageUrl;
					}).bind(this)
				}
			};

			var title = elBySel('meta[property="og:title"]');
			if (title !== null) this._pageDescription = encodeURIComponent(title.content);
			var url = elBySel('meta[property="og:url"]');
			if (url !== null) this._pageUrl = encodeURIComponent(url.content);

			EventHandler.fire('com.woltlab.wcf.message.share', 'shareProvider', {
				container: container,
				providers: providers,
				pageDescription: this._pageDescription,
				pageUrl: this._pageUrl
			});
			
			for (var provider in providers) {
				if (providers.hasOwnProperty(provider)) {
					if (providers[provider].link !== null) {
						providers[provider].link.addEventListener(WCF_CLICK_EVENT, providers[provider].share);
					}
				}
			}
		},
		
		_share: function(objectName, url, appendURL) {
			window.open(url.replace(/\{pageURL}/, this._pageUrl).replace(/\{text}/, this._pageDescription + (appendURL ? "%20" + this._pageUrl : "")), objectName, 'height=600,width=600');
		}
	};
});
