import { App } from 'vue'

import pageFilters from './register-filters'
export function globalRegister(app: App): void {
  app.use(pageFilters)
  // registerElement(app);   //也可以这么写
}
