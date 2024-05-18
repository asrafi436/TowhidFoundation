import React from 'react'
import uuid4 from 'uuid4'

export const ShortTraining = () => {
    const training = [
        {
            id: uuid4,
            tid: 1,
            title:"Computer Training",
            description:"Computer Training....",
            image:"https://www.techdonut.co.uk/sites/default/files/computerandsoftwaretraining_96602236_0.jpg"
        },
        {
            id: uuid4,
            tid: 2,
            title:"Sewing Training",
            description:"Computer Training....",
            image:"https://theavidseamstress.com/wp-content/uploads/2020/11/1200x628-featured-image-on-wordpress.png"
        },
        {
            id: uuid4,
            tid: 3,
            title:"Language Training",
            description:"Computer Training....",
            image:"https://www.kerntraining.com/fileadmin/user_upload/sprachkurse.jpg"
        }

    ]
  return (
    <div>
        {
            training.map(t => 
            <div key={t.id} className=''>
                <h1 className='m-2 p-2 font-bold text-blue-500 leading-tight text-center'>{t.title}</h1>
                <img src={t.image} alt="" />
            </div>)
        }
    </div>
  )
}

