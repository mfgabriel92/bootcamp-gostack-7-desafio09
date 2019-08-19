import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { FaFileUpload } from 'react-icons/fa'
import { Container } from './styles'

function Dropzone({ accept, onDropAccepted, banner }) {
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

  function showPreview() {
    if (files && files.preview) {
      return <img src={files.preview} alt="" />
    }

    if (!files && banner) {
      return <img src={banner} alt="" />
    }

    return <FaFileUpload />
  }

  return (
    <Container {...getRootProps()}>
      {showPreview()}
      <input {...getInputProps()} />
    </Container>
  )
}

Dropzone.propTypes = {
  accept: PropTypes.string.isRequired,
  onDropAccepted: PropTypes.func.isRequired,
  banner: PropTypes.string,
}

Dropzone.defaultProps = {
  banner: null,
}

export default Dropzone
