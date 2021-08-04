import type { RegistryTypes } from '@polkadot/types/types'

export const assets: RegistryTypes = {

	Asset: {
    	asset_symbol: 'Vec<u8>',
    	asset_name: 'Vec<u8>',
    	asset_id: 'u64'
	},

}
