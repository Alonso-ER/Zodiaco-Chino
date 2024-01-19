//12 Lunaciones por año, 354 dias
// Hay años con 13 lunas

const zodiaco = () =>{
    event.preventDefault();
    const dateControl = document.getElementById('fecha').value;
    let año = parseInt(dateControl.substr(0,4));
    let mes1 = parseInt(dateControl.slice(5,7));
    let mes2 = mes1 -1;
    let dia = parseInt(dateControl.slice(8,10));
    let jax = new Date(año,mes2,dia);
    let signo =''
    let date=new Date(1900,0,31);
    let cont = 0;
    let contCiclo = 0;
    let elim= '';
    for(i=1.0;i<2;i=i+0.4){
        
        let dd = date.getDate();
        let mm = date.getMonth();
        let yy = date.getFullYear();
        let year = date.getFullYear();

        let morde = new Date(yy,mm,dd);
        
        
        switch (mm){
            case 0: mm='Enero';
                break;
            case 1: mm='Febrero';
                break;
            case 2: mm='Marzo';
                break;
            case 3: mm='Abril';
                break;
            case 4: mm='May0';
                break;
            case 5: mm='Junio';
                break;
            case 6: mm='Julio';
                break;
            case 7: mm='Agosto';
                break;
            case 9: mm='Septiembre';
                break;
            case 9: mm='Octubre';
                break;
            case 10: mm='Noviembre';
                break;
            case 11: mm='Diciembre';
                break;
        }

        let a = ('Inicia: ' + dd +' de '+ mm +' del '+ yy);
        if(cont%12===0){
            contCiclo++
        }
            let h = cont;
                if(contCiclo===2){
                    h = h-12;
                }
                if(contCiclo===3){
                    h = h-24;
                }
                if(contCiclo===4){
                    h = h-36;
                }
                if(contCiclo===5){
                    h = h-48;
                }
                if(contCiclo===6){
                    h = h-60;
                }
                if(contCiclo===7){
                    h = h-72;
                }
                if(contCiclo===8){
                    h = h-84;
                }
                if(contCiclo===9){
                    h = h-96;
                }
                if(contCiclo===10){
                    h = h-108;
                }
                if(contCiclo===11){
                    h = h-120;
                }
                if(contCiclo===12){
                    h = h-132;
                }
                if(contCiclo===13){
                    h = h-44;
                }
                switch (h){
                    case 0:
                        signo='rata';
                        break;
                    case 1:
                        signo='buey';
                        break;
                    case 2:
                        signo='tigre';
                        break;
                    case 3:
                        signo ='conejo';
                        break;
                    case 4:
                        signo ='dragon';
                        break;
                    case 5:
                        signo ='serpiente';
                        break;
                    case 6:
                        signo ='caballo';
                        break;
                    case 7:
                        signo ='cabra';
                        break;
                    case 8:
                        signo ='mono';
                        break;
                    case 9:
                        signo ='gallo';
                        break;
                    case 10:
                        signo ='perro';
                        break;
                    case 11:
                        signo ='cerdo';
                        break;
                    default:
                        break;
        }
        cont++
        
        eval("j"+cont+"="+'a');
        if(cont >=150){
            i=5;
        } else if(i>=1.4){
                date.setDate(date.getDate() +384);
                i=i-1;
        } else if(cont===10){
            date.setDate(date.getDate() +383);
            i=i-1.2;
        } else if(i<=1.2){
            date.setDate(date.getDate() + 353);
        } 
        
        let d2 = date.getDate();
        let m2 = date.getMonth();
        let y2 = date.getFullYear();

        let ornn = new Date(y2,m2,d2-1);
        

        switch (m2){
            case 0: m2='Enero';
                break;
            case 1: m2='Febrero';
                break;
            case 2: m2='Marzo';
                break;
            case 3: m2='Abril';
                break;
            case 4: m2='Mayo';
                break;
            case 5: m2='Junio';
                break;
            case 6: m2='Julio';
                break;
            case 7: m2='Agosto';
                break;
            case 9: m2='Septiembre';
                break;
            case 9: m2='Octubre';
                break;
            case 10: m2='Noviembre';
                break;
            case 11: m2='Diciembre';
                break;
        }

        let b = ('Termina: '+d2+' de '+m2+' del '+y2);
        switch (año) {
            case year:

                    if(morde>jax){
                        switch (h){
                            case 0:
                                signo='cerdo';
                                break;
                            case 1:
                                signo='rata';
                                break;
                            case 2:
                                signo='buey';
                                break;
                            case 3:
                                signo ='tigre';
                                break;
                            case 4:
                                signo ='conejo';
                                break;
                            case 5:
                                signo ='dragon';
                                break;
                            case 6:
                                signo ='serpiente';
                                break;
                            case 7:
                                signo ='caballo';
                                break;
                            case 8:
                                signo ='cabra';
                                break;
                            case 9:
                                signo ='mono';
                                break;
                            case 10:
                                signo ='gallo';
                                break;
                            case 11:
                                signo ='perro';
                                break;
                            default:
                                break;
                }
                        document.getElementById('formulario').style.display='none';
                        document.getElementById(signo).style.display ='block';
                        document.getElementById('start').innerHTML = (a);
                        document.getElementById('end').innerHTML = (b);
                    } else{
                        document.getElementById('formulario').style.display='none';
                        document.getElementById(signo).style.display='block';
                        document.getElementById('start').innerHTML = (a);
                        document.getElementById('end').innerHTML = (b);
                    }
                break;
            default:
                break;
        }
        elim = signo;
    }
}

const elemento = () =>{ 
    let otraVariable='';
    const dateControl = document.getElementById('fecha').value;
    let año = parseInt(dateControl.substr(3,4));
    console.log(año)
    switch (año){
        case 0:
            otraVariable='metal';
            break;
        case 1:
            otraVariable='metal';
            break;
        case 2:
            otraVariable='agua';
            break;
        case 3:
            otraVariable='agua';
            break;
        case 4:
            otraVariable='madera';
            break;
        case 5:
            otraVariable='madera';
            break;
        case 6:
            otraVariable='fuego';
            break;
        case 7:
            otraVariable='fuego';
            break;
        case 8:
            otraVariable='tierra';
            break;
        case 9:
            otraVariable='tierra';
            break;
        default:
            break;

    }

    document.getElementById(otraVariable).style.display='block';
}
        
