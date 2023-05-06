import styles from "./index.module.scss";

interface Props {
    text: string;
}

function ToastView({ text }: Props) {
    return <div className={styles.toast}>{text}</div>;
}

export default ToastView;
