import ReactDOM from "react-dom";
import styles from "./index.module.scss";
import View from "./view";

class ToastController {
    private container: HTMLDivElement | null = null;
    private id: number = 0;
    private timer: number = 0;

    constructor() {
        this.destroy = this.destroy.bind(this);
    }

    private getContainer() {
        const dom = document.createElement("div");
        dom.id = `toast-root-${++this.id}`;
        dom.className = styles["toast-root"];
        document.body.append(dom);
        this.container = dom;
        return dom;
    }

    private destroy() {
        if (this.container) {
            ReactDOM.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            this.container = null;
        }
    }

    show(text: string, duration = 2000) {
        // 销毁上一个 Toast
        this.destroy();

        // 生成 Toast
        const container = this.getContainer();
        ReactDOM.render(<View text={text} />, container);

        // 刷新销毁时间
        clearTimeout(this.timer);
        this.timer = window.setTimeout(this.destroy, duration);
    }
}

export default new ToastController();
