interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string
};

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string
};

class director implements DirectorInterface {
	workFromHome(): string {
		return "Working from home"
	}
	getCoffeeBreak(): string {
		return "Getting a coffee break"
	}
	workDirectorTasks(): string {
		return "Getting to director tasks"
	}
};

class teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home"
	}
	getCoffeeBreak(): string {
		return "Cannot have a break"
	}
	workTeacherTasks(): string {
		return "Getting to work"
	}
};

function createEmployee(salary: number | string): teacher | director {
	if (typeof(salary) === "number" && salary < 500)
		return new teacher();
	return new director();
}

// Task 6
function isDirector(employee: director | teacher): employee is director {
	return employee instanceof director
}

function executeWork(employee: teacher | director): string {
	if (isDirector(employee))
		return employee.workDirectorTasks()
	return employee.workTeacherTasks()
}

// Task 7
type Subjects = "Math" | "History";

function teachClass(todayClass: string): string {
	return todayClass === "Math" ? "Teaching Math" : "Teaching History"
}
