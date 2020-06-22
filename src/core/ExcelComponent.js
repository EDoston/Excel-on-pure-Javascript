import {DomListner} from '@core/DomListner';

export class ExcelComponent extends DomListner {
  constructor($root, options = {}) {
    super($root, options.listners);
    this.name = options.name || '';
  }
  // Возврашаем шаблон компонента
  toHTML() {
    return '';
  }

  init() {
    this.initDOMListners();
  }

  destroy() {
    this.removeDOMListener();
  }
}
