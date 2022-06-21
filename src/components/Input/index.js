import './input.css';

const Input = () => {
    return (
        <section className='mt-8 flex flex-col'>
            <textarea
                type='text'
                className='flex flex-grow w-3/4 h-5/6 p-4 mx-auto my-auto rounded-md bg-white/10 text-2xl font-light tracking-wide text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition resize-none scrollbar-thin scrollbar-thumb-slate-300'
                placeholder="What's on your mind?"
            />
        </section>
    )
}

export default Input;