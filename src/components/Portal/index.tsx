import { useMemo } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Portal({ children }: Props) {
    const root = useMemo(() => {
        const rootElement = document.getElementById("portal-root");
        if (!rootElement) {
            const element = document.createElement("div");
            element.id = "portal-root";
            document.body.append(element);
            return element;
        }

        return rootElement;
    }, []);

    return createPortal(children, root);
}

export default Portal;
