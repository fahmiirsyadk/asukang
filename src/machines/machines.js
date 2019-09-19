import { Machine } from "xstate";

// export const transactionForm = Machine({
//   id: "transactionForm",
//   initial: "dataEntry",
//   states: {
//     dataEntry: {
//       on: {
//         ENTER_NAME: {
//           actions: "cachedName"
//         },
//         ENTER_NOMINAL: {
//           actions: "cachedPassword"
//         },
//         NAME_BLUR: {
//           cond: "isNoAccount",
//           target: "nameErr.noAccount"
//         },
//         NOMINAL_BLUR: {
//           cond: "isEmptyNominal",
//           target: "nominalErr.emptyNominal"
//         },
//         SUBMIT: [
//           {
//             cond: "isNoAccount",
//             target: "emailErr.noAccount"
//           },
//           {
//             cond: "isEmptyNominal",
//             target: "nominalErr.emptyNominal"
//           },
//           {
//             target: "awaitingResponse"
//           }
//         ]
//       }
//     },
//     awaitingResponse: {
//       invoke: {
//         src: "requestForm",
//         onDone: {
//           target: "success"
//         },
//         onError: [
//           {
//             cond: "isNoAccount",
//             target: "emailErr.noAccount"
//           },
//           {
//             cond: "isEmptyNominal",
//             target: "nominalErr.emptyNominal"
//           },
//           {
//             cond: "isServiceErr",
//             target: "serviceErr"
//           }
//         ]
//       }
//     },
//     nameErr: {
//       on: {
//         ENTER_NAME: {
//           target: "dataEntry",
//           actions: "cachedName"
//         }
//       },
//       initial: "noAccount",
//       states: {
//         noAccount: {}
//       }
//     },
//     nominalErr: {
//       on: {
//         ENTER_NOMINAL: {
//           target: "dataEntry",
//           actions: "cachedNominal"
//         }
//       },
//       initial: "emptyNominal",
//       states: {
//         emptyNominal: {},
//         incorrect: {},
//         success: {
//           type: "final",
//           onDone: {
//             actions: "onSubmitForm"
//           }
//         }
//       }
//     },
//     serviceErr: {
//       on: {
//         SUBMIT: {
//           target: "awaitingResponse"
//         }
//       }
//     },
//     success: {}
//   },
//   context: {
//     target: "",
//     nominal: 0
//   }
// });

const emailStates = {
  initial: "noError",
  states: {
    noError: {},
    error: {
      initial: "empty",
      states: {
        empty: {},
        badFormat: {},
        noAccount: {}
      },
      onEntry: "focusEmailInput"
    }
  }
};

const passwordStates = {
  initial: "noError",
  states: {
    noError: {},
    error: {
      initial: "empty",
      states: {
        empty: {},
        tooShort: {},
        incorrect: {}
      },
      onEntry: "focusPasswordInput"
    }
  }
};

const authServiceStates = {
  initial: "noError",
  states: {
    noError: {},
    error: {
      initial: "communication",
      states: {
        communication: {
          on: {
            SUBMIT: "#signInForm.waitingResponse"
          }
        },
        internal: {}
      }
    }
  }
};

export const transactionForm = {
  id: "signInForm",
  context: {
    email: "",
    password: ""
  },
  initial: "ready",
  states: {
    ready: {
      type: "parallel",
      on: {
        INPUT_EMAIL: {
          actions: "cacheEmail",
          target: "ready.email.noError"
        },
        INPUT_PASSWORD: {
          actions: "cachePassword",
          target: "ready.password.noError"
        },
        SUBMIT: [
          {
            cond: "isNoEmail",
            target: "ready.email.error.empty"
          },
          {
            cond: "isEmailBadFormat",
            target: "ready.email.error.badFormat"
          },
          {
            cond: "isNoPassword",
            target: "ready.password.error.empty"
          },
          {
            cond: "isPasswordShort",
            target: "ready.password.error.tooShort"
          },
          {
            target: "waitingResponse"
          }
        ]
      },
      states: {
        email: {
          ...emailStates
        },
        password: {
          ...passwordStates
        },
        authService: {
          ...authServiceStates
        }
      }
    },
    waitingResponse: {
      on: {
        CANCEL: "ready"
      },
      invoke: {
        src: "requestSignIn",
        onDone: {
          actions: "onSuccess"
        },
        onError: [
          {
            cond: "isNoAccount",
            target: "ready.email.error.noAccount"
          },
          {
            cond: "isIncorrectPassword",
            target: "ready.password.error.incorrect"
          },
          {
            cond: "isNoResponse",
            target: "ready.authService.error.communication"
          },
          {
            cond: "isInternalServerErr",
            target: "ready.authService.error.internal"
          }
        ]
      }
    }
  }
};

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
