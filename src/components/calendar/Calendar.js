import React,{useState} from 'react'
import {Text, View} from 'react-native'
import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ["January", "February", "March", "April", 
  "May", "June", "July", "August", "September", "October", 
  "November", "December"],
  monthNamesShort: ['Jan.','Feb.','Mar.','April','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'],
  dayNames: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
  dayNamesShort: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'en';

const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export default function MyCalendar(props) {
    // const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
    // const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
    // const workout = {key: 'workout', color: 'green'};
    return (
    <View style={{ paddingTop: 50, margin:50, borderRadius:10}}>
        <CalendarList
        style={{
            borderWidth: 1,
            borderColor: 'gray',
            height: 350,
            
        }}
        // Specify theme properties to override specific styles for calendar parts. Default = {}
        theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#008080',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#009494',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#008080',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: '#003232',
            indicatorColor: '#003232',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
            'stylesheet.calendar.header': {
                dayTextAtIndex5: {
                    color: 'red'
                },
                dayTextAtIndex6: {
                    color: 'red'
                }
            }
        }}
        // Callback which gets executed when visible months change in scroll view. Default = undefined
        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}

        // Initially visible month. Default = Date()
        current={new Date()}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={undefined}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={undefined}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
            props.callback? props.callback(day.dateString):console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'yyyy MMMM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
            console.log('month changed', month);
        }}
        // Hide month navigation arrows. Default = false
        hideArrows={true}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={false}
        // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={false}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}

        markingType={'period'}
        markedDates={props.marked}
        />
    </View>
    )
}

