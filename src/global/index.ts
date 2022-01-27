import { App } from 'vue'

import registerElement from './register-element'
import pageFilters from './register-filters'
export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(pageFilters)
  // registerElement(app);   //也可以这么写
}
