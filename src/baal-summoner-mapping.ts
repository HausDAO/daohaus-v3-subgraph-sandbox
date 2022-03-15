import { log } from "@graphprotocol/graph-ts";

import { SummonBaal } from "../generated/BaalSummoner/BaalSummoner";
import { BaalTemplate } from "../generated/templates";
import { Dao } from "../generated/schema";
import { addTransaction } from "./util/transactions";
import { constants } from "./util/constants";

export function handleSummonBaal(event: SummonBaal): void {
  BaalTemplate.create(event.params.baal);

  let daoId = event.params.baal.toHexString();

  let dao = new Dao(daoId);

  if (dao === null) {
    return;
  }

  dao.createdAt = event.block.timestamp.toString();
  dao.transactionHashSummon = event.transaction.hash;
  dao.lootAddress = event.params.loot;
  dao.safeAddress = event.params.safe;
  dao.totalShares = constants.BIGINT_ZERO;
  dao.totalLoot = constants.BIGINT_ZERO;

  dao.save();

  addTransaction(event.block, event.transaction);
}
