
class commonMethods{
    get selectors() {
        return {
          getStarted: $('~Get Started'),
          phoneNumber: $('~phone-input'),
          next: $('~Next'),
          continue: $('~Continue')
        };
      }



      clickNext(){
        this.form.next.click();
      }

      clickContinue(){
        this.form.continue.click();
      }
      
      
}


export default new CommonMethods();


