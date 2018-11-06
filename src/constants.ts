export enum PlayerStatus {
    Uninvited = 0,
    Invited = 1,
    WillNotPlay = 2,
    WillPlay = 3
}

export enum PlayerTeam {
    Home = 0,
    Away = 1
}

export const HOME_TEAM = 'Home';
export const AWAY_TEAM = 'Away';

// local storage variables
export const TEAM_PLAYERS = 'TeamPlayers';
export const FILTER_BY_PLAYER_STATUS = 'PlayerFilter';