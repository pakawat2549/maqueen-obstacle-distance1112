basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 150)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
            maqueen.motorStop(maqueen.Motors.M1)
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 150)
                maqueen.motorStop(maqueen.Motors.M1)
            }
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
                maqueen.motorStop(maqueen.Motors.M2)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 150)
                    maqueen.motorStop(maqueen.Motors.M2)
                }
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
                } else {
                    maqueen.motorStop(maqueen.Motors.All)
                }
            }
        }
    }
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 20) {
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
        basic.pause(500)
    }
})
