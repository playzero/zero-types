import type { RegistryTypes } from '@polkadot/types/types'

export const tangram: RegistryTypes = {
	RealmIndex: 'u64',
	ClassIndex: 'u64',
	ItemIndex: 'u64',
	TotalIndex: 'u128',
	BurnedIndex: 'u128',

	TangramRealm: {
		id: 'Hash',
		org: 'Hash',
		index: 'u128',
	},
	TangramRealmMetadata: {
		id: 'Hash',
		name: 'Vec<u8>',
		cid: 'Vec<u8>',
		created: 'BlockNumber',
		mutated: 'BlockNumber',
	},
	TangramClass: {
		id: 'Hash',
		realm: 'Hash',
		org: 'Hash',
		index: 'u128',
		cid: 'Vec<u8>',
	},
	TangramClassMetadata: {
		id: 'Hash',
		name: 'Vec<u8>',
		cid: 'Vec<u8>',
		created: 'BlockNumber',
		mutated: 'BlockNumber',
	},

	MomentOf: 'Moment',
	TangramId: 'Hash',
	TangramItemOf: 'TangramItem',
	TangramItem: {
		dob: 'MomentOf',
		dna: 'Hash'
	},
	TangramMetadata: {
		realm: 'RealmIndex',
		class: 'ClassIndex',
		name: 'Vec<u8>',
		cid: 'Vec<u8>'
	}

}
