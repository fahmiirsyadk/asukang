import { Machine } from "xstate";

export const transactionStep = Machine({
  id: "transactionStep",
  initial: "one",
  states: {
    one: {
      on: {
        TWO: "two"
      }
    },
    two: {
      on: {
        SUCCESS: "success"
      }
    },
    success: {
      type: "final"
    }
  }
});

export const switchShortcuts = Machine({
  id: "switchShortcuts",
  initial: "home",
  states: {
    home: {
      on: {
        TRANSACTION: "transaction",
        WISHLISTS: "wishlists"
      }
    },
    transaction: {
      on: {
        HOME: "home",
        WISHLISTS: "wishlists"
      }
    },
    wishlists: {
      on: {
        HOME: "home",
        TRANSACTION: "transaction"
      }
    }
  }
});
