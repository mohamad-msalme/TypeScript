import {ModelEvent} from "./Model"

interface Events {
  [key: string]: Callback[]
}

export type Callback = () => void;

export class Eventing implements ModelEvent{

  private events : Events = {}

  addEvent(eventName: string, callback: Callback) : void {
    const handler = this.events[eventName] || [];
    this.events = {...this.events, [eventName] : [...handler, callback]};
  }

  triggerEvent(eventName: string) : void {
    (eventName in this.events) && this.events[eventName].forEach((callback) => callback());
  }

}