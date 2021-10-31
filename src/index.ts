import type { OverrideBundleDefinition, RegistryTypes } from '@polkadot/types/types'

import { zero } from './zero'
import { hyperspace } from './hyperspace'
import { gamedao } from './gamedao'
import { tangram } from './tangram'
import { sensenet } from './sensenet'

export const types: RegistryTypes = {
	...zero,
	...sensenet,
	...hyperspace,
	...gamedao,
	...tangram,
}

export const types22: RegistryTypes = {
	...types,
}

export const typeBundleForPolkadot: OverrideBundleDefinition = {
	types: [
		{
			minmax: [0, 18],
			types: types,
		},
		{
			minmax: [19, undefined],
			types: types22,
		},
	],
}
