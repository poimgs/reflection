const Input = () => {
    return (
        <div className='fixed h-screen w-screen'>
            <textarea
                type='text'
                className='block w-3/4 h-5/6 p-4 mx-auto my-auto rounded-md bg-white/10 text-2xl font-light tracking-wide text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition resize-none scrollbar-thin scrollbar-thumb-slate-300'
                placeholder="What's on your mind?"
            />
        </div>
    )
}

export default Input;