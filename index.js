let data = [
    [
        "",
        "",
        "",
        "",
        ""
       ],
    [
    "Mohsin",
    "Ghani",
    "03123456789",
    "Male",
    "abc@gmail.com"
   ],
   [
    "Atif",
    "Ahmad",
    "03123456789",
    "Male",
    "abc@gmail.com"
   ],
   [
   "Sarib",
    "Ghouri",
    "03123456789",
    "Male",
    "abc@gmail.com"
   ],
   [
    "Irfan",
    "Ali",
    "03123456789",
    "Male",
    "abc@gmail.com"
   ],
   [
    "Ahmed",
    "Imran",
    "03123456789",
    "Male",
    "abc@gmail.com"
    
   ]
];

document.write( "<table border = '1px' cellspacing = '5'>");
 document.write(`<th> No  </th>`); 
document.write(`<th> Sr.No  </th>`);
document.write(`<th> First names  </th>`);
document.write(`<th> Second names  </th>`);
document.write(`<th> Phone#  </th>`);
 document.write(`<th> Genders  </th>`);
 document.write(`<th> Emails </th>`);
 for(let i = 1; i<=5; i++){
      document.write ("<tr>");
       document.write(`<td>${[i]}  </td>`); 
       document.write(`<td> 00${[i]}  </td>`); 
for(let j=0;j<5;j++){
document.write(`<td> ${data[i][j]}  </td>`);  
    }
   //  document.write("<br/>");
    document.write ("</tr>");
   }     
   document.write ("</table>");   