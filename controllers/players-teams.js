import axios from 'axios';

const baseUrl = process.env.baseURL || "http://localhost:3001";
 
export async function allTeams(){
  return axios.get(`${baseUrl}/api/teams`)
}
 
export async function allPlayers(){
  return axios.get(`${baseUrl}/api/players`)
}
 
export async function allPlayersByTeamId(teamId) {
  return axios.get(`${baseUrl}/api/team/${teamId}/players`)
}