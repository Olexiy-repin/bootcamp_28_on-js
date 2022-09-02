const calendarEl = document.querySelector('.js-calendar');
let prevCalendarItem = null;

const onCalendarItemClick = event => {
  // console.log('event.target: ', event.target);
  // console.log('event.currentTarget: ', event.currentTarget);
  const { target } = event;

  if (target.nodeName !== 'TD' || target.textContent === '') {
    return;
  }

  if (prevCalendarItem === target) {
    target.classList.toggle('active');

    return;
  }

  if (prevCalendarItem !== null) {
    prevCalendarItem.classList.remove('active');
  }

  target.classList.add('active');
  prevCalendarItem = target;
};

calendarEl.addEventListener('click', onCalendarItemClick);
