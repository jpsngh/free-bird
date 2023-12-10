"use client"
import React, { useState } from 'react';
import {  Modal } from 'antd';



const AntModal = ({isOpen, handleSubmit,handleCancel,confirmLoading,body,title,okText}) => {
  return (
    <div>
      <>
   
      <Modal
        title={title}
        open={isOpen}
        onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText={okText}
      >
       <div>{body}</div>
      </Modal>
    </>
    </div>
  )
}

export default AntModal
