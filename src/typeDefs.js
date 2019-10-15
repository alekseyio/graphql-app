const { gql } = require('apollo-server');

exports.typeDefs = gql`
  type Project {
    id: ID
    name: String
    description: String
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
`;
