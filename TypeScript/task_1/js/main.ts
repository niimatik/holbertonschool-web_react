interface teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number ;
	location: string;
	[key: string]: any;
}

interface Directors extends teacher {
	numberOfReports: number
}
