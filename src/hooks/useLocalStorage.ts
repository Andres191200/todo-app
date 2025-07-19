import React from 'react'

export default function useLocalStorage() {
    

    function setItem<T>(key: string, item:T):void {
        try{
            const parsedItem = JSON.stringify(item);
            localStorage.setItem(key, parsedItem);
        }catch(error){
            //DO ERROR HANDLING ( FAILED TO SAVE ITEM)
        }
    } 
    
    function getItem<T>(key: string):T | null{
        try{
            const item = localStorage.getItem(key);
            const parsedItem = item != null ? JSON.parse(item) : null;
            return parsedItem;
        } catch(error){
            //DO ERROR HANDLING (ITEM NOT FOUND)
            return null;
        }
    }

    function clear():void{
        try{
            localStorage.clear();
        } catch(error){
            //DO ERROR HANDLING (FAILED TO CLEAR)
        }
    }

    return {setItem, getItem, clear};
}
