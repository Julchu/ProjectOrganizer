USE planme_schema;

#ALTER TABLE ProjectMemberships CHANGE ID MembershipID INT;
#ALTER TABLE TaskAssignments CHANGE ID AssignmentID INT;
#ALTER TABLE TaskStates CHANGE ID StateID INT;
ALTER TABLE TaskStates CHANGE State StateName VARCHAR(20); --Did not run due to foreign key issue, will leave as is

#ALTER TABLE Tasks MODIFY COLUMN State INT UNSIGNED DEFAULT 1;

#ALTER TABLE Users MODIFY COLUMN EmailAddress VARCHAR(254) NOT NULL UNIQUE;