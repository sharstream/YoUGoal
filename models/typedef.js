const typeDefs = `
schema {
  query: Query
}
type Query {
  teams: [Team]
  players: [Player]
}
type Team {
  _id: ID!
  tla: String
  overallAvg: String
  shortName: String
  address: String
  phone: String
  website: String
  email: String
  founded: String
  clubColors: String
  venue: String
  lastUpdated: String
  Flags: String
  teamImg: String
  players: [Player]
}
type Player {
  _id: ID!
  name: String!
  postion: String
  tla: String
  jerseyNumber: String
  dateOfBirth: String
  nationality: String
  contractUntil: String
  marketValue: String
  teamID: String
  name1: String
  shortName: String
  address: String
  phone: String
  website: String
  email: String
  founded: String
  clubColors: String
  venue: String
  lastUpdated: String
  Flags: String
  plyrImg: String
}
`;