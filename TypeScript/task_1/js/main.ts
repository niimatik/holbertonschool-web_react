interface student {
	firstName: string;
	lastName: string;
	age: number;
	location: string
}
const student1: student = {
	firstName: "Melvyn",
	lastName: "l'idiot",
	age: 22,
	location: "Marseille"
};
const student2: student = {
	firstName: "Clément",
	lastName: "lefou",
	age: 22,
	location: "Laval"
};

const studentsList: student[] = [student1, student2];

const table = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach((student) => {
	const row = table.insertRow();
	row.insertCell().textContent = student.firstName
	row.insertCell().textContent = student.location
});
