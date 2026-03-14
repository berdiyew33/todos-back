CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  description TEXT,
  status boolean NOT NULL DEFAULT false
);

INSERT INTO tasks (task, description, status) VALUES
('Task 1', 'Description for Task 1', false),
('Task 2', 'Description for Task 2', false),
('Task 3', 'Description for Task 3', true);
