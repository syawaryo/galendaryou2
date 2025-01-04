import AirDatepicker from 'air-datepicker'
import 'air-datepicker/air-datepicker.css'
import localeJa from 'air-datepicker/locale/ja';
import { useEffect, useRef } from 'react';
import React from 'react';


const DataPicker = () => {
    const inputref = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(!inputref.current) return;
        const dp = new AirDatepicker(inputref.current, {
            locale: localeJa,
            autoClose: true, // 選択後に自動で閉じる
            onSelect: ({formattedDate}) => {
                if(typeof(formattedDate) === "string"){
                    const dataarray = formattedDate.split('/').map(num => parseInt(num,10));
                    console.log(dataarray);
                }else{
                    console.error('unexpected:', typeof formattedDate)
                }
            }
        });

        return () => {dp.destroy};
        
    }, [])


    return(
        <input type="text" ref={inputref}/>
    );
}

export default DataPicker;