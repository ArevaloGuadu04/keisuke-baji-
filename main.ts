let lector = 0
basic.showString("BAJI")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    lector = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    lector,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(lector)
    }
})
