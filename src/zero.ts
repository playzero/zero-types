import type { RegistryTypes } from "@polkadot/types/types"

export const zero: RegistryTypes = {

  Address: "MultiAddress",
  LookupSource: "MultiAddress",

  AccountInfo: "AccountInfoWithDualRefCount",
  AccountInfoWithDualRefCount: {
    nonce: "Index",
    consumers: "RefCount",
    providers: "RefCount",
    data: "AccountData"
  },

  Timestamp: "Moment",

}
