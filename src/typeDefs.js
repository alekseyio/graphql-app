const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Project {
    id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }

  type Task {
    id: ID
    content: String
    completed: Boolean
    project: Project
  }

  type Query {
    projects: [Project]
    project(projectId: ID): Project
    task(taskId: ID): Task
  }

  type Mutation {
    "Create a new project"
    createProject(input: createProjectInput): Project
    "Delete a project"
    deleteProject(input: deleteProjectInput): deleteProjectPayload
    "Create a task"
    createTask(input: createTaskInput): createTaskPayload
  }

  input createProjectInput {
    "Project's name"
    name: String!
    "Project's description"
    description: String!
  }

  input deleteProjectInput {
    "Project's id"
    id: ID!
  }

  type deleteProjectPayload {
    statusCode: Int
    message: String
  }

  input createTaskInput {
    "Project's id"
    projectId: ID!
    "Task content"
    content: String!
  }

  type createTaskPayload {
    statusCode: Int
    message: String
    task: Task
  }
`;
