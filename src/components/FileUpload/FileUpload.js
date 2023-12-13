import React, { useRef, useState } from 'react'
import style from './fileUpload.module.css'
import FileIcon from '../../assets/icons/File.svg'
import closeIcon from '../../assets/icons/close.svg'
import onionImage from '../../assets/images/onion.png'

import useStore from '../../store'

import classNames from 'classnames'
import text from '../../style/text.module.css'

function FileUpload() {

    const fileUpload = useStore(({fileUpload}) => fileUpload)
    const setFile = useStore(({setFile}) => setFile)
    const setUrl = useStore(({setUrl}) => setUrl)

    const file = useStore.getState().file
    const url = useStore.getState().url
    const [drop, setDrop] = useState(false);
    const [progress, setProgress] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const ref = useRef(null);

    const checkSize = (file) => {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
                img.onload = function() {
                    if (this.width < 1242 || this.height < 1242) {
                        setError(true)
                        setFile("")
                        setUrl("")
                        ref.current.value = '';
                    } else {
                        setError(false)
                        setWidth(this.width)
                        setHeight(this.height)
                        handleFile(file)
                    }  
                };
            img.src = e.target.result;
        }
        reader.readAsDataURL(file)
    }

    const reset = () => {
        setLoading(false);
        setProgress(0);
        setFile("");
        setUrl("");
        ref.current.value = '';
      }

    const handleFile = (file) => {
        if (loading || !file) return;
  
        setLoading(true);

        if (url !== "") {
            URL.revokeObjectURL(url);
        }
        
        const imageUrl = URL.createObjectURL(file);

        setUrl(imageUrl);
        setFile(file);

        const uploading = fileUpload(file, setProgress, setLoading );
        uploading
            .then()
            .catch((e) => {})        
      };

    const onDragLeave = () => {
        setDrop(false);
    };
      
    const onDragOver = () => {
        setDrop(true);
    };
      
    const handleDrop = (e) => {
        console.log(e.dataTransfer);
        const droppedFile = e.dataTransfer.files[0];
        setDrop(false);
        checkSize(droppedFile);
    };

    const handleFileChange = (event) => {
        checkSize(event.target.files[0]);
    };  

  return (
    
    <>
        <div className={text.title}>Загрузите обложку</div>

        <div>

            <div className={classNames(style.fileInput, drop && style.active, error && style.error, loading && style.loading, file && !loading && style.file)} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={handleDrop}>
                <div className={style.imageWrapper}>
                    {loading && <div className={style.layout}></div>}
                    <img src={file ? url : FileIcon} alt="userImage" className={file && style.image}/>
                </div>
                <div className={style.textWrapper}>
                    <span className={style.title}>{file ? file.name : <>Перетащите файл или <span className={classNames(style.title, style.blue)}>загрузите с компьютера</span></>}</span>
                    <span className={style.subtitle}>{file ? `Размер: ${width}х${height} px` : `Соотношение 1:1. Минимальный размер 1242х1242 px`}</span>
                </div>
                <input ref={ref} className={style.input} type="file" onChange={handleFileChange} assets='.png'></input>
                {file && <img src={closeIcon} alt="close" className={style.cancel} onClick={reset}/>}
                {loading && <progress max="100" value={progress} className={style.progress}></progress>}
            </div>
            {error && <div className={style.errorMessage}>Слишком маленький размер изображения</div>}

        </div>
    </>

  )
}

export default FileUpload