CREATE TABLE titanic_clean (
	passenger_id INT NOT NULL,
	survived BOOLEAN NOT NULL,
	pclass INT NOT NULL,
	name_person TEXT NOT NULL,
	sex TEXT NOT NULL,
	age INT NOT NULL,
	siblings_spouses_aboard INT NOT NULL,
	parents_children_aboard INT NOT NULL,
	ticket TEXT NOT NULL,
	fare INT NOT NULL,
	cabin TEXT NOT NULL,
	embarked TEXT NOT NULL
);

CREATE TABLE titanic (
	passenger_id INT NOT NULL,
	survived BOOLEAN NOT NULL,
	pclass INT NOT NULL,
	name_person TEXT NOT NULL,
	sex TEXT NOT NULL,
	age INT NOT NULL,
	siblings_spouses_aboard INT NOT NULL,
	parents_children_aboard INT NOT NULL,
	ticket TEXT NOT NULL,
	fare INT NOT NULL,
	cabin TEXT NOT NULL,
	embarked TEXT NOT NULL
);

CREATE TABLE titanic_pclass (
	pclass_1 INT NOT NULL,
	pclass_2 INT NOT NULL,
	pclass_3 INT NOT NULL
);


CREATE TABLE titanic_cabin (
	cabin_a INT NOT NULL,
	cabin_b INT NOT NULL,
	cabin_c INT NOT NULL,
	cabin_d INT NOT NULL,
	cabin_e INT NOT NULL,
	cabin_f INT NOT NULL,
	cabin_g INT NOT NULL,
	cabin_t INT NOT NULL,
	cabin_u INT NOT NULL
);

CREATE TABLE titanic_embarked (
	embarked_c INT NOT NULL,
	embarked_q INT NOT NULL,
	embarked_s INT NOT NULL
);
