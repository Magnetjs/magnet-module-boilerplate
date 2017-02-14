import Base from 'magnet-core/base'
import defaultConfig from './config/moduleName'

export default class ModuleName extends Base {
  async setup () {
    let config = Object.assign(defaultConfig, this.config.moduleName, this.options)
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
