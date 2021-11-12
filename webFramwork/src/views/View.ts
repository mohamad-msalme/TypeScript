export interface EventMapping {
  [key : string ] : (e? : Event) => void
}

export interface RegionMap {
  [key : string ] : Element
}

export interface ViewRequiredFun {
  templete() : string; // return html string 
  eventMap() : EventMapping
}

export abstract class View {

  protected parent: Element;
  protected dirty: boolean;
  protected regions: {[key: string] : Element} = {};
  abstract templete() : string;

  constructor(parentId : string ){
    this.parent = document.getElementById(parentId);
    if(!this.parent) {
      throw new Error ('root element is missing');
    }
    this.setDirty(false);
  }

  eventMap() : EventMapping {
    return {}
  }

  regionMap() : RegionMap {
    return {}
  }

  render() : void {
    const templeteElement = document.createElement('template');
    templeteElement.innerHTML = this.templete();
    this.bindEvent(templeteElement.content);
    this.parent.innerHTML = '';
    this.parent.append(templeteElement.content);
    this.onRender();
  }

  bindEvent(fragment: DocumentFragment) : void {
    const eventsMap = this.eventMap();
    for ( let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach(element => element.addEventListener(eventName, eventsMap[eventKey]))
    }
  }

  setDirty(dirty: boolean) {
    this.dirty = dirty;
    this.toggleSaveBtn()
  }

  getDirty() : boolean {
    return this.dirty
  }

  toggleSaveBtn() {
    const saveBtn = document.querySelector('.save-model') as HTMLButtonElement;
    if(!saveBtn) return 
    saveBtn.disabled = !this.getDirty();
  }

  onRender() : void {
    /**
     * overrride me when it is possible
     */
  }

}