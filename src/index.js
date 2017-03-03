import { Module } from 'magnet-core/module'
import defaultConfig from './config/moduleName'

export default class ModuleName extends Module {
  async setup () {
    let config = this.prepareConfig(<moduleName>, defaultConfig)
  }

  async teardown () {

  }
}

//  Or
//
// import convert from 'magnet-core/convert'
// export default convert(
//   module,
//   {
//     namespace: 'moduleName',
//     initializer: 'initializer',
//     params: ['config.key1', 'config.key2']
//   },
//   defaultConfig
// )
