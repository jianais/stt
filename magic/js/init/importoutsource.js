/**
 * 由于在引入AsciiEffect.js的时候报THREE没有定义，所以THREE定义放到AsciiEffect.js文件中了
 */
import '../libs/AsciiEffect'
import '../libs/three'
/**
 * 用来导入外部js文件的类
 */
export default class ImportOutSource{
  constructor(){
    //console.log(THREE.AsciiEffect);
  }
}