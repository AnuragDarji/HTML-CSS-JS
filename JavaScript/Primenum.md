# Primenumber Using JS

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Prime Number</title>
    <script type="text/javascript">
        function test_prime(str){
            var num = Number(str);
            if(num===1){
                return false;
            }
            else if(num===2){
                return true;
            }
            else{
                for(var m=2;m<num;m++){
                    if(num%m==2){
                        return false;
                    }
                }
                return true;
            }
        }
    </script>
</head>
<body>
    <script type="text/javascript">
        str = prompt("Enter some number","");
        if(test_prime(str))
            document.write("The number is prime");
        else
            document.write("The number is not prime")
    </script>
</body>
</html>
```

**Output:**

![App Screenshot](https://user-images.githubusercontent.com/127482974/231401611-1c186f5a-679a-4da4-aacd-cd332f5628f6.PNG)
![App Screenshot](https://user-images.githubusercontent.com/127482974/231401875-240fb5e6-efed-42c4-8425-67dd88539ae6.PNG)
