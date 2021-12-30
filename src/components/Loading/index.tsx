import './index.css';

const array = new Array(16).fill(0);

function Loading() {
    return (
        <div className="loading-container">
            <div className="loader">
                {array.map((_, idx) =>
                    <div className="square" key={idx} />
                )}
            </div>
            <div className="loading-text">加载中</div>
        </div>
    );
}

export default Loading;