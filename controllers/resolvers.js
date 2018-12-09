import { allTeams, allPlayers, allPlayersByTeamId } from './players-teams';

const resolvers = {
  Query: {
    teams: () => allTeams(),
    players: () => allPlayers()
  },
  Team: {
    players: (team) => allPlayersByTeamId(team._id)
  }
}