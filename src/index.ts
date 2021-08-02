import type {
	OverrideBundleDefinition,
	RegistryTypes,
} from "@polkadot/types/types";

import { zero } from "./zero";
import { hyperspace } from "./hyperspace";
import { gamedao } from "./gamedao";
import { sensenet } from "./sensenet";

export const types: RegistryTypes = {
	...zero,
	...sensenet,
	...hyperspace,
	...gamedao,
};

export const types19: RegistryTypes = {
	...types,
};

export const typeBundleForPolkadot: OverrideBundleDefinition = {
	types: [
		{
			minmax: [0, 18],
			types: types,
		},
		{
			minmax: [19, undefined],
			types: types19,
		},
	],
};
