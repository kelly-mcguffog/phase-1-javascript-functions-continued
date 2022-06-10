// code your solution here

function saturdayFun(saturdayActivity = "roller-skate"){
    return `This Saturday, I want to ${saturdayActivity}!`
};
saturdayFun();

const mondayWork = function(mondayActivity = "go to the office"){
    return `This Monday, I will ${mondayActivity}.`
};
mondayWork();

function wrapAdjective(visualFlair = "*"){
    return function(adjective = "special"){
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    };
}
wrapAdjective("%")("a dedicated programmer");