import Max5DynamicIcon from "./Max5icon.svg";
import classNames from 'classnames';
export const Max5DynamicType = "Max5Dynamic";



import {
    Errors,
    FormContext,
    Description,
    DynamicList,
    Label
  } from '@bpmn-io/form-js';
  
  import {
    html,
    useContext
  } from 'diagram-js/lib/ui';
  
  export function Max5DynamicRenderer(props) {
  
    const {
      disabled,
      errors = [],
      field,
      readonly,
      value
    } = props;
  
    const {
      description,
      id,
      label
    } = field;
  
    const { formId } = useContext(FormContext);
  
    const errorMessageId = errors.length === 0 ? undefined : `${prefixId(id, formId)}-error-message`;
  
    const onChange = ({ target }) => {
      props.onChange({
        field,
        value: Number(target.value)
      });
    };
  
    return html`
    <div class=${ formFieldClasses(Max5DynamicType) }>
        
        <div role="group" class="fjs-form-field fjs-form-field-dynamiclist fjs-form-field-grouplike fjs-outlined" 
        aria-labelledby=${ prefixId(id, formId) }>

        <${Label}
        id=${ prefixId(id, formId) }
        label=${ label } />

          <div class="fjs-vertical-layout fjs-children cds--grid cds--grid--condensed">  
            <div class="fjs-empty-component">
              <span class="fjs-empty-component-text">
              Drag and drop components here.
              </span>
            </div>
          </div>
          
          <div class="fjs-repeat-render-footer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
              <path fill="currentColor" d="M3 3h10.086l-1.793-1.793L12 .5l3 3-3 3-.707-.707L13.086 4H3v3.5H2V4a1 1 0 0 1 1-1M4.707 10.207 2.914 12H13V8.5h1V12a1 1 0 0 1-1 1H2.914l1.793 1.793L4 15.5l-3-3 3-3z">
              </path>
            </svg>
            <span>Repeatable</span>
          </div>
        </div>

        

    </div>
      `;
  }


  Max5DynamicRenderer.config = {
    ...DynamicList.config,
    type: Max5DynamicType,
    label: 'Max5Dynamic',
    iconUrl: `data:image/svg+xml,${ encodeURIComponent(Max5DynamicIcon) }`,
    propertiesPanelEntries: [
      'key',
      'label',
      'description',
      'min',
      'max',
      'disabled',
      'readonly'
    ]
  };
  


  function formFieldClasses(type, { errors = [], disabled = false, readonly = false } = {}) {
    if (!type) {
      throw new Error('type required');
    }
  
    return classNames('fjs-form-field', `fjs-form-field-${type}`, {
      'fjs-has-errors': errors.length > 0,
      'fjs-disabled': disabled,
      'fjs-readonly': readonly
    });
  }
  
  function prefixId(id, formId) {
    if (formId) {
      return `fjs-form-${ formId }-${ id }`;
    }
  
    return `fjs-form-${ id }`;
  }