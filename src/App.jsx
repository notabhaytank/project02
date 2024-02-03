import 'remixicon/fonts/remixicon.css'
export default function App() {
    return (
        <>
            <section className='h-screen px-10 md:px-52 gap-12 md:pt-40 py-32 pb-16 flex flex-col md:flex-row'>
                <section className='md:w-1/2 gap-10  md:p-10 flex flex-col justify-between ' >
                    <h1 className='md:text-[150px] text-7xl  tracking-tight font-serif md:leading-[8rem]'>a cotton weave.</h1>
                    <div className='gap-8 flex flex-col' >
                        <div id="colors" className='border border-gray-800 px-4   flex items-center justify-between rounded-full w-fit gap-2 md:min-w-32 py-1  h-fit'>
                            <p className='text-lg'>colors</p>
                            <div className='flex gap-1'>
                                <div className='bg-green-600 h-4 w-4 rounded-full'></div>
                                <div className='bg-blue-500 h-4 w-4 rounded-full'></div>
                            </div>

                        </div>
                        <div id="details ">
                            <h2 className='text-2xl font-bold'>Details</h2>
                            <p className='text-lg sm:text-xl md:w-4/5 pt-2' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore exercitationem impedit laborum omnis optio quasi sunt ut? Blanditiis dignissimos dolor eaque fugit illum libero maiores mollitia nam nostrum, quam vel.</p>
                        </div>
                    </div>
                </section>

                <section className='md:w-1/2 flex flex-col pb-20 gap-6 md:flex-row justify-end ' >
                    <div id="textdiv" className=' items-end flex md:w-2/12 '>
                        <p className=' transform md:origin-top-left md:text-nowrap  text-2xl md:text-3xl font-bold  md:-rotate-90'>Cotton twill cap</p>
                    </div>
                    <div className='md:w-8/12 md:-ml-10 flex flex-col-reverse gap-10 md:gap-4 '>
                        <div id="desc" className=' flex  justify-between py-3  px-3'>
                            <div className='  text-3xl font-serif font-semibold '>$498</div>
                            <div className=' text-lg '>Rating. ⭐⭐⭐</div>
                        </div>
                        <div id="image" className=' relative h-[85%]'>
                            <div className='md:w-40 hidden md:flex w-24 h-24 md:h-40 rounded-full absolute  -bottom-9 -right-3 md:top-1/2 md:text-white text-sm md:text-lg  items-center justify-center z-10 md:-right-20 bg-white md:bg-[#1e1d25]'><span>add to bag</span><span></span></div>
                            <div className='md:w-40 md:hidden w-24 h-24 shadow-md md:h-40 rounded-full absolute  -bottom-9 -right-3 md:top-1/2 md:text-white text-2xl md:text-lg flex items-center justify-center z-10 md:-right-20 bg-white md:bg-[#1e1d25]'><i className="ri-shopping-bag-line"></i>
                            </div>
                            <img className='object-cover rounded-2xl ' src='https://images.unsplash.com/photo-1617398437308-0877cf97a1e8?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>

                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}