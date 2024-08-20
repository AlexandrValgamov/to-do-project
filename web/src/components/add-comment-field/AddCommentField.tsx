import style from "./style.module.scss";
import 'primeicons/primeicons.css';
import {ChangeEvent, useRef, useState} from "react";
import {InputTextarea} from "primereact/inputtextarea";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import classNames from "classnames";


interface AddCommentField {
    value: string
    onChange: (val: string) => void
    placeholder?: string
}
export function AddCommentField({value, onChange, placeholder}: AddCommentField) {
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const refTextarea = useRef<HTMLTextAreaElement>(null)

    const setEmoji = (emoji: string) => {
        if (refTextarea?.current) {
            const lastPositionCursor = refTextarea.current.selectionEnd;

            const newValue = `${value.slice(0, lastPositionCursor)}${emoji}${value.slice(lastPositionCursor)}`

            onChange(newValue)

            setTimeout(() => {
                if (refTextarea?.current) {
                    refTextarea.current.focus();
                    refTextarea.current.setSelectionRange(lastPositionCursor + 2, lastPositionCursor + 2);
                }
            }, 500);

            setShowEmojiPicker(false);
        }
    }

    return (
        <div className={style.container}>
            <InputTextarea
                ref={refTextarea}
                placeholder={placeholder}
                className={style.commentsResponseTextarea}
                autoResize value={value}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.target.value)}/>

            <div className={style.emojiPickerContainer}>
                <i
                    className={classNames(
                        "pi pi-face-smile",
                        style.emojiPicker
                    )}
                    onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                ></i>
                {
                    showEmojiPicker && (
                        <div className={style.emojiPickerBody}>
                            <Picker
                                searchPosition={'none'}
                                data={data}
                                locale={'ru'}
                                onEmojiSelect={(valEmoji: {
                                    native: string
                                }) => setEmoji(valEmoji.native)}
                            />
                        </div>
                    )
                }
            </div>

        </div>
    )
}