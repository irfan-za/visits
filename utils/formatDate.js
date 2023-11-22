export const formatDate=(date)=>{
const dateObject = new Date(date);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = new Intl.DateTimeFormat('id-ID', options).format(dateObject);

return formattedDate
}
