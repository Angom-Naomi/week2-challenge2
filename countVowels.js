function count(word){
    let foundvowels=new Array();
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    let counting=0;
    for(let a=0; a<word.length; a++){
      if (vowels.indexOf(word[a])!==-1){
        counting+=1;
        foundvowels.push(word[a]);
      }
    }
    return counting;
  }
  console.log(count("Eloquent Javascript"));
  
  