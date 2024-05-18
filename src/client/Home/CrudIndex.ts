import LibConfig from '../lib/LibConfig';
import HttpCommon from '../lib/HttpCommon';
import Crud from './Crud';
//
const CrudIndex = {
 
  /**
  * getList
  * @param
  *
  * @return
  */
  getList :async function (): Promise<any>
  {
    try{
    } catch (e) {
      console.error(e);
      throw new Error("Error, getList");
    } 
  }  ,  
    /**
     *
     * @param
     *
     * @return ret: string
     */
    addItem : async function() : Promise<any>
    {
      try{
          let ret = "";
          const values = Crud.getInputValues();
          if(!values.input_text) {
            return ret;
          }
          const item = {
              "input_text": values.input_text,
          };            
console.log(item);
//return;
          const json = await HttpCommon.serverPost(item, "");
console.log(json);
          if (json.ret ===  LibConfig.OK_CODE) {
              ret = json.data;
          }
          return ret;
      } catch (e) {
        console.error("Error, addItem");
        console.error(e);
        throw new Error('Error , addItem');
      }
    },
}

export default CrudIndex;
