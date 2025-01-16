import React from 'react'
import { Link } from 'react-router-dom';
import noimage from '/noimage.jpeg'


const HorizontalCards = ({data}) => {
  console.log(data);

  return (
        <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>

            {data.length > 0 ? data.map((data,i) => (
               <Link to={`/${data.media_type}/details/${data.id}`} key={i} className='min-w-[15%] h-[35vh] bg-zinc-900 mr-5 mb-5'>
                  <img 
                   className='w-full h-[55%] object-cover'
                    src={
                      data.backdrop_path || 
                      data.poster_path  ?
                      `https://image.tmdb.org/t/p/original/${
                            data.backdrop_path || data.poster_path
                          }`  : noimage }
                  alt="" />
                  <div className='text-white p-3 h-[45%] overflow-y-auto'>
                     <h1 className=' text-xl font-semibold'>
                            {data.name ||
                             data.title || 
                             data.original_name ||
                             data.original_title}
                     </h1>

                    <p className=''>
                        {data.overview.slice(0, 50)}...
                            <span className=' text-zinc-500'>more</span>
                    </p>
                    
                  </div>
                </Link>
            )): <h1 className='text-3xl text-white font-black text-center mt-5'>Nothing to show</h1>}
        </div>
  )
}

export default HorizontalCards;


