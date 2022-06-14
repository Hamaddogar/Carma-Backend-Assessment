import styles from './inputradio.module.scss';

const InputRadio = props => (
    <label className={styles.root}>
        <input {...props} type='radio' />
        <span></span>
    </label>
)

export default InputRadio;