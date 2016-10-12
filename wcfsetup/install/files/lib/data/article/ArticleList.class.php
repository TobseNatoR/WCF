<?php
namespace wcf\data\article;
use wcf\data\DatabaseObjectList;

/**
 * Represents a list of cms articles.
 * 
 * @author	Marcel Werk
 * @copyright	2001-2016 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @package	WoltLabSuite\Core\Data\Article
 * @since	3.0
 *
 * @method	Article		current()
 * @method	Article[]		getObjects()
 * @method	Article|null	search($objectID)
 * @property	Article[]		$objects
 */
class ArticleList extends DatabaseObjectList {
	/**
	 * @inheritDoc
	 */
	public $className = Article::class;
}
