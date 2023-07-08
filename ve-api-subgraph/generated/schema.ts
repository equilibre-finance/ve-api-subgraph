// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Vote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Vote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Vote", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Vote | null {
    return changetype<Vote | null>(store.get_in_block("Vote", id));
  }

  static load(id: string): Vote | null {
    return changetype<Vote | null>(store.get("Vote", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get voter(): string {
    let value = this.get("voter");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set voter(value: string) {
    this.set("voter", Value.fromString(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get choice(): BigInt | null {
    let value = this.get("choice");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set choice(value: BigInt | null) {
    if (!value) {
      this.unset("choice");
    } else {
      this.set("choice", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class AbstainedEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AbstainedEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AbstainedEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AbstainedEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AbstainedEvent | null {
    return changetype<AbstainedEvent | null>(
      store.get_in_block("AbstainedEvent", id)
    );
  }

  static load(id: string): AbstainedEvent | null {
    return changetype<AbstainedEvent | null>(store.get("AbstainedEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get weight(): BigInt | null {
    let value = this.get("weight");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set weight(value: BigInt | null) {
    if (!value) {
      this.unset("weight");
    } else {
      this.set("weight", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class AttachEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AttachEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AttachEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AttachEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AttachEvent | null {
    return changetype<AttachEvent | null>(
      store.get_in_block("AttachEvent", id)
    );
  }

  static load(id: string): AttachEvent | null {
    return changetype<AttachEvent | null>(store.get("AttachEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class DepositEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DepositEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DepositEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DepositEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DepositEvent | null {
    return changetype<DepositEvent | null>(
      store.get_in_block("DepositEvent", id)
    );
  }

  static load(id: string): DepositEvent | null {
    return changetype<DepositEvent | null>(store.get("DepositEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lp(): Bytes {
    let value = this.get("lp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set lp(value: Bytes) {
    this.set("lp", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class DetachEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DetachEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DetachEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DetachEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DetachEvent | null {
    return changetype<DetachEvent | null>(
      store.get_in_block("DetachEvent", id)
    );
  }

  static load(id: string): DetachEvent | null {
    return changetype<DetachEvent | null>(store.get("DetachEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class DistributeRewardEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save DistributeRewardEvent entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type DistributeRewardEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("DistributeRewardEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): DistributeRewardEvent | null {
    return changetype<DistributeRewardEvent | null>(
      store.get_in_block("DistributeRewardEvent", id)
    );
  }

  static load(id: string): DistributeRewardEvent | null {
    return changetype<DistributeRewardEvent | null>(
      store.get("DistributeRewardEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class GaugeCreatedEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GaugeCreatedEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GaugeCreatedEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GaugeCreatedEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): GaugeCreatedEvent | null {
    return changetype<GaugeCreatedEvent | null>(
      store.get_in_block("GaugeCreatedEvent", id)
    );
  }

  static load(id: string): GaugeCreatedEvent | null {
    return changetype<GaugeCreatedEvent | null>(
      store.get("GaugeCreatedEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get internal_bribe(): Bytes {
    let value = this.get("internal_bribe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set internal_bribe(value: Bytes) {
    this.set("internal_bribe", Value.fromBytes(value));
  }

  get external_bribe(): Bytes {
    let value = this.get("external_bribe");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set external_bribe(value: Bytes) {
    this.set("external_bribe", Value.fromBytes(value));
  }

  get pool(): Bytes {
    let value = this.get("pool");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set pool(value: Bytes) {
    this.set("pool", Value.fromBytes(value));
  }
}

export class GaugeKilledEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GaugeKilledEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GaugeKilledEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GaugeKilledEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): GaugeKilledEvent | null {
    return changetype<GaugeKilledEvent | null>(
      store.get_in_block("GaugeKilledEvent", id)
    );
  }

  static load(id: string): GaugeKilledEvent | null {
    return changetype<GaugeKilledEvent | null>(
      store.get("GaugeKilledEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }
}

export class GaugeRevivedEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save GaugeRevivedEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type GaugeRevivedEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("GaugeRevivedEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): GaugeRevivedEvent | null {
    return changetype<GaugeRevivedEvent | null>(
      store.get_in_block("GaugeRevivedEvent", id)
    );
  }

  static load(id: string): GaugeRevivedEvent | null {
    return changetype<GaugeRevivedEvent | null>(
      store.get("GaugeRevivedEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }
}

export class NotifyRewardEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save NotifyRewardEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type NotifyRewardEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("NotifyRewardEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): NotifyRewardEvent | null {
    return changetype<NotifyRewardEvent | null>(
      store.get_in_block("NotifyRewardEvent", id)
    );
  }

  static load(id: string): NotifyRewardEvent | null {
    return changetype<NotifyRewardEvent | null>(
      store.get("NotifyRewardEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get reward(): Bytes {
    let value = this.get("reward");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set reward(value: Bytes) {
    this.set("reward", Value.fromBytes(value));
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class WhitelistedEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WhitelistedEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WhitelistedEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WhitelistedEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): WhitelistedEvent | null {
    return changetype<WhitelistedEvent | null>(
      store.get_in_block("WhitelistedEvent", id)
    );
  }

  static load(id: string): WhitelistedEvent | null {
    return changetype<WhitelistedEvent | null>(
      store.get("WhitelistedEvent", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get whitelister(): Bytes {
    let value = this.get("whitelister");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set whitelister(value: Bytes) {
    this.set("whitelister", Value.fromBytes(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }
}

export class WithdrawEvent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save WithdrawEvent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type WithdrawEvent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("WithdrawEvent", id.toString(), this);
    }
  }

  static loadInBlock(id: string): WithdrawEvent | null {
    return changetype<WithdrawEvent | null>(
      store.get_in_block("WithdrawEvent", id)
    );
  }

  static load(id: string): WithdrawEvent | null {
    return changetype<WithdrawEvent | null>(store.get("WithdrawEvent", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lp(): Bytes {
    let value = this.get("lp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set lp(value: Bytes) {
    this.set("lp", Value.fromBytes(value));
  }

  get gauge(): Bytes {
    let value = this.get("gauge");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gauge(value: Bytes) {
    this.set("gauge", Value.fromBytes(value));
  }

  get tokenId(): BigInt | null {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt | null) {
    if (!value) {
      this.unset("tokenId");
    } else {
      this.set("tokenId", Value.fromBigInt(<BigInt>value));
    }
  }

  get amount(): BigInt | null {
    let value = this.get("amount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set amount(value: BigInt | null) {
    if (!value) {
      this.unset("amount");
    } else {
      this.set("amount", Value.fromBigInt(<BigInt>value));
    }
  }
}
