// Task 1
interface teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number ;
	location: string;
	[key: string]: any;
}

// Task 2
interface Directors extends teacher {
	numberOfReports: number
}

// Task 3
interface printTeacherFunction{
	(firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}
