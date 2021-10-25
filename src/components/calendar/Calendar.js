// import React,{useState} from 'react'
// import {Text} from 'react-native'
// import {Calendar, CalendarList, LocaleConfig} from 'react-native-calendars';

// LocaleConfig.locales['en'] = {
//   monthNames: ["January", "February", "March", "April", 
//   "May", "June", "July", "August", "September", "October", 
//   "November", "December"],
//   monthNamesShort: ['Jan.','Feb.','Mar.','April','May','June','July','Aug.','Sept.','Oct.','Nov.','Dec.'],
//   dayNames: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
//   dayNamesShort: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
//   today: 'Aujourd\'hui'
// };
// LocaleConfig.defaultLocale = 'en';

// const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// export default function MyCalendar() {
//     const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
// const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
// const workout = {key: 'workout', color: 'green'};
//     return (
//         <CalendarList
//             // // Enable horizontal scrolling, default = false
//             // horizontal={true}
//             // // Enable paging on horizontal, default = false
//             // pagingEnabled={false}
//             // // Set custom calendarWidth.
//             // calendarWidth={300}
//             // // Callback which gets executed when visible months change in scroll view. Default = undefined
//             // onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
//             // // Max amount of months allowed to scroll to the past. Default = 50
//             // pastScrollRange={50}
//             // // Max amount of months allowed to scroll to the future. Default = 50
//             // futureScrollRange={50}
//             // // Enable or disable scrolling of calendar list
//             // scrollEnabled={true}
//             // // Enable or disable vertical scroll indicator. Default = false
//             // showScrollIndicator={true}
//           // Specify style for calendar container element. Default = {}
//             style={{
//                 marginTop: 20,
//                 borderWidth: 1,
//                 borderRadius: 15,
//                 borderColor: 'gray',
//                 padding:30,
//                 height: 200, width: "90%"
//             }}
//             // Specify theme properties to override specific styles for calendar parts. Default = {}
//             theme={{
//                 backgroundColor: '#ffffff',
//                 calendarBackground: '#ffffff',
//                 textSectionTitleColor: '#b6c1cd',
//                 textSectionTitleDisabledColor: '#d9e1e8',
//                 selectedDayBackgroundColor: '#00adf5',
//                 selectedDayTextColor: '#ffffff',
//                 todayTextColor: '#00adf5',
//                 dayTextColor: '#2d4150',
//                 textDisabledColor: '#d9e1e8',
//                 dotColor: '#00adf5',
//                 selectedDotColor: '#ffffff',
//                 arrowColor: 'orange',
//                 disabledArrowColor: '#d9e1e8',
//                 monthTextColor: 'blue',
//                 indicatorColor: 'blue',
//                 textDayFontFamily: 'monospace',
//                 textMonthFontFamily: 'monospace',
//                 textDayHeaderFontFamily: 'monospace',
//                 textDayFontWeight: '300',
//                 textMonthFontWeight: 'bold',
//                 textDayHeaderFontWeight: '300',
//                 textDayFontSize: 16,
//                 textMonthFontSize: 16,
//                 textDayHeaderFontSize: 16,
//                 'stylesheet.calendar.header': {
//                     dayTextAtIndex0: {
//                         color: 'blue'
//                     },
//                     dayTextAtIndex6: {
//                         color: 'blue'
//                     },
//                 },
//             }}
//             // Initially visible month. Default = Date()
//             current= {new Date()}
//             // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
//             minDate={'2019-05-10'}
//             // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
//             maxDate={new Date()}
//             // Handler which gets executed on day long press. Default = undefined
//             onDayLongPress={(day) => {console.log('selected day', day)}}
//             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
//             monthFormat={'yyyy MMMM'}
//             // Handler which gets executed when visible month changes in calendar. Default = undefined
//             onMonthChange={(month) => {console.log('month changed', month)}}
//             // Hide month navigation arrows. Default = false
//             hideArrows={true}
//             // Replace default arrows with custom ones (direction can be 'left' or 'right')
//             renderArrow={(direction) => (<Arrow/>)}
//             // Do not show days of other months in month page. Default = false
//             hideExtraDays={true}
//             // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
//             // day from another month that is visible in calendar page. Default = false
//             disableMonthChange={false}
//             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
//             firstDay={7}
//             // Hide day names. Default = false
//             hideDayNames={false}
//             // Show week numbers to the left. Default = false
//             showWeekNumbers={false}
//             // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//             onPressArrowLeft={subtractMonth => subtractMonth()}
//             // Handler which gets executed when press arrow icon right. It receive a callback can go next month
//             onPressArrowRight={addMonth => addMonth()}
//             // Disable left arrow. Default = false
//             disableArrowLeft={false}
//             // Disable right arrow. Default = false
//             disableArrowRight={false}
//             // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
//             disableAllTouchEventsForDisabledDays={false}
//             // Replace default month and year title with custom one. the function receive a date as parameter
//             renderHeader={(date) => {/*Return JSX*/}}
//             // Enable the option to swipe between months. Default = false
//             enableSwipeMonths={true}
//             markingType={'multi-dot'}
//             markedDates={{
//               '2021-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
//               '2021-10-26': {dots: [massage, workout], disabled: true},
//               '2021-05-6': {selected: true, marked: true},
//               '2021-05-17': {marked: true},
//               '2021-05-18': {disabled: true}
//             }}
//             onDayPress={(day) => {console.log('day pressed')}}/>
//     )
// }
