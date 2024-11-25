import { RangeRenderer, rangeType } from './Range';
import { Range2Renderer, range2Type } from './Range2';
import { Max5DynamicRenderer, Max5DynamicType } from './max5dynamiclist';


/*
 * This is the module definition of the custom field. This goes
 * into the Form instance via `additionalModules`.
*/ 
class CustomFormFields {
  constructor(formFields) {
    formFields.register(rangeType, RangeRenderer);
    formFields.register(range2Type, Range2Renderer);
    formFields.register(Max5DynamicType, Max5DynamicRenderer);
  }
}


export default {
  __init__: [ 'rangeField' ],
  rangeField: [ 'type', CustomFormFields ]
};


/*
class CustomFormFields {
  constructor(formFields) {
    formFields.register(MyComponentType, MyComponentRenderer);
  }
}


export default {
  __init__: [ 'MyComponentField' ],
  MyComponentField: [ 'type', CustomFormFields ]
};
*/