import type { RegistryTypes } from "@polkadot/types/types"

export const hyperspace: RegistryTypes = {

  Space: {
    id: "H256",
    dna: "H256",
    price: "Balance",
    gen: "u64"
  },
  SpaceId: "Hash",
  HypaspaceId: "Hash",
  HypaspaceMetadata: {
    name: "Vec<u8>"
  },
  Item: {
    CommodityId: "CommodityId",
    CommodityInfo: "CommodityInfo"
  },
  ItemId: "Hash",
  ItemInfo: {
    dob: "u64",
    dna: "Hash"
  },

}
