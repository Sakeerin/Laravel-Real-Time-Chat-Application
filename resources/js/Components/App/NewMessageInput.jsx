import { use, useEffect, useRef } from "react";

const NewMessageInput = ({ value, onChange, onSend }) => {
    const input = useRef();
    const onInputKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
        }
    };

    const onChangeEvent = (e) => {
        setTimeout(() => {
            adjustHeight();
        }, 10);
        onChange(e);
    };

    const adjustHeight = () => {
        setTimeout(() => { 
            input.current.style.height = 'auto';
            input.current.style.height = input.current.scrollHeight + 1 + 'px';
        }, 100);
    };

    useEffect(() => {   
        adjustHeight();
    }, [value]);

    return (
        <textarea
            ref={input}
            className="input input-bordered w-full rounded-r-none resize-none overflow-y-auto max-h-40"
            placeholder="Type your message..."
            value={value}
            onChange={(e) => onChangeEvent(e)}
            onKeyDown={onInputKeyDown}
            rows={1}
        ></textarea>
    );
};

export default NewMessageInput;