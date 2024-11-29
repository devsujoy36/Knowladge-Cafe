/* eslint-disable react/prop-types */

const ReadingTIme = ({readingTime}) => {
  
  return (
    <div className="bg-pink-200 rounded-md mb-2 text-2xl font-semibold p-5">
        <h1 className="text-center">Remaing TIme : {readingTime} min</h1>
    </div>
  )
}

export default ReadingTIme