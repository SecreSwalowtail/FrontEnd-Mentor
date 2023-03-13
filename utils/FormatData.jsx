function formatData(date) {
    const regex = /^(\d{4})-(\d{2})-(\d{2})/;
    const match = date.match(regex);
    const year = match[1];
    const month = new Date(Date.parse(date)).toLocaleString('en-us', { month: 'short' });
    const day = match[3];

    const formattedDate = `Joined ${day} ${month} ${year}`;
    return formattedDate
}

export default formatData