function assertEquals(){

    function getMen(){
        let numberOfMen=23;
        return numberOfMen
    };

    function getLadies(){
        let numberOfLadies = 23;
        return numberOfLadies
    };
    return getMen() == getLadies
};
console.log(assertEquals());