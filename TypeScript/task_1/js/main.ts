// Task 1
interface teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number ;
	location: string;
	[key: string]: any;
};

// Task 2
interface Directors extends teacher {
	numberOfReports: number
};

// Task 3
interface printTeacherFunction {
	(firstName: string, lastName: string): string
};

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
};

// task 4
interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string
};

interface studentClassConstructor {
	new (firstName: string, lastName: string): string
};

class studentClass implements StudentClassInterface {
	constructor(public firstName: string, public lastName: string) {}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
};

const studentobj = new studentClass("matis", "Neveu");
console.log(studentobj.workOnHomework());
console.log(studentobj.displayName());
