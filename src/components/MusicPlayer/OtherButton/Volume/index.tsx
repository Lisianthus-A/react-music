import { memo } from "react";
import style from "./index.module.scss";
import { Slider } from "antd";
import { Icon } from "@/components";
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
                <Slider
                    defaultValue={100}
                    onChange={handleChangeVolume}
                    tipFormatter={(value) => `${value}%`}
                />
            </div>
        </div>
    );
}

export default memo(Volume);
