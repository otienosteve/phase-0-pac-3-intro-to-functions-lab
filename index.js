const shout=(arg)=>{
    return arg.toUpperCase()
}
const whisper=(arg)=>{
    return arg.toLowerCase()
}
const logShout=(arg)=>{
    console.log(arg.toUpperCase())
}
const logWhisper=(arg)=>{
    console.log(arg.toLowerCase())
}
const sayHiToHeadphonedRoommate=(arg)=>{
    if(arg==='I would love to!'){
        return
    }
    if(arg==="Let's have dinner together!"){
        return 'I would love to!'
    }
    if(arg===arg.toLowerCase()){
        return "I can't hear you!"
    }
 return 'YES INDEED!'
}
sayHiToHeadphonedRoommate('I would love to!')
sayHiToHeadphonedRoommate("Let's have dinner together!")
sayHiToHeadphonedRoommate('OKAY')
sayHiToHeadphonedRoommate('okay')