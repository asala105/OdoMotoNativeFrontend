import React from 'react'

export default function ExtractMarkedDates(data) {
    markedDates = {};
    data.forEach(item => {
        if (item.leave_from_date === item.leave_till_date) {
            markedDates [item.leave_from_date] = {textColor: 'gray', color: 'orange',startingDay: true, endingDay: true}
        }else{
            markedDates [item.leave_from_date] = {textColor: 'gray', color: 'orange',startingDay: true}
            markedDates [item.leave_till_date] = {textColor: 'gray', color: 'orange',endingDay: true}
        }
    });
    return markedDates;
}
