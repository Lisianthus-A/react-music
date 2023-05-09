import { memo } from "react";
import style from "./index.module.scss";
import { Icon, ProgressBar } from "@/components";
import music from "@/utils/music";

function Volume() {
    // 设置音量
    const handleChangeVolume = (value: number) => {
        music().setVolume(value * 0.01);
    };

    return (
        <div className={style.volume}>
            <div className="icon" title="音量">
                <Icon type="icon-voice" />
            </div>
            <div className="slider">
                <ProgressBar
                    onChange={handleChangeVolume}
                    defaultValue={100}
                    tipFormatter={(value) => `${value >> 0}%`}
                />
            </div>
        </div>
    );
}

export default memo(Volume);
