import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { FaFileUpload } from 'react-icons/fa'
import { Container } from './styles'

function Dropzone({ accept, onDropAccepted }) {
  const [files, setFiles] = useState(null)
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop: acceptedFiles => {
      setFiles(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      )
    },
    onDropAccepted,
  })

  return (
    <Container {...getRootProps()}>
      {files && files.preview ? (
        <img src={files.preview} alt="" />
      ) : (
        <FaFileUpload />
      )}
      <input {...getInputProps()} />
    </Container>
  )
}

Dropzone.propTypes = {
  accept: PropTypes.string.isRequired,
  onDropAccepted: PropTypes.func.isRequired,
}

export default Dropzone
