import './moodSlider.css'

const MoodSlider = () => {
    const handleChange = (e) => {
        document.body.style.backgroundPosition = `${e.target.value}%`;
    }

    return (
        <>
            <input
                id='moodSlider'
                type='range'
                min='0'
                max='100'
                step='any'
                defaultValue='50'
                className='fixed w-3/4 h-2 bottom-16 mx-auto rounded-sm appearance-none bg-white/20 transition'
                style={{ left: '12.5%' }}
                onChange={handleChange}
            />
            <label
                for='moodSlider'
                className='fixed bottom-8 text-white/60 hover:text-white/100 transition'
                style={{ left: '12.5%' }}
            >
                Peace
            </label>
            <label
                for='moodSlider'
                className='fixed bottom-8 text-white/60 hover:text-white/100 transition'
                style={{ left: '85%' }}
            >
                Crisis
            </label>
        </>
    )
}

export default MoodSlider;