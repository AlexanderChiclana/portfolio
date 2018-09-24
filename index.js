
$(() => {

    const switchTic = function () {
        event.preventDefault()
        $('.barTinder').css('display','none')
        $('.soundclout').css('display','none')
        $('.ticTacToe').css('display','block')
        $('.bucketlist').css('display','none')
        $('.miami').css('display','none')


    }

    const switchSound = function () {
        event.preventDefault()
        $('.barTinder').css('display','none')
        $('.ticTacToe').css('display','none')
        $('.soundclout').css('display','block')
        $('.bucketlist').css('display','none')
        $('.miami').css('display','none')


    }   

    const switchBar = function () {
        event.preventDefault()
        $('.barTinder').css('display','block')
        $('.ticTacToe').css('display','none')
        $('.soundclout').css('display','none')
        $('.bucketlist').css('display','none')
        $('.miami').css('display','none')


    }   

    const switchBuck = function () {
        event.preventDefault()
        $('.barTinder').css('display','none')
        $('.ticTacToe').css('display','none')
        $('.soundclout').css('display','none')
        $('.bucketlist').css('display','block')
        $('.miami').css('display','none')


    }   

    const switchMiami = function () {
        event.preventDefault()
        $('.barTinder').css('display','none')
        $('.ticTacToe').css('display','none')
        $('.soundclout').css('display','none')
        $('.bucketlist').css('display','none')
        $('.miami').css('display','block')



    }   

    const aboutMe = function (){
        $('.projects').css('display', 'none')
        $('.about').css('display','block')
    }

    const projects = function (){
        $('.projects').css('display', 'block')
        $('.about').css('display','none')
    }

    $('.project1').on('click', switchTic)
    $('.project2').on('click', switchSound)
    $('.project3').on('click', switchBuck)
    $('.project4').on('click', switchBar)
    $('.project5').on('click', switchMiami)


    $('.aboutMe').on('click',aboutMe)
    $('.projectTab').on('click',projects)

    
})