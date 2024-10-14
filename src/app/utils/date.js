import dayjs from 'dayjs';
import 'dayjs/locale/th'; // Load Thai locale
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat); 

dayjs.locale('th'); // Set locale to Thai



/**
 * Format a date range in Thai
 * @param {string} round - The string containing the date range
 * @returns {string} - The formatted date range in Thai
 */
export function formatRoundInThai(round) {
  if (!round || typeof round !== 'string') {
    return 'Invalid Date'; 
  }

  if (round.includes(' - ')) {
    const [startDate, endDate] = round.split(' - ');
    const parsedStartDate = dayjs(startDate, 'DD/MM/YYYY');
    const parsedEndDate = dayjs(endDate, 'DD/MM/YYYY'); 

    if (!parsedStartDate.isValid()) {
      console.error('Invalid start date:', startDate);
    }
    if (!parsedEndDate.isValid()) {
      console.error('Invalid end date:', endDate);
    }

    const formattedStartDate = parsedStartDate.isValid()
      ? parsedStartDate.format('DD MMMM YYYY')
      : 'Invalid Date';
    const formattedEndDate = parsedEndDate.isValid()
      ? parsedEndDate.format('DD MMMM YYYY')
      : 'Invalid Date';

    return `รอบ ${formattedStartDate} - ${formattedEndDate}`;
  } else {
    console.error('Invalid round format');
    return 'Invalid Date'; 
  }
}

