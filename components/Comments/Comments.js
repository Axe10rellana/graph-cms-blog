//importaciones
import React, { useState, useEffect } from 'react'

//moment
import moment from 'moment'

//html-react-parser
import parse from 'html-react-parser'

//servicios
import { getComments } from '../../services'

const Comments = ({ slug }) => {
  //variables de estado
  const [comments, setComments] = useState([])

  //useEffect
  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])
  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="mb-4 border-b border-gray-100 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('DD MMM, YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
