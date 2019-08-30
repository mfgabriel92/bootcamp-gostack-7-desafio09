import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'
import { FaFileUpload } from 'react-icons/fa'
import { Banner, Avatar } from './styles'

function Dropzone({ type, accept, onDropAccepted, banner }) {
  const [files, setFiles] = useState(null)
  const [Container, setContainer] = useState(Banner)
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

  useEffect(() => {
    switch (type) {
      case 'avatar':
        setContainer(Avatar)
        break
      default:
        setContainer(Banner)
    }
  }, [type])

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
  type: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  onDropAccepted: PropTypes.func.isRequired,
  banner: PropTypes.string,
}

Dropzone.defaultProps = {
  banner: null,
}

export default Dropzone
