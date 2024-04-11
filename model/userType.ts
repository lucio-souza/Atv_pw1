import {v4 as uuid} from 'uuid';
import technologies from './technologiesType';

type UserType={
    id:string,
    name:string,
    username:string,
    technologies:technologies[]
}
export default UserType;