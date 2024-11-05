import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { OverlayPanel } from "primereact/overlaypanel";
import { FC, useRef } from "react";

interface ICustomCalendar {
  classname?: string;
}
export const CustomCalendar: FC<ICustomCalendar> = ({ classname }) => {
  const op = useRef<OverlayPanel>(null);
  return (
    <>
      <Button
        aria-label="submit"
        label="Cрок выполнения"
        outlined
        size="small"
        icon="pi pi-calendar-plus"
        className={classname}
        onClick={(e) => op.current?.toggle(e)}
      />
      <OverlayPanel ref={op}>
        <Calendar value={new Date()} onChange={(e) => console.log(e)} inline />
      </OverlayPanel>
    </>
  );
};
