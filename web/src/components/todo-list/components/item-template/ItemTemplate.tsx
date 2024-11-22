import { FC, useState } from "react";
import style from "./style.module.scss";
import { TTodoData } from "@/enteties/todo/app-types";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
import { format } from "date-fns";
import { Button } from "primereact/button";
import { ru } from "date-fns/locale";
import classNames from "classnames";

interface IItemTemplateProps {
  item: TTodoData;
}

export const ItemTemplate: FC<IItemTemplateProps> = ({ item }) => {
  const [checked, setChecked] = useState(item.completed);
  const onDelete = () => {};

  return (
    <Card
      className={style.card}
      pt={{
        body: {
          className: style.card__body,
        },
        content: {
          className: style.card__content,
        },
      }}
    >
      <div className={style.item}>
        <Checkbox
          onChange={(e) => setChecked(e.checked ?? false)}
          checked={checked}
        />

        <div className={style.item__body}>
          <div className={style.item__header}>
            {item.title && (
              <div className={style.item__title}>{item.title}</div>
            )}
            <div className={style.item__buttons}>
              <Button
                size="small"
                icon="pi pi-pencil"
                className={style.item__customButton}
              />
              <Button
                size="small"
                icon="pi pi-trash"
                severity="danger"
                text
                className={style.item__customButton}
                onClick={onDelete}
              />
            </div>
          </div>

          <div className={style.item__description}>
            <div>{item.description}</div>
          </div>

          <div className={style.item__footer}>
            <div></div>
            <div className={style.item__targetDate}>
              {item.priority !== null && (
                <i
                  className={classNames("pi pi-flag-fill", {
                    [style.item__targetDate_p3]: item.priority === 3,
                    [style.item__targetDate_p2]: item.priority === 2,
                    [style.item__targetDate_p1]: item.priority === 1,
                    [style.item__targetDate_p0]: item.priority === 0,
                  })}
                ></i>
              )}
              {item.targetDate && (
                <span>{`до ${format(new Date(item.targetDate), "d MMMM", { locale: ru })}`}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
