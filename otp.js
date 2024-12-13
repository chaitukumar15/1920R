function otp(){
    var otp="";
        for(i=0;i<5;i++){
     
            var n=Math.floor(Math.random()*10);
            otp=+n;
        }
    
        return otp;
    }
    
    console.log(otp());
    