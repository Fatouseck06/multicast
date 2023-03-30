input.onButtonPressed(Button.A, function () {
    radio.sendString("rokhayakouyat")
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(200)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("rokhayakouyate")
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(200)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("rokhayakouyate")
    basic.showIcon(IconNames.Rollerskate)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
basic.forever(function () {
	
})
