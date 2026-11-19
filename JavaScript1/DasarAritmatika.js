/*
<html>
    <head>
        <title>contoh Program JS</title>
    </head>
    <SCRIPT LANGUAGE = "JavaScript">
        function pesan() {
            alert ("memanggil Javascript lewat body onload")
        }
    </SCRIPT>
    <BODY onLoad=pesan()>
    </BODY>
</html> 
*/

<html>
    <head>
        <title>Contoh Program JS</title>
    </head>
    <SCRIPT Language="JavaScript">
        function test(val1, val2) {
            document.write("<br>"+"perkalian : val1*val2 "+"<br>")
            document.write(val1*val2)
            document.write("<br>"+"pembagian : val1/</br>val2 "+"<br>")
            document.write(val1/val2)
            document.write("<br>"+"Penjumlahan : val1+val2 "+"<br>")
            document.write(val1+val2)
            document.write("<br>"+"Pengurangan : val1-val2 "+"<br>")
            document.write(val1-val2)
            document.write("<br>"+"Modulus : val1%val2 "+"<br>")
            document.write(val1%val2)
        }
    </SCRIPT>

    <BODY>
        <input type="button" name="button1" value="arithmetic" onclick=test(9,4)>
    </BODY>
</html>