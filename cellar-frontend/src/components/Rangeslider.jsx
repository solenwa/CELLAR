import { useEffect, useState } from "react"

function RangeSlider({ min, max, value, step, onChange }) {
    const [minValue, setMinValue] = useState(value ? value.min : min)
    const [maxValue, setMaxValue] = useState(value ? value.max : max)

    useEffect(() => {
        if (value) {
            setMinValue(value.min)
            setMaxValue(value.max)
        }
    }, [value])

    const handleMinChange = (e) => {
        e.preventDefault()
        const newMinVal = Math.min(+e.target.value, maxValue - step)
        if (!value) setMinValue(newMinVal)
        onChange({ min: newMinVal, max: maxValue })
    }

    const handleMaxChange = (e) => {
        e.preventDefault()
        const newMaxVal = Math.max(+e.target.value, minValue + step)
        if (!value) setMaxValue(newMaxVal)
        onChange({ min: minValue, max: newMaxVal })
    }

    const minPos = ((minValue - min) / (max - min)) * 100
    const maxPos = ((maxValue - min) / (max - min)) * 100

    return (
        <div id="rangeSlider">
            <div className="wrapper">
                <div className="input-wrapper">
                    <input
                        className="input"
                        type="range"
                        value={minValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMinChange}
                        placeholder={minValue}
                    />
                    <input
                        className="input"
                        type="range"
                        value={maxValue}
                        min={min}
                        max={max}
                        step={step}
                        onChange={handleMaxChange}
                    />
                </div>

                <div className="control-wrapper">
                    <div className="control" style={{ left: `${minPos}%` }} />
                    <div className="label" style={{ left: `${minPos}` }}>
                        {value.min}
                    </div>
                    <div className="rail">
                        <div
                            className="inner-rail"
                            style={{
                                left: `${minPos}%`,
                                right: `${100 - maxPos}%`,
                            }}
                        />
                    </div>
                    <div className="control" style={{ left: `${maxPos}%` }} />
                    <div className="label" style={{ right: 0 }}>
                        {value.max}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RangeSlider
