/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns whether the given feature is enabled or not.
 *
 * @param {Object} state   Global application state.
 * @param {string} feature Feature slug.
 *
 * @return {boolean} Is active.
 */
export function isFeatureActive( state, feature ) {
	return get( state.preferences.features, [ feature ], false );
}

/**
 * Returns true if save panel is open, or false otherwise.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} Whether or not save panel is open.
 */
export function isEntitiesSavedStatesOpen( state ) {
	return state.entitiesSavedStates.isOpen;
}
