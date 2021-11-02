import React from 'react'

export default function ExtractMarkedDates(data) {
    markedDates = {};
    data.forEach(item => {
        if (item.status_id === 1 || item.status_id === 2 || item.status_id === 3){
            markedDates [item.date] = {textColor: 'gray', color: 'yellow',startingDay: true, endingDay: true}
        }else if (item.status_id === 4){
            markedDates [item.date] = {textColor: 'gray', color: 'green', startingDay: true, endingDay: true}
        }else {
            markedDates [item.date] = {textColor: 'gray', color: 'red',startingDay: true, endingDay: true}
        }
    });
    return markedDates;
}
