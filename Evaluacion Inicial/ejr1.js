function inicializar(){
    flag = true;
    loop=0
    
    names=[];
    word =[]
    letr=''
    while(flag==true &&loop<5){
        let name= prompt('Introduce su nombre');
        for(i=0;i<names.length;i++){
            if(name==names[i]){
                console.log('Nombre repetido');
                flag= false;
            }
        }
        if(flag==true){
            names.push(name);
            
            word.push(name.substring(0,1))
            loop+=1;
        }
        
        
        
    }
    word.sort();
    console.log(word)
}