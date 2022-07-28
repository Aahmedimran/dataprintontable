
       let firstNames = [
        
        "Mohsin",
        "Ahmad",
        "Sarib",
        "Sunny",
        "Atif"
       ]
       let secondNames = [
       
        "Ghani",
        "Ahmad",
        "Ghouri",
        "Irfan",
        "Ahmed"
       ]
       let phones = [
       
        "03123456789",
        "03123456789",
        "03123456789",
        "03123456789",
        "03123456789"
       ]
       let genders =  [
       
        "Male",
        "Male",
        "Male",
        "Male",
        "Male"
       ]
       let emails =  [
       
        "mohsinghani.777@gmail.com",
        "ahmed.eng2709@gmail.com",
        "Sarib@abc.com",
        "Sunny@abc.com",
        "Atif@gmail.com"
       ]
    
    
    document.write( "<table border = '1px' cellspacing = '5'>");
     document.write(`<th> No  </th>`); 
    document.write(`<th> Sr.No  </th>`);
    document.write(`<th> First names  </th>`);
    document.write(`<th> Second names  </th>`);
    document.write(`<th> Phone#  </th>`);
     document.write(`<th> Genders  </th>`);
     document.write(`<th> Emails </th>`);
     for(let i = 0; i<firstNames.length; i++){
          document.write ("<tr>");
           document.write(`<td>${[i+1]}  </td>`); 
           document.write(`<td> 00${[i+1]}  </td>`); 
           document.write(`<td> ${firstNames[i]}  </td>`); 
           document.write(`<td> ${secondNames[i]}  </td>`); 
           document.write(`<td> ${phones[i]}  </td>`);
           document.write(`<td> ${genders[i]}  </td>`);
           document.write(`<td> ${emails[i]}  </td>`);
        document.write ("</tr>");
       }     
       document.write ("</table>");   