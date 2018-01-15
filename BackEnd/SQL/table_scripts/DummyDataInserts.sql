USE planme_schema;

INSERT INTO Users (Username, PasswordHash, EmailAddress, SignUpDate) VALUES ("BigDummy", "thisisnotahash", "example2@email.com", NOW());

INSERT INTO Projects (OwnerID, ProjectName) VALUES (1, "BigDummyProject");

INSERT INTO TaskBoards (TaskBoardName, Project) VALUES ("BigDummyTaskBoard", 4);

INSERT INTO Tasks (TaskBoard, TaskName, EffortValue, Description) VALUES (2, "BigDummyTask", 1, "This is a big dummy task");