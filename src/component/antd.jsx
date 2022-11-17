import { Upload } from 'antd';
import React, { useState } from 'react';

const Uploader = () => {
  const [fileList, setFileList] = useState([ ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    localStorage.setItem('image', JSON.stringify(fileList))
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div style={{ marginLeft: '89px' }}>
      <Upload 
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
</div>
  );
};

export default Uploader;