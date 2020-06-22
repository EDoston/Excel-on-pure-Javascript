import {capitalize} from '@core/util';

export class DomListner {
  constructor($root, listners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomList`);
    }
    this.$root = $root;
    this.listners = listners;
  }

  initDOMListners() {
    this.listners.forEach(listner => {
      const method = getMethodName(listner)
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(`
          Method ${method} is not implimented in ${name} Component
          `
        )
      }
      this[method] = this[method].bind(this);
      this.$root.on(listner, this[method]);
    })
  }
  removeDOMListner() {
    this.listner.forEach(listner => {
      const method = getMethodName(listner);
      this.$root.off(listner, this[method]);
    })
  }
}

function getMethodName(eventName) {
  const clickType = 'on' + capitalize(eventName);
  console.log('clickType', clickType);
  return clickType;
}
