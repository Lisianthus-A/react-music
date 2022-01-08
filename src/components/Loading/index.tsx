import styles from './index.module.scss';

const array = new Array(16).fill(0);

interface Props {
    text?: string;
}

function Loading({ text }: Props) {
    return (
        <div className={styles.container}>
            <div className="loader">
                {array.map((_, idx) =>
                    <div className="square" key={idx} />
                )}
            </div>
            <div className="loading-text">
                {text || "加载中"}
            </div>
        </div>
    );
}

export default Loading;