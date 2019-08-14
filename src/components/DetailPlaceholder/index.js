import React from 'react'
import { LoadingWrapper } from './styles'

function DetailPlaceholder() {
  return (
    <LoadingWrapper>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-picture" />
          <div className="ph-row">
            <div className="ph-col-6 big" />
            <div className="ph-col-4 empty" />
            <div className="ph-col-4" />
            <div className="ph-col-12 empty" />
            <div className="ph-col-12" />
            <div className="ph-col-12" />
            <div className="ph-col-12" />
            <div className="ph-col-8 empty" />
            <div className="ph-col-8" />
          </div>
          <div className="ph-row avatar">
            <div className="ph-avatar" />
            <div className="ph-col-4" />
          </div>
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default DetailPlaceholder
