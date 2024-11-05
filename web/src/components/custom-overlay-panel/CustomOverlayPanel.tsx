import { OverlayPanel } from "primereact/overlaypanel";
import style from "./style.module.scss";
import { FC, RefObject } from "react";

interface ICustomOverlayPanel {
  children: React.ReactNode;
  overlayPanelRef: RefObject<OverlayPanel>;
}

export const CustomOverlayPanel: FC<ICustomOverlayPanel> = ({
  children,
  overlayPanelRef,
}) => {
  return (
    <OverlayPanel
      className={style.overlayPanel}
      ref={overlayPanelRef}
      pt={{
        content: {
          className: style.overlayPanel__content,
        },
      }}
    >
      {children}
    </OverlayPanel>
  );
};
