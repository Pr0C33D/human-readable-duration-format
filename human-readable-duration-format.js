https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration (seconds) {
    let output = '';
    let values = [];
    let lastValue = '';
    
    if (seconds <= 0) {
      return 'now';
    }
    
    formatDuration.units.forEach((unit) => {
      let number = Math.floor(seconds / unit.number);
      
      if (number >= 1) {
        values.push(number + ' ' + formatDuration.getPlural(number, unit.title));
        seconds -= number * unit.number
      }
    });
    
    if (values.length > 1) {
      lastValue = values.pop();
    }
    
    output = values.join(formatDuration.separates[0]);
    
    if (lastValue) {
      output += formatDuration.separates[1] + lastValue;
    }
    
    return output;
  }
  
  formatDuration.getPlural = (number, title) => (number !== 1) ? title + 's' : title;
  
  formatDuration.SECOND = 1;
  formatDuration.MINUTE = 60 * formatDuration.SECOND;
  formatDuration.HOUR = 60 * formatDuration.MINUTE;
  formatDuration.DAY = 24 * formatDuration.HOUR;
  formatDuration.YEAR = 365 * formatDuration.DAY;
  
  formatDuration.units = [
    {title: 'year', number: formatDuration.YEAR},
    {title: 'day', number: formatDuration.DAY},
    {title: 'hour', number: formatDuration.HOUR},
    {title: 'minute', number: formatDuration.MINUTE},
    {title: 'second', number: formatDuration.SECOND},
  ]
  
  formatDuration.separates = [', ', ' and ']