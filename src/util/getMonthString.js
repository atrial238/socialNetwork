const monthNames = ["January", "February", "March", "April", "May", "June",
	"July", "August", "September", "October", "November", "December"
 ];

export const getMonthString = (date) => monthNames[date.getMonth()];