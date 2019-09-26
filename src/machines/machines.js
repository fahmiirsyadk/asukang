import { Machine } from "xstate";

export const transactionFlow = Machine({
  id: "transaction",
  initial: "one",
  states: {
    one: {
      on: {
        NEXT: "two"
      }
    },
    two: {
      on: {
        NEXT: "one",
        UNDO: "one"
      }
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
