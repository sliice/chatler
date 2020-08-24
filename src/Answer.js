const randomInteger = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

export const answer = message => {
    let answer = '';
    const
        // phrases to answer:
        greetings = ['yo!', 'hey!', 'hi!'],
        partings = ['bye :(', 'bye-bye!', 'see ya!', 'c u :)'],
        phrases = ['wow!', 'thats great!', 'okay', 'well...', 'bo-ring.', 'hahaha', 'cool', 'i love cats', 'supercool.', 'ummmm...'],

        // reg exps:
        greetingRegExp = /(yo)|(hello)|(hey)|(hi)/,
        partingRegExp = /(bye)|(bye-bye)|(goodbye)|(see you)|(see ya)|(c u)/;

    if ( greetingRegExp.test(message) ){
        answer = greetings[randomInteger(0, 2)];
    } else if ( partingRegExp.test( (message) )){
        answer = partings[randomInteger(0, 3)];
    } else {
        answer = phrases[randomInteger(0, 9)];
    }

    return answer;
}