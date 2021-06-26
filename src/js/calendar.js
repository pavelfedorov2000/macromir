function getDayName(year, month, day) {
                return [
                    'Вс',
                    'Пн',
                    'Вт',
                    'Ср',
                    'Чт',
                    'Пт',
                    'Сб'
                ][new Date(year, month, day).getDay()];
            }

            function generateSequence(data, n) {
                const sequence = [];

                const daysInMonth = {
                    prev: new Date(data.year, data.month - 1, 0).getDate(),
                    current: new Date(data.year, data.month, 0).getDate()
                };

                const half = Math.floor(n / 2);

                for (let i = 0; i < n; i++) {

                    let current = {
                        number: data.day - half + i,
                        name: '',
                    };

                    if (current.number > daysInMonth.current) {
                        current.number %= daysInMonth.current;
                        current.name = getDayName(data.year, data.month, current.number);
                    }

                    else if (current.number <= 0) {
                        current.number = daysInMonth.prev + current.number;
                        current.name = getDayName(data.year, data.month - 2, current.number);
                    }

                    else {
                        current.name = getDayName(data.year, data.month - 1, current.number);
                    }


                    sequence.push(current);
                }


                return sequence;
            }

            function fillCalendar(calendar, sequence) {

                for (let i = 0; i < sequence.length; i++) {
                    let calendarItem = document.createElement('div');
                    calendarItem.className = 'event-info__date-item';
                    let weekdayEl = document.createElement('div');
                    weekdayEl.className = 'event-info__date-weekday';
                    weekdayEl.innerText = sequence[i].name;
                    calendarItem.appendChild(weekdayEl);
                    let numberEl = document.createElement('div');
                    numberEl.className = 'event-info__date-num';
                    numberEl.innerText = sequence[i].number;
                    calendarItem.appendChild(numberEl);

                    if (Math.floor(sequence.length / 2) == i) {
                        numberEl.classList.add('event-info__date-num--active');
                    }

                    calendar.appendChild(calendarItem);
                }

            }

            const data = {
                day: 20,
                month: 5,
                year: 2021,
                time: '12:00',
            };

            fillCalendar(
                document.querySelector('.event-info__date-list'),
                generateSequence(data, 7)
            );

            let eventMonthYear = document.querySelector('.event-info__date-value');

            function formatMonth() {
                const monthNames = [
                    "Январь", "Февраль", "Март",
                    "Апрель", "Май", "Июнь", "Июль",
                    "Август", "Сентябрь", "Октябрь",
                    "Ноябрь", "Декабрь"
                ];

                let eventYear = data.year;
                let monthIndex = data.month;
                eventMonthYear.textContent = `${monthNames[monthIndex - 1]}, ${eventYear}`;
            }

            formatMonth(data);

            let eventTime = document.querySelector('.event-info__time-value');
            eventTime.textContent = data.time;