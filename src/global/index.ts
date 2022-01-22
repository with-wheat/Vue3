import { App } from 'vue'

import registerElement from './register-element'

export function globalRegister(app: App): void {
  app.use(registerElement)
  // registerElement(app);   //也可以这么写
}
