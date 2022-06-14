import { useState } from 'react';
import styles from './InputVideo.module.scss';

const InputVideo = ({ className, ...props }) => {
    const [file, setFile] = useState(undefined);
    const onFileUpload = e => {
        const newFile = e.target.files[0]
        if (file && newFile) {
            setFile(undefined)
            return setTimeout(() => {
                setFile(newFile)
            }, 5)
        }
        setFile(newFile);
    }
    return (
        <>
            <label className={`${styles.root} ${className}`}>
                <input type="file" {...props} onChange={onFileUpload} />
                {file ? (
                    <span >
                        <span className={styles.videoWrapper}>
                            <video controls>
                                <source src={URL.createObjectURL(file)} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </span>
                        <span className={styles.label}>Upload another Video</span>
                    </span>
                ) :
                    <span className={styles.main}>Drag or Drop the video</span>
                }
            </label>
        </>
    )
}

export default InputVideo;