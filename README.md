I want to make my own custom element for camunda forms

I started by downloading this ===>>> https://github.com/bpmn-io/form-js-examples/tree/master/custom-components

And i followed the example of how to make a custom range element. 

My ultimate goal is I wanted to create a dynamic list with a maximum of 5 elements. 

Their dynamic list can add elements to the list by dragging the element over the top. 

here you can see the default dynamic list being used. 


(see image "handling new elem in dynamic list.png")


ive tried to recreate the dynamic list. But I'm not saure how they handle adding new elements to the list. 


(see image "my dynamic list.png")


How are elements added to a dynamic list? what functions are used or what may i be missing?

I imagine I might need to add stuff to my CustomPropertiesProvider.js but im just not sure what?

go to "Trying_to_recreate_dynamic_list\custom-components" and enter "npm run dev" to start 

my "Trying_to_recreate_dynamic_list\custom-components\app\extension\render\max5dynamiclist.js" file is where i created my own custom dynamic list 
