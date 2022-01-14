import style from './index.module.scss';

interface Props {
    data: any;
}

function Introduction ({ data }: Props) {
    const { briefDesc, intro } = data;
    return (
        <div className={style.intro}>
            <div className="block">
                <h2>歌手简介</h2>
                <span>{briefDesc}</span>
            </div>
            {/* @ts-ignore */}
            {intro.map(({ ti, txt }, idx) =>
                <div className="block" key={idx}>
                    <h2>{ti}</h2>
                    <span>{txt}</span>
                </div>
            )}
        </div>
    );
}

export default Introduction;