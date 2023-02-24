function playSlap(){
    var audio = new Audio("audio/slap.wav")
    audio.play()
    let nepiFace = document.getElementById("nepi")
    const spin = [
        {transform: "rotate(360deg)"}
    ]

    const timing = {
        duration: 200,
        iterations: 1
    }

    nepiFace.animate(spin, timing)
}