import { Subject } from "rxjs";

const subject = new Subject();

export const messageServices = {
  sendMessage: message => subject.next({ text: message }),
  clearMessage: () => subject.next(),
  getMessage: () => subject.asObservable()
};
