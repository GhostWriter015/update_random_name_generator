function random_name_generator(){
    let name = '';
    let vowels = ['a','e','i','o','u'];
    let cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let initialL = Math.floor(Math.random()*2);
    if(initialL == 0){
        initialL = randomizedV();
    }else{
        initialL = randomizedC();
    }
    name += initialL;
    
    let current = initialL;

    

    for(let i = 1; i < 4; i++){
        if(vowels.includes(current)){
            current = randomizedC();
            name += current;
 
        }else{
            current = randomizedV();
            name += current;
        }
    }
    
    return name + 'h';
}





//funzione randomica che sceglie una vocale a caso
function randomizedV(){
    let vowels = ['a','e','i','o','u'];
    let max = 4;
    let v = '';
    let currentV= Math.floor(Math.random()*max);
    switch(currentV){
        case 0:
            v = vowels[0];
            break;
        case 1:
            v = vowels[1];
            break;
        case 2:
            v = vowels[2];
            break; 
        case 3:
            v = vowels[3];
            break;
        default:
            v = vowels[4];
    }
    return v;
}


//funzione randomica che sceglie una consonante a caso
function randomizedC(){
  let cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
  let max = 20;
  let c = '' ;
  let currentC= Math.floor(Math.random()*max);
  switch(currentC){
    case 0:
        c = cons[0];
        break;
    case 1:
        c = cons[1];
        break;
    case 2:
        c = cons[2];
        break;
    case 3:
        c = cons[3];
        break;
    case 4:
        c = cons[4];
        break;
    case 5:
        c = cons[5];
        break;
    case 6:
        c = cons[6];
        break;
    case 7:
        c = cons[7];
        break;
    case 8:
        c = cons[8];
        break;
    case 9:
        c = cons[9];
        break;
    case 10:
        c = cons[10];
        break;
    case 11:
        c = cons[11];
        break;
    case 12:
        c = cons[12];
        break;
    case 13:
        c = cons[13];
        break;
    case 14:
        c = cons[14];
        break;
    case 15:
        c = cons[15];
        break;
    case 16:
        c = cons[16];
        break;
    case 17:
        c = cons[17];
        break;
    case 18:
        c = cons[18];
        break;
    case 19:
        c = cons[19];
        break;
    default:
        c = cons[20];
  }
  return c;
}
console.log(random_name_generator());


