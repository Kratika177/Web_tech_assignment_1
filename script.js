function perform(){
    var op=document.querySelector('input[name="radio_value"]:checked').value;
    var num1=(document.getElementById("num1").value);
    var num2=(document.getElementById("num2").value);
    var out=document.getElementById("output");
    if (document.getElementById('fact').checked) {
            document.getElementById("heading").innerHTML="Factorial"
            var fact=1;
            for(let i=1;i<=parseInt(num1);i++){
                fact=fact*i;    
            }
            (out.value)=fact;
      }
    else if(document.getElementById('revn').checked){
        document.getElementById("heading").innerHTML="Reverse of a Number"
            var n=parseInt(num1);
            var sum=0;
            var rem=0;
            while(n!=0){
                rem=(n%10);
                sum=sum*10+rem;
                n=parseInt(n/10);
            }
            (out.value)=sum;
    }
    else if(document.getElementById('revs').checked){
        document.getElementById("heading").innerHTML="Reverse of String"
        var str = "";
        num1=num1.split("");
        for (var i = num1.length - 1; i >= 0; i--) { 
            str += num1[i]; 
        }
        out.value=str;
    }
    else if(document.getElementById('arm').checked){
        document.getElementById("heading").innerHTML="Check for Armstrong"
        var sum=0;
        var n=parseInt(num1);
        while(n!=0){
            var rem=n%10;
            sum=sum+(rem*rem*rem);
            n=parseInt(n/10);
        }
        if(sum==parseInt(num1))
            out.value="Yes";
        else{
                out.value="No"
            }
    }
    else if(document.getElementById('prime').checked){
        document.getElementById("heading").innerHTML="Check for Prime"
        var n=parseInt(num1);
        var flag=true;
        for(var i=2;i<=(n/2);i++){
            if(parseInt(n%i)==0){
                flag=false;
            }
        }
        if(flag===true){
            out.value="Yes"
        }
        else{
            out.value="No"
        }
    }
    
    }

