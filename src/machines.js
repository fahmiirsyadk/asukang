import { Machine } from "xstate";

export const isNewAccount = Machine({
  id: "newAccount",
  initial: "new",
  states: {
    new: {
      on: {
        REGISTER: "old"
      }
    },
    old: {
      type: "final"
    }
  }
});

export const transactionFlow = Machine({
  id: "transaction",
  initial: "add",
  states: {
    add: {
      on: {
        CONFIRMATION: "confirmation",
        OVERWRITE: "overwrite"
      }
    },
    confirmation: {
      on: {
        BACK: "add",
        PROCESS: "add"
      }
    },
    overwrite: {
      on: {
        BACK: "add",
        PROCESS: "add"
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
        WISHLISTS: "wishlists",
        DEBTS: "debts"
      }
    },
    transaction: {
      on: {
        HOME: "home",
        WISHLISTS: "wishlists",
        DEBTS: "debts"
      }
    },
    wishlists: {
      on: {
        HOME: "home",
        TRANSACTION: "transaction",
        DEBTS: "debts"
      }
    },
    debts: {
      on: {
        HOME: "home",
        TRANSACTION: "transaction",
        WISHLISTS: "wishlists"
      }
    }
  }
});

export const paymentFlow = Machine({
  id: "paymentFlow",
  initial: "home",
  states: {
    home: {
      on: {
        NEXT: "prepare"
      }
    },
    prepare: {
      on: {
        NEXT: "insert_nominal",
        BACK: "home"
      }
    },
    insert_nominal: {
      on: {
        BACK: "prepare",
        NEXT: "success"
      }
    },
    success: {
      on: {
        NEXT: "prepare"
      }
    }
  }
});
