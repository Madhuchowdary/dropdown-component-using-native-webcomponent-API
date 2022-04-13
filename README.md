# dropdown-component-using-native-webcomponent-API
framework agnostic dropdown menu using web components API which will be used as normal HTML tag 
just include a template tag which contains the configuration object followed by custom tag as below

<template id="tempDropdown">{         
          "options" :["option1","ooption2","option3","option4"]
}</template> 
<algo-dropdown id="dropdown1" templateId = "tempDropdown">         
</algo-dropdown>
