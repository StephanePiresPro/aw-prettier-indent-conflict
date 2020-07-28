/* Config */
import { SOMEIMPORT_THREE, SOMEIMPORT_FOUR } from '../../../../../config/template-strings'

/* Common */
import { SOMEIMPORT } from '../../../../../common/string-transform/key/key-to-class-string'

export function someFunction() {
  // DO
  const classStringDOItems = 'something'

  // Parent
  const parentRangeKeys = 'something'
  const parentKeysParamNumberString = 'something'
  const parentKeysParamNumberStringWithThis = 'something'

  // Child
  const childInstanceStringDO = 'something'
  const childClassStringDO = 'something'

  // Range
  const rangeKeyUppercase = 'something'
  const instanceRangeKey = 'something'

  return `
export default class ${classStringDOItems} extends ${SOMEIMPORT_THREE.BASE_DO} {
  ${SOMEIMPORT_FOUR.CONSTRUCTOR} (appManager${parentKeysParamNumberString}) {
    super(appManager)${parentRangeKeys
      .map(
      (key) => `
    this.${key} = ${key}`
      )
    .join('')}
    this.${SOMEIMPORT.DO_ITEMS.ITEM_KEYS} = []
  }

  get ${SOMEIMPORT.DO.ITEM_KEYS} () {
    return this.${SOMEIMPORT.DO_ITEMS.ITEM_KEYS}
  }

  ${SOMEIMPORT_FOUR.INIT} () {
    const source = ${SOMEIMPORT_THREE.VAR_DIMS}.${rangeKeyUppercase}.${SOMEIMPORT.SOURCE}
    let enumKeys

    if (source) {
      const minIndex = source.${SOMEIMPORT.ORDER}.indexOf(${SOMEIMPORT_THREE.VAR_DIMS}.${rangeKeyUppercase}.${
    SOMEIMPORT.MIN
})
      const maxIndex = source.${SOMEIMPORT.ORDER}.indexOf(${SOMEIMPORT_THREE.VAR_DIMS}.${rangeKeyUppercase}.${
  SOMEIMPORT.MAX
})
      enumKeys = source.${SOMEIMPORT.ORDER}.slice(minIndex, maxIndex + 1)
    } else {
      enumKeys = []
      for (let i = ${SOMEIMPORT_THREE.VAR_DIMS}.${rangeKeyUppercase}.${SOMEIMPORT.MIN}; i <= ${
    SOMEIMPORT_THREE.VAR_DIMS
}.${rangeKeyUppercase}.${SOMEIMPORT.MAX}; i++) {
        enumKeys.push(i.toString())
      }
    }

    this.${SOMEIMPORT.DO_ITEMS.ITEM_KEYS} = []

    for (const ${instanceRangeKey} of enumKeys) {
      const ${SOMEIMPORT(childInstanceStringDO)} = new ${childClassStringDO}(this.${
    SOMEIMPORT.APP_MANAGER
}${parentKeysParamNumberStringWithThis}, ${instanceRangeKey})
`
}
