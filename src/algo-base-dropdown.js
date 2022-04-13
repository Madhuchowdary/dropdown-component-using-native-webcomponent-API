(function(){
   function toggleClass(elem,className){
        let Class = elem.getAttribute("class");
        if (Class.indexOf(className) !== -1){
            elem.setAttribute("class",Class.replace(className,'')) ;
        }
        else{
            elem.setAttribute("class", Class.replace(/\s+/g,' ') + 	' ' + className) ;
            
        }        
        return elem;
    }
    
   function toggleDisplay(elem){
        const curDisplayStyle = elem.style.display;			
                    
        if (curDisplayStyle === 'none' || curDisplayStyle === ''){
            elem.style.display = 'block';
        }
        else{
            elem.style.display = 'none';
        }
    }
    
    
   function toggleMenuDisplay(e){
        let menu = this.shadowRoot.querySelector('.menuCtr');
        let expandMore = this.shadowRoot.querySelector('.expandMore');
        let expandLess = this.shadowRoot.querySelector('.expandLess');
       // const icon = dropdown.querySelector('.fa-angle-right');
    
        this.toggleClass(menu,'hide');
        this.toggleClass(expandMore,'hide');
        this.toggleClass(expandLess,'hide');

       // this.toggleClass(icon,'rotate-90');
    }

   function handleOptionSelected(e){
        this.toggleClass(this.shadowRoot.querySelector('.menuCtr'), 'hide');			
    
        let id = e.target.id;
        let newValue = e.target.textContent + ' ';
        let selectedOption = this.shadowRoot.querySelector('.algo-dropdown .selectedOption');
        //const icon = document.querySelector('.dropdown .title .fa');
     
    
        selectedOption.textContent = newValue;
     //   titleElem.appendChild(icon);
        this.toggleClass(this.shadowRoot.querySelector('.expandMore'),'hide');
        this.toggleClass(this.shadowRoot.querySelector('.expandLess'),'hide');
        //trigger custom event
        //this.shadowRoot.querySelector('.algo-dropdown .dropdownContainer').dispatchEvent(new Event('change'));
        //setTimeout is used so transition is properly shown
      //  setTimeout(() => toggleClass(icon,'rotate-90',0));
    }
})();