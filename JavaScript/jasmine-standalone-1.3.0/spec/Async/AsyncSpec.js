 describe("Asynchronous testing", function() {
    it("should simulate an asynchronous call", function () {
      runs(function() {
        flag = false;
        value = 0;
        intId = setInterval(function() {
          console.log(value);
          if (++value == 3) { clearInterval(intId); flag = true; }
        }, 500);
      }); 
     
      waitsFor(function() {
        return flag;
      }, "The Value should be incremented", 5000); 
       
      runs(function() {
        expect(value).toEqual(3); //this will pass
      });
    });
  });

 describe("Ajax Tests Using run() and waitsFor()", function() {
  var flag, value, intId;
 
  beforeEach(function() {
    flag = false,
    value = 0,
    intId = setInterval(function() {
      console.log(value);
      if (++value == 3) { flag = true; }
    }, 500);
  });
 
  afterEach(function() {
    clearInterval(intId); 
  });
 
  it("should simulate an asynchronous call", function () {
    waitsFor(function() {
      return value == 3;
    }, "The Value should be incremented", 5000); 
     
    runs(function() {
      expect(value).toEqual(3);
    });
     
    waitsFor(function() {
      return flag;
    }, "The Value should be incremented", 5000); 
     
    runs(function() {
      expect(flag).toEqual(true);
    });
  });
});