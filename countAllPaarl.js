function countAllPaarl(reg){
    let count = 0;
    
    let regArr = reg.split(",");
    for (let v in regArr){
     let trimmed = regArr[v].trim();
     if(trimmed.startsWith("CJ")){
        count += 1;
     } 
    }
     return count;}
    