import { TeamType } from './DataTypeTeamOneTwo.tsx'
import { GoalsType } from './DataTypeGoals.tsx';

export type Data = {
    team1: TeamType;
    team2: TeamType;
    matchIsFinished: boolean;
    goals: GoalsType[];
};
