function simple(){
    console.log('Simple is here!')
}

export default function simple2(){ // if import any simple from moduleSecond and that is not present here so it import default function ! #this
    console.log("simple2 is complex");
    
}

// module.exports = simple; // error export --> exports this is correct way.
