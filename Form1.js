class Form {

    constructor() {
      this.input1 = createInput("name of online software");
      this.input2 = createInput("Second answer")
      this.input3 = createInput("")
      this.input4 = createInput("")
      this.input5 = createInput("")
      this.input6 = createInput("")


  
    }
    hide(){
      this.input.hide();
      this.input1.hide();
    }
  
    display(){
      this.input1.position(displayWidth/2 - 750 , displayHeight/2 + 150);
      this.input2.position(displayWidth/2 - 750 , displayHeight/2 + 190);
      this.input3.position(displayWidth/2 - 335 , displayHeight/2 - 385);
      this.input4.position(displayWidth/2 - 335 , displayHeight/2 - 315);
      this.input5.position(displayWidth/2 - 335 , displayHeight/2 - 240);
      this.input6.position(displayWidth/2 - 335 , displayHeight/2 - 170);
      
      /*this.button.position(displayWidth/2 + 680, 0);
  
      this.button.mousePressed(()=>{
       this.text = createElement('h2')
      
       this.text.html("Try and rearrange the words in a meaningful way like ILFE gets rearranged to LIFE ")
      
       this.text.position(displayWidth/2 + 710,0)

       this.text1 = createElement('h2')
      
       this.text1.html("Take a screenshot of this page and paste in ______ ")
      
       this.text1.position(displayWidth/2 + 710,30)

        
        });
      */
  
    }
  }
  