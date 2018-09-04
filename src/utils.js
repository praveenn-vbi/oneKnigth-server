const getRandomNumber = () =>{
    const min = 7777;
    const max = 777777; 
    return Math.floor(Math.random() * (+max - +min)) + +min;
}
export {getRandomNumber};