contEmp =3
dniEmp=['77332344K','23445677J','12345678H']
function insert(){
    flag=true;
    dni = prompt('Introduzca un empleado');

    for(i=0;i<dniEmp.length;i++){
        if(dniEmp[i]===dni){
            flag= false;
            alert('Dni del empleado repetido')
        }
    }
    if(flag==true){
        nombre= prompt('Introduzca el nombre');
        apellido = prompt('Introduzca el apellido')
        contEmp+=1;
        let td1 =document.createElement('td')
        td2 = document.createElement('td')
        td3 = document.createElement('td')
        td4 = document.createElement('td')
        nif=document.createTextNode(dni)
        nemp= document.createTextNode(contEmp)
        apell = document.createTextNode(apellido)
        nom= document.createTextNode(nombre)
        td1.appendChild(nemp)
        td2.appendChild(nif)
        td3.appendChild(apell)
        td4.appendChild(nom)
        tr= document.createElement('tr')
        table = document.getElementById('e')

        tr.appendChild(td1)
        tr.appendChild(td4)
        tr.appendChild(td2)
        tr.appendChild(td3)
       table.appendChild(tr)

    }   
    document.getElementById('title').innerHTML=(`Número total de empleados ${contEmp}`)
    }
    
    
    
    
   
   