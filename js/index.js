    /*realizamos un selector para guardar en un contenedor el video*/
    const $video = document.querySelector('#video')
    const $play = document.querySelector('#play')
    const $pause = document.querySelector('#pause')
    const $backward = document.querySelector('#backward')
    const $forward = document.querySelector('#forward')


    /*eventos (metodo) al accionar clic*/
    $play.addEventListener('click', handlePlay )
    $pause.addEventListener('click', handlePause )

    function handlePlay(){
        $video.play()
        $play.hidden = true
        $pause.hidden = false
        console.log('le distes clik al boton de play')
    }
    function handlePause(){
        $video.pause()
        $pause.hidden = true
        $play.hidden = false
        console.log('le distes clik al boton de pause')
    }

    $backward.addEventListener('click', handBackward )

    function handBackward(){
        //$video.currentTime = $video.currentTime - 10
        $video.currentTime -= 10
        console.log('retroceder 10s')
    }

    $forward.addEventListener('click', handForward )

    function handForward(){
        $video.currentTime = $video.currentTime + 10
        console.log('avanzar 10s')
    }