import type { RegistryTypes } from "@polkadot/types/types"

export const gamedao: RegistryTypes = {

  Body: {
    id: "Hash",
    index: "u128",
    creator: "AccountId",
    name: "Vec<u8>",
    cid: "Vec<u8>",
    body: "u8",
    created: "BlockNumber",
    mutated: "BlockNumber"
  },
  BConfig: {
    fee_model: "u8",
    fee: "Balance",
    gov_asset: "u8",
    pay_asset: "u8",
    member_limit: "u64",
    access: "u8"
  },

  Campaign: {
    id: "Hash",
    org: "Hash",
    owner: "AccountId",
    admin: "AccountId",
    deposit: "Balance",
    expiry: "BlockNumber",
    cap: "Balance",
    name: "Vec<u8>",
    protocol: "u8",
    governance: "u8",
    cid: "Vec<u8>",
    created: "Timestamp"
  },

  Proposal: {
    proposal_id: "Hash",
    campaign_id: "Hash",
    purpose: "Vec<u8>",
    cid: "Vec<u8>",
    amount: "Balance",
    expiry: "BlockNumber",
    status: "u8"
  },

  Timestamp: "Moment",
  EventMessage: "Vec<u8>",
  Nonce: "u64",

}
