<?php
namespace wcf\data\application\group;
use wcf\data\application\ApplicationAction;
use wcf\data\AbstractDatabaseObjectAction;

/**
 * Executes application group-related actions.
 * 
 * @author	Alexander Ebert
 * @copyright	2001-2012 WoltLab GmbH
 * @license	GNU Lesser General Public License <http://opensource.org/licenses/lgpl-license.php>
 * @package	com.woltlab.wcf
 * @subpackage	data.application.group
 * @category	Community Framework
 */
class ApplicationGroupAction extends AbstractDatabaseObjectAction {
	/**
	 * @see	wcf\data\AbstractDatabaseObjectAction::$className
	 */
	protected $className = 'wcf\data\application\group\ApplicationGroupEditor';
	
	/**
	 * @see	wcf\data\AbstractDatabaseObjectAction::create()
	 */
	public function create() {
		$applicationGroup = parent::create();
		
		if (isset($this->parameters['applications'])) {
			$applicationAction = new ApplicationAction($this->parameters['applications'], 'group', array('groupID' => $applicationGroup->groupID));
			$applicationAction->executeAction();
		}
		
		return $applicationGroup;
	}
}
