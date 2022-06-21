import './moodSlider.css'

const MoodSlider = () => {
    const handleChange = (e) => {
        document.body.style.backgroundPosition = `${e.target.value}%`;
    }

    return (
        <section>
            <input
                id='moodSlider'
                type='range'
                min='0'
                max='100'
                step='any'
                defaultValue='50'
                className='w-3/4 h-2 mt-6 rounded-sm appearance-none bg-white/20 transition'
                style={{ left: '12.5%' }}
                onChange={handleChange}
            />
            <div>
                <label
                    for='moodSlider'
                    className=' text-white/60 hover:text-white/100 transition align-peace'
                >
                    Peace
                </label>
                <label
                    for='moodSlider'
                    className='text-white/60 hover:text-white/100 transition align-crisis'
                >
                    Crisis
                </label>
            </div>
        </section>
    )
}

export default MoodSlider;